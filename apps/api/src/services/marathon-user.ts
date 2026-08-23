import { Prisma, prisma } from "@repo/database";
import type {
  createMarathonUserInputsTypes,
  marathonUsersQueryInputTypes,
  requiredIdTypes,
  updateMarathonUserInputTypes,
} from "@repo/validator";

const getMulti = async (queries: marathonUsersQueryInputTypes) => {
  const size = queries?.size ?? 20;
  const page = queries?.page ?? 1;
  const marathonId = queries?.marathonId;
  const search = queries?.search ?? "";

  const offset = size * (page - 1);

  const searchFilter = search
    ? Prisma.sql`AND u.full_name LIKE ${`%${search}%`}`
    : Prisma.empty;

  const data = await prisma.$queryRaw<
    {
      id: string;
      marathonId: string;
      distanceKm: number;
      durationMs: number;
      submissionCount: number;
      fullName: string;
      image: string | null;
      rank: bigint;
    }[]
  >(Prisma.sql`
    SELECT *
    FROM (
      SELECT
        mu.id,
        mu.marathon_id AS marathonId,
        mu.distance_km AS distanceKm,
        mu.duration_ms AS durationMs,
        mu.submission_count AS submissionCount,

        u.full_name AS fullName,
        u.image,

        RANK() OVER (
          ORDER BY
            mu.distance_km DESC,
            mu.duration_ms ASC
        ) AS rank

      FROM marathon_user mu
      INNER JOIN users u
        ON u.id = mu.user_id

      WHERE
        mu.marathon_id = ${marathonId}
        ${searchFilter}

    ) ranked

    ORDER BY
      distanceKm DESC,
      durationMs ASC

    LIMIT ${offset},${size}
  `);

  const count = await prisma.marathonUser.count({
    where: {
      marathonId,
      user: search
        ? {
            fullName: {
              contains: search,
            },
          }
        : undefined,
    },
  });

  return {
    data: data.map((item) => ({
      ...item,
      rank: Number(item.rank),
    })),
    count,
    page,
    size,
  };
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
      marathon_distance: true,
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
  const { distanceRuleId, ...rest } = info;

  const data = await prisma.marathonUser.create({
    data: {
      ...rest,
      distanceRuleId: distanceRuleId,
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
