import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
  const page = await prisma.page.create({
    data: {
      pageTitle: "First Page",
    },
  });

  console.log({ page });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
