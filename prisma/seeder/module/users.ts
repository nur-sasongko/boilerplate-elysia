import { PrismaClient } from "@prisma/client";

export const seedUsers = async (prisma: PrismaClient) => {
  const bcryptHash = await Bun.password.hash("Super@123", {
    algorithm: "bcrypt",
    cost: 4,
  });

  await prisma.user.create({
    data: {
      email: "superadmin@gmail.com",
      name: "Superadmin",
      password: bcryptHash,
    },
  });

  console.log("Users created successfully");
}
