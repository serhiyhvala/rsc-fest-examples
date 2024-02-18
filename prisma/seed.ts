import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
  const userNames = [
    "soyer",
    "sergiy.bootcamp",
    "onikiienko",
    "tilda",
    "avo",
    "taras",
    "yarikrom",
  ];

  await Promise.all(
    userNames.map((item) =>
      prisma.comments.create({
        data: {
          user_name: item,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      }),
    ),
  );
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
