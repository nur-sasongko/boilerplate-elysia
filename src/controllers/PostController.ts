import { errorResponse, successResponse } from "@/libs/ResponseFormatter";
import prisma from "../../prisma/client";

/**
 * Getting all posts
 */
export const getPosts = async () => {
  try {
    const posts = await prisma.post.findMany({ orderBy: { id: "desc" } });

    if (!posts) {
      return errorResponse(null, "Posts Not Found!", 404);
    }

    return successResponse(posts, "List Data Posts!", 200);
  } catch (e: unknown) {
    console.error(`Error getting posts: ${e}`);
    return errorResponse(e, "Error getting posts", 500);
  }
}

/**
 * Getting a post by ID
 */
export const getPostById = async (id: string) => {
  try {
    // Konversi tipe id menjadi number
    const postId = parseInt(id);

    //get post by id
    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    //if post not found
    if (!post) {
      return errorResponse(null, "Post Not Found!", 404);
    }

    return successResponse(post, `Detail Data Post By ID : ${id}`, 200);
  } catch (e: unknown) {
    console.error(`Error getting post by id: ${e}`);
    return errorResponse(e, "Error getting post by id", 500);
  }
}

/**
 * Creating a post
 */
export const createPost = async (options: { title: string; content: string }) => {
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

    return successResponse(post, "Post Created Successfully!", 201);
  } catch (e: unknown) {
    console.error(`Error creating post: ${e}`);
    return errorResponse(e, "Error creating post", 500);
  }
}

/**
 * Updating a post
 */
export const updatePost = async (
  id: string,
  options: { title?: string; content?: string }
) => {
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

    return successResponse(post, "Post Updated Successfully!", 200);

  } catch (e: unknown) {
    console.error(`Error updating post: ${e}`);
    return errorResponse(e, "Error updating post", 500);
  }
}

/**
 * Deleting a post
 */
export const deletePost = async (id: string) => {
  try {
    const postId = parseInt(id);

    //get post by id
    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    //if post not found
    if (!post) {
      return errorResponse(null, "Post Not Found!", 404);
    }

    //delete post with prisma
    await prisma.post.delete({
      where: { id: postId },
    });

    //return response json
    return successResponse(null, "Post Deleted Successfully!", 200);
  } catch (e: unknown) {
    console.error(`Error deleting post: ${e}`);
    return errorResponse(e, "Error deleting post", 500);
  }
}
