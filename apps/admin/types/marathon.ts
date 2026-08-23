import { Prisma } from "@repo/database";

export type MarathonProps = Prisma.MarathonGetPayload<{
  include: {
    Rewards: true;
    MarathonDistance: true;
  };
}>;
