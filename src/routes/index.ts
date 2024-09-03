//import elysia
import { Elysia, t } from "elysia";

import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from "@/controllers/PostController";

const Routes = new Elysia({ prefix: "/posts" })
  .get("/", () => getPosts(), {
    detail: {
      summary: "Get all posts",
      tags: ["Posts"],
    },
  })
  .get("/:id", ({ params: { id } }) => getPostById(id), {
    params: t.Object({
      id: t.String(),
    }),
    detail: {
      summary: "Get a post by ID",
      tags: ["Posts"],
    },
  })
  .post(
    "/",
    ({ body }) => createPost(body as { title: string; content: string }),
    {
      body: t.Object({
        title: t.String({
          minLength: 3,
          maxLength: 100,
        }),
        content: t.String({
          minLength: 3,
          maxLength: 1000,
        }),
      }),
      detail: {
        summary: "Create a post",
        tags: ["Posts"],
      }
    },
  )
  .patch(
    "/:id",
    ({ params: { id }, body }) =>
      updatePost(id, body as { title?: string; content?: string }),
    {
      params: t.Object({
        id: t.String(),
      }),
      body: t.Object({
        title: t.String({
          minLength: 3,
          maxLength: 100,
        }),
        content: t.String({
          minLength: 3,
          maxLength: 1000,
        }),
      }),
      detail: {
        summary: "Update a post by ID",
        tags: ["Posts"],
      }
    }
  )
  .delete("/:id", ({ params: { id } }) => deletePost(id), {
    params: t.Object({
      id: t.String(),
    }),
    detail: {
      summary: "Delete a post by ID",
      tags: ["Posts"],
    },
  });

export default Routes;
