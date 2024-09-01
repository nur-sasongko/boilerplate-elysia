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
