import { prisma } from "@/shared/db";
import { Censored } from "@/shared/ui/censored/censored";

export const HitCounter = async () => {
  const page = await prisma.page.update({
    where: {
      pageTitle: "First Page",
    },
    data: {
      viewsCount: { increment: 1 },
    },
  });

  return <Censored count={page?.viewsCount} />;
};
