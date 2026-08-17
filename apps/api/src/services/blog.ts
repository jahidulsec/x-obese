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

const createNew = async (
  info: createBlogInputsTypes & { filePath: string },
) => {
  const { imagePath, filePath, ...rest } = info;
  const data = await prisma.blogs.create({
    data: {
      ...rest,
      imagePath: filePath,
    },
  });

  return data;
};

const updateOne = async (
  idObj: requiredIdTypes,
  info: updateBlogInputTypes & { filePath?: string },
) => {
  //extract id from validated id by zod
  const { id } = idObj;
  const { imagePath, filePath, ...rest } = info;

  const updatedData = await prisma.blogs.update({
    where: { id: id },
    data: { ...rest, imagePath: filePath },
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
