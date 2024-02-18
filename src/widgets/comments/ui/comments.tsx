import { prisma } from "@/shared/api";
import { delay } from "@/shared/lib";

export const Comments = async () => {
  await delay(4000);
  const comments = await prisma.comments.findMany();

  return JSON.stringify(comments);
};
