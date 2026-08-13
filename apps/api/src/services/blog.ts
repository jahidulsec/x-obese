import { prisma } from "@repo/database";
import type {
  blogsQueryInputTypes,
  createBlogInputsTypes,
  requiredIdTypes,
  updateBlogInputTypes,
} from "@repo/validator";

const getMulti = async (queries: blogsQueryInputTypes) => {
  const size = queries?.size ?? 20;
  const page = queries?.page ?? 1;
  const sort = queries?.sort ?? "desc";

  const [data, count] = await Promise.all([
    prisma.blogs.findMany({
      where: {
        title: {
          startsWith: queries.search || undefined,
        },
      },
      include: {
        admin: {
          select: {
            name: true,
          },
        },
      },
      take: size,
      skip: size * (page - 1),
      orderBy: {
        createdAt: sort,
      },
    }),
    prisma.blogs.count({
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
  const data = await prisma.blogs.findUnique({
    where: { id },
  });

  return data;
};

const createNew = async (info: createBlogInputsTypes) => {
  const data = await prisma.blogs.create({
    data: {
      ...info,
    },
  });

  return data;
};

const updateOne = async (
  idObj: requiredIdTypes,
  info: updateBlogInputTypes,
) => {
  //extract id from validated id by zod
  const { id } = idObj;

  const updatedData = await prisma.blogs.update({
    where: { id: id },
    data: { ...info },
  });
  return updatedData;
};

const deleteOne = async (idObj: requiredIdTypes) => {
  //extract id from validated id by zod
  const { id } = idObj;

  const deleted = await prisma.blogs.delete({
    where: { id: id },
  });

  return deleted;
};

export { getMulti, getSingle, createNew, updateOne, deleteOne };
