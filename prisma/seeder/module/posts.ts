import { PrismaClient } from "@prisma/client";

export const seedPosts = async (prisma: PrismaClient) => {
  // Seed data for the Post model
  const posts = [
    {
      title: 'First Post',
      content: 'This is the content of the first post.',
    },
    {
      title: 'Second Post',
      content: 'This is the content of the second post.',
    },
    {
      title: 'Third Post',
      content: 'This is the content of the third post.',
    },
  ];

  for (const post of posts) {
    await prisma.post.create({
      data: post,
    });
  }

  console.log("Posts created successfully");
}
