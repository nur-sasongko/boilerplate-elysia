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
  .get("/", () => getPosts())
  .get("/:id", ({ params: { id } }) => getPostById(id), {
    params: t.Object({
      id: t.String(),
    }),
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
    }
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
    }
  )
  .delete("/:id", ({ params: { id } }) => deletePost(id), {
    params: t.Object({
      id: t.String(),
    }),
  });

export default Routes;
