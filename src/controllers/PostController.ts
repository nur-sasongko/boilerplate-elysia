//import prisma client
import prisma from "../../prisma/client";

/**
 * Getting all posts
 */
export async function getPosts() {
  try {
    //get all posts
    const posts = await prisma.post.findMany({ orderBy: { id: "desc" } });

    //return response json
    return {
      success: true,
      message: "List Data Posts!",
      data: posts,
    };
  } catch (e: unknown) {
    console.error(`Error getting posts: ${e}`);
  }
}

/**
 * Getting a post by ID
 */
export async function getPostById(id: string) {
  try {
    // Konversi tipe id menjadi number
    const postId = parseInt(id);

    //get post by id
    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    //if post not found
    if (!post) {
      return {
        sucess: true,
        message: "Detail Data Post Not Found!",
        data: null,
      };
    }

    //return response json
    return {
      success: true,
      message: `Detail Data Post By ID : ${id}`,
      data: post,
    };
  } catch (e: unknown) {
    console.error(`Error finding post: ${e}`);
  }
}

/**
 * Creating a post
 */
export async function createPost(options: { title: string; content: string }) {
  try {
    //get title and content
    const { title, content } = options;

    //create data post
    const post = await prisma.post.create({
      data: {
        title: title,
        content: content,
      },
    });

    //return response json
    return {
      success: true,
      message: "Post Created Successfully!",
      data: post,
    };
  } catch (e: unknown) {
    console.error(`Error creating post: ${e}`);
  }
}

/**
 * Updating a post
 */
export async function updatePost(
  id: string,
  options: { title?: string; content?: string }
) {
  try {
    // Konversi tipe id menjadi number
    const postId = parseInt(id);

    //get title and content
    const { title, content } = options;

    //update post with prisma
    const post = await prisma.post.update({
      where: { id: postId },
      data: {
        ...(title ? { title } : {}),
        ...(content ? { content } : {}),
      },
    });

    //return response json
    return {
      success: true,
      message: "Post Updated Successfully!",
      data: post,
    };
  } catch (e: unknown) {
    console.error(`Error updating post: ${e}`);
  }
}

/**
 * Deleting a post
 */
export async function deletePost(id: string) {
  try {
    // Konversi tipe id menjadi number
    const postId = parseInt(id);

    //delete post with prisma
    await prisma.post.delete({
      where: { id: postId },
    });

    //return response json
    return {
      success: true,
      message: "Post Deleted Successfully!",
    };
  } catch (e: unknown) {
    console.error(`Error deleting post: ${e}`);
  }
}
