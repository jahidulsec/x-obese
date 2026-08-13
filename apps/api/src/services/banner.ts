import { prisma } from "@repo/database";
import type {
  bannersQueryInputTypes,
  createBannerInputsTypes,
  requiredIdTypes,
  updateBannerInputTypes,
} from "@repo/validator";

const getMulti = async (queries: bannersQueryInputTypes) => {
  const size = queries?.size ?? 20;
  const page = queries?.page ?? 1;
  const sort = queries?.sort ?? "desc";

  const [data, count] = await Promise.all([
    prisma.banner.findMany({
      where: {
        title: {
          startsWith: queries.search || undefined,
        },
      },
      take: size,
      skip: size * (page - 1),
      orderBy: {
        createdAt: sort,
      },
    }),
    prisma.banner.count({
      where: {
        title: {
          startsWith: queries.search || undefined,
        },
      },
    }),
  ]);

  return { data, count, page, size };
};

const getSingle = async (idObj: requiredIdTypes) => {
  const { id } = idObj;

  //extract id from validated id by zod
  const data = await prisma.banner.findUnique({
    where: { id },
  });

  return data;
};

const createNew = async (info: createBannerInputsTypes) => {
  const data = await prisma.banner.create({
    data: {
      ...info,
    },
  });

  return data;
};

const updateOne = async (
  idObj: requiredIdTypes,
  info: updateBannerInputTypes,
) => {
  //extract id from validated id by zod
  const { id } = idObj;

  const updatedData = await prisma.banner.update({
    where: { id: id },
    data: { ...info },
  });
  return updatedData;
};

const deleteOne = async (idObj: requiredIdTypes) => {
  //extract id from validated id by zod
  const { id } = idObj;

  const deleted = await prisma.banner.delete({
    where: { id: id },
  });

  return deleted;
};

export { getMulti, getSingle, createNew, updateOne, deleteOne };
