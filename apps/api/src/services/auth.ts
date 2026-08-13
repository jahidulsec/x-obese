import { prisma } from "@repo/database";
import type { createLoginInputTypes, requiredIdTypes } from "@repo/validator";
import { addMinutesToDate, generateOtp } from "../libs/otp.ts";

const getLoginOtp = async (
  info: createLoginInputTypes,
  defaultCode?: boolean,
) => {
  // get user
  const user = await prisma.users.findUnique({
    where: { mobile: info.mobile },
  });

  //   generate otp
  const expireAt = addMinutesToDate(new Date(), 5);
  let code = generateOtp();

  if (defaultCode === true) {
    code = "123456";
  }

  // create otp by user id
  const data = await prisma.otp.create({
    data: {
      userId: user?.id,
      code: code,
      useCase: "login",
      expiresAt: expireAt,
    },
  });

  return data;
};

const getSignUpOtp = async (
  info: createLoginInputTypes,
  defaultCode?: boolean,
) => {
  //   generate otp
  const expireAt = addMinutesToDate(new Date(), 5);
  let code = generateOtp();

  if (defaultCode === true) {
    code = "123456";
  }

  // create otp by user id
  const data = await prisma.otp.create({
    data: {
      mobile: info.mobile,
      code: code,
      useCase: "signup",
      expiresAt: expireAt,
    },
  });

  return data;
};

const getOtpById = async (idObj: requiredIdTypes) => {
  //extract id from validated id by zod
  const { id } = idObj;

  // get otp profile
  const data = await prisma.otp.findUnique({
    where: { id },
  });

  return data;
};

const createUser = async (info: createLoginInputTypes) => {
  const data = await prisma.users.create({
    data: {
      mobile: info.mobile,
    },
  });

  return data;
};

const deleteOtp = async (idObj: requiredIdTypes) => {
  //extract id from validated id by zod
  const { id } = idObj;

  const deleted = await prisma.otp.delete({
    where: { id },
  });

  return deleted;
};

export { getLoginOtp, getSignUpOtp, getOtpById, createUser, deleteOtp };
