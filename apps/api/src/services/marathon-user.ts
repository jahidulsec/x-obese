import { prisma } from "@repo/database";
import type {
  createMarathonUserInputsTypes,
  marathonUsersQueryInputTypes,
  requiredIdTypes,
  updateMarathonUserInputTypes,
} from "@repo/validator";

const getMulti = async (queries: marathonUsersQueryInputTypes) => {
  const size = queries?.size ?? 20;
  const page = queries?.page ?? 1;
  const sort = queries?.sort ?? "desc";
  const marathonId = queries?.marathonId;

  const [data, count] = await Promise.all([
    prisma.marathonUser.findMany({
      where: {
        user: {
          fullName: {
            startsWith: queries.search || undefined,
          },
        },
        marathonId: marathonId,
      },
      include: {
        user: {
          select: {
            fullName: true,
            image: true,
          },
        },
      },
      take: size,
      skip: size * (page - 1),
      orderBy: [
        {
          distanceKm: sort,
        },
        {
          durationMs: "asc",
        },
      ],
    }),
    prisma.marathonUser.count({
      where: {
        user: {
          fullName: {
            startsWith: queries.search || undefined,
          },
        },
        marathonId: marathonId,
      },
    }),
  ]);

  return { data, count, page, size };
};

const getSingle = async (idObj: requiredIdTypes) => {
  const { id } = idObj;

  //extract id from validated id by zod
  const data = await prisma.marathonUser.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          fullName: true,
          image: true,
        },
      },
    },
  });

  return data;
};

const getSingleLeaderboard = async (idObj: requiredIdTypes) => {
  const { id } = idObj;

  //extract id from validated id by zod
  const user = await prisma.marathonUser.findUnique({
    where: {
      id,
    },
  });

  // get rank by stats
  const data = await prisma.marathonUser.count({
    where: {
      distanceKm: {
        gt: user?.distanceKm ?? 0,
      },
      durationMs: {
        gt: user?.durationMs ?? 0,
      },
    },
  });

  const rank = data + 1;

  return { user, rank };
};

const createNew = async (info: createMarathonUserInputsTypes) => {
  const data = await prisma.marathonUser.create({
    data: {
      ...info,
    },
  });

  return data;
};

const checkUserInMarathon = async (userId: string, marathonId: string) => {
  const data = await prisma.marathonUser.findUnique({
    where: {
      userId_marathonId: {
        userId,
        marathonId,
      },
    },
  });

  return data;
};

const updateOne = async (
  idObj: requiredIdTypes,
  info: updateMarathonUserInputTypes,
) => {
  //extract id from validated id by zod
  const { id } = idObj;

  const updatedData = await prisma.marathonUser.update({
    where: { id: id },
    data: {
      ...info,
    },
  });
  return updatedData;
};

const deleteOne = async (idObj: requiredIdTypes) => {
  //extract id from validated id by zod
  const { id } = idObj;

  const deleted = await prisma.marathonUser.delete({
    where: { id: id },
  });

  return deleted;
};

export {
  getMulti,
  getSingle,
  createNew,
  updateOne,
  deleteOne,
  getSingleLeaderboard,
  checkUserInMarathon,
};
