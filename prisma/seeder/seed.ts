import prisma from "prisma/client"; "../client";
import { seedUsers } from "./module/users";
import { seedPosts } from "./module/posts";

async function main() {
  console.log("Start seeding...");

  await seedUsers(prisma);
  await seedPosts(prisma);

  console.log("Seeding completed");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
