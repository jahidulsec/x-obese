import { MarathonType, prisma } from "@repo/database";
import type {
  createMarathonInputsTypes,
  marathonsQueryInputTypes,
  requiredIdTypes,
  updateMarathonInputTypes,
} from "@repo/validator";

const getMulti = async (queries: marathonsQueryInputTypes) => {
  const size = queries?.size ?? 20;
  const page = queries?.page ?? 1;
  const sort = queries?.sort ?? "desc";
  const type = queries?.type;
  const active = queries.active ?? false;

  const [data, count] = await Promise.all([
    prisma.marathon.findMany({
      where: {
        type: type,
        title: {
          startsWith: queries.search || undefined,
        },
        ...(active === "1" && {
          endDate: {
            gt: new Date(),
          },
        }),
      },
      include: { Rewards: true },
      take: size,
      skip: size * (page - 1),
      orderBy: {
        createdAt: sort,
      },
    }),
    prisma.marathon.count({
      where: {
        type: type,
        title: {
          startsWith: queries.search || undefined,
        },
        ...(active === "1" && {
          endDate: {
            gt: new Date(),
          },
        }),
      },
    }),
  ]);

  return { data, count, page, size };
};

const getMultiByUserId = async (
  queries: marathonsQueryInputTypes,
  userId: string,
) => {
  const size = queries?.size ?? 20;
  const page = queries?.page ?? 1;
  const sort = queries?.sort ?? "desc";
  const type = queries?.type;
  const active = queries.active ?? false;

  const [data, count] = await Promise.all([
    prisma.marathon.findMany({
      where: {
        type: type,
        title: {
          startsWith: queries.search || undefined,
        },
        ...(active === "1" && {
          endDate: {
            gt: new Date(),
          },
        }),
        MarathonUser: {
          some: {
            userId: userId,
          },
        },
      },
      take: size,
      skip: size * (page - 1),
      orderBy: {
        createdAt: sort,
      },
    }),
    prisma.marathon.count({
      where: {
        type: type,
        title: {
          startsWith: queries.search || undefined,
        },
        ...(active === "1" && {
          endDate: {
            gt: new Date(),
          },
        }),
        MarathonUser: {
          some: {
            userId: userId,
          },
        },
      },
    }),
  ]);

  return { data, count, page, size };
};

const getSingle = async (idObj: requiredIdTypes) => {
  const { id } = idObj;

  //extract id from validated id by zod
  const [data, totalParticiants, participants] = await Promise.all([
    prisma.marathon.findUnique({
      where: { id },
      include: {
        Rewards: true,
        MarathonDistance: true,
      },
    }),
    prisma.marathonUser.count({
      where: { marathonId: id },
    }),
    prisma.marathonUser.findMany({
      where: {
        marathonId: id,
      },
      select: {
        user: {
          select: {
            id: true,
            fullName: true,
            image: true,
          },
        },
      },
      take: 3,
      orderBy: {
        createdAt: "desc",
      },
    }),
  ]);

  return { data, totalParticiants, participants };
};

const getSingleByUserId = async (idObj: requiredIdTypes, userId: string) => {
  const { id } = idObj;

  //extract id from validated id by zod
  const [data, totalParticiants, participants] = await Promise.all([
    prisma.marathon.findUnique({
      where: {
        id: id,
        MarathonUser: {
          some: {
            userId: userId,
          },
        },
      },
      include: {
        Rewards: true,
        MarathonDistance: true,
      },
    }),
    prisma.marathonUser.count({
      where: { marathonId: id },
    }),
    prisma.marathonUser.findMany({
      where: {
        marathonId: id,
      },
      select: {
        user: {
          select: {
            id: true,
            fullName: true,
            image: true,
          },
        },
        marathon_distance: true,
      },
      take: 3,
      orderBy: {
        createdAt: "desc",
      },
    }),
  ]);

  const marathonUser = await prisma.marathonUser.findMany({
    where: {
      marathonId: data?.id ?? "",
      userId: userId,
    },
  });

  return { data, totalParticiants, participants, marathonUser };
};

const getStats = async (type?: MarathonType) => {
  const data = await prisma.marathon.aggregate({
    where: {
      endDate: {
        gt: new Date(),
      },
      type: type ?? undefined,
    },
    _count: {
      id: true,
    },
  });

  return data._count.id;
};

const createNew = async (
  info: createMarathonInputsTypes & {
    fileName?: string;
  },
) => {
  const rewardsList = (info.rewards ?? []).map((title) => ({
    text: title,
  }));

  const data = await prisma.marathon.create({
    data: {
      title: info.title,
      about: info.about,
      startDate: info.startDate,
      endDate: info.endDate,
      description: info.description,
      type: info.type,
      distanceKm: info.distanceKm,
      imagePath: info.fileName,
      Rewards: {
        createMany: {
          data: rewardsList,
        },
      },
      ...(info.distanceRule && {
        MarathonDistance: {
          createMany: {
            data: info.distanceRule.map((i) => ({
              distanceKm: i.distanceKm,
              description: i.description,
              attemptNo: i.attemptNo,
            })),
          },
        },
      }),
    },
    include: {
      Rewards: true,
      MarathonDistance: true,
    },
  });

  return data;
};

const updateOne = async (
  idObj: requiredIdTypes,
  info: updateMarathonInputTypes & { fileName?: string },
) => {
  //extract id from validated id by zod
  const { id } = idObj;

  const rewardsList = (info.rewards ?? []).map((title) => ({
    text: title,
  }));

  const updatedData = await prisma.marathon.update({
    where: { id: id },
    data: {
      title: info.title,
      about: info.about,
      startDate: info.startDate,
      endDate: info.endDate,
      description: info.description,
      type: info.type,
      distanceKm: info.distanceKm,
      imagePath: info.fileName,
      ...(info.rewards && {
        Rewards: {
          createMany: {
            data: rewardsList,
          },
        },
      }),
    },
    include: {
      Rewards: true,
    },
  });

  if (info.type === "onsite") {
    await prisma.marathonDistance.deleteMany({
      where: {
        marathonId: updatedData.id,
      },
    });
  }

  if (info.distanceRule) {
    const distanceRule = info.distanceRule;

    for (const i of distanceRule) {
      await prisma.marathonDistance.upsert({
        where: { id: i.distanceRuleId ?? "" },
        create: {
          marathonId: updatedData.id,
          distanceKm: i.distanceKm,
          attemptNo: i.attemptNo,
          description: i.description,
        },
        update: {
          marathonId: updatedData.id,
          distanceKm: i.distanceKm,
          attemptNo: i.attemptNo,
          description: i.description,
        },
      });
    }
  }

  return updatedData;
};

const deleteOne = async (idObj: requiredIdTypes) => {
  //extract id from validated id by zod
  const { id } = idObj;

  const deleted = await prisma.marathon.delete({
    where: { id: id },
  });

  return deleted;
};

const deleteReward = async (id: string) => {
  const deleted = await prisma.rewards.delete({
    where: { id: id },
  });

  return deleted;
};

const deleteMarathonUserRule = async (id: string) => {
  const deleted = await prisma.marathonDistance.delete({
    where: { id: id },
  });

  return deleted;
};

export {
  getMulti,
  getMultiByUserId,
  getSingle,
  getSingleByUserId,
  createNew,
  updateOne,
  deleteOne,
  getStats,
  deleteReward,
  deleteMarathonUserRule,
};
