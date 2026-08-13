import { prisma } from "@repo/database";
import type {
  adminsQueryInputTypes,
  createAdminInputsTypes,
  requiredIdTypes,
  updateAdminInputTypes,
} from "@repo/validator";

const getMulti = async (queries: adminsQueryInputTypes) => {
  const size = queries?.size ?? 20;
  const page = queries?.page ?? 1;
  const sort = queries?.sort ?? "desc";

  const [data, count] = await Promise.all([
    prisma.admins.findMany({
      where: {
        name: {
          startsWith: queries.search || undefined,
        },
      },
      select: {
        name: true,
        username: true,
        id: true,
        role: true,
        createdAt: true,
        updateAt: true,
      },
      take: size,
      skip: size * (page - 1),
      orderBy: {
        createdAt: sort,
      },
    }),
    prisma.admins.count({
      where: {
        name: {
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
  const data = await prisma.admins.findUnique({
    where: { id },
  });

  return data;
};

const getSingleByUsername = async (username: string) => {
  //extract id from validated id by zod
  const data = await prisma.admins.findUnique({
    where: { username: username },
  });

  return data;
};

const createNew = async (info: createAdminInputsTypes) => {
  const data = await prisma.admins.create({
    data: {
      name: info.name,
      username: info.username,
      password: info.password,
      role: info.role,
    },
  });

  return data;
};

const updateOne = async (
  idObj: requiredIdTypes,
  info: updateAdminInputTypes,
) => {
  //extract id from validated id by zod
  const { id } = idObj;

  const updatedData = await prisma.admins.update({
    where: { id: id },
    data: { ...info, role: info.role },
  });
  return updatedData;
};

const deleteOne = async (idObj: requiredIdTypes) => {
  //extract id from validated id by zod
  const { id } = idObj;

  const deleted = await prisma.admins.delete({
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
  getSingleByUsername,
};
