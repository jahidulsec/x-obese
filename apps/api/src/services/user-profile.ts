import { prisma } from "@repo/database";
import type {
  createUserInputsTypes,
  requiredIdTypes,
  updateUserInputTypes,
  usersQueryInputTypes,
} from "@repo/validator";

const getMulti = async (queries: usersQueryInputTypes) => {
  const size = queries?.size ?? 20;
  const page = queries?.page ?? 1;
  const sort = queries?.sort ?? "desc";

  const [data, count] = await Promise.all([
    prisma.users.findMany({
      where: {
        fullName: {
          startsWith: queries.search || undefined,
        },
        mobile: {
          startsWith: queries.search || undefined,
        },
      },
      take: size,
      skip: size * (page - 1),
      orderBy: {
        createdAt: sort,
      },
    }),
    prisma.users.count({
      where: {
        fullName: {
          startsWith: queries.search || undefined,
        },
        mobile: {
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
  const data = await prisma.users.findUnique({
    where: { id },
  });

  return data;
};

const getSingleByMobile = async (mobile: string) => {
  //extract id from validated id by zod
  const data = await prisma.users.findUnique({
    where: { mobile: mobile },
  });

  return data;
};

const createNew = async (
  info: createUserInputsTypes & { filePath?: string },
) => {
  const { image, filePath, ...rest } = info;
  const data = await prisma.users.create({
    data: {
      ...rest,
      image: filePath,
    },
  });

  return data;
};

const updateOne = async (
  idObj: requiredIdTypes,
  info: updateUserInputTypes & { filePath?: string },
) => {
  //extract id from validated id by zod
  const { id } = idObj;
  const { filePath, image, ...rest } = info;

  const updatedData = await prisma.users.update({
    where: { id: id },
    data: { ...rest, image: filePath },
  });
  return updatedData;
};

const deleteOne = async (idObj: requiredIdTypes) => {
  //extract id from validated id by zod
  const { id } = idObj;

  const deleted = await prisma.users.delete({
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
  getSingleByMobile,
};
