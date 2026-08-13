export function addMinutesToDate(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 60 * 1000);
}

export const generateOtp = () => {
  const code = Math.floor(100000 + Math.random() * 900000);
  return code.toString();
};

export const verifyOtpTime = (expireAt: Date) => {
  const now = new Date();

  if (now.getTime() <= expireAt.getTime()) return true;
  return false;
};

export const sendOTP = async (mobile: string, code: string) => {
  // send otp to mobile
  const message = `Your One-Time Password (OTP) for Sales Knowledge Hub - Quiz is ${code}. This OTP will be valid for 5 minutes.`;

  // log otp for debugging
  console.log(`OTP for ${mobile}: ${code}`);

  try {
    const send = await fetch(
      `https://api.mobireach.com.bd/SendTextMessage?Username=${process.env.SMS_USERNAME}&Password=${process.env.SMS_PASSWORD}&From=Impala&To=${mobile}&Message=${message}`,
      {
        method: "GET",
      }
    );

    if (!send.ok) {
      console.error("SMS API Error:", await send.text());
    }
  } catch (error) {
    console.error("Failed to send SMS:", error);
  }
};