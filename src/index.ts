import { Elysia } from "elysia";

import Routes from "./routes";
import { getPosts } from "./controllers/PostController";

const app = new Elysia()
  .get("/", () => `Welcome to a ${Bun.env.APP_NAME}`)
  .get("/api/posts",  () => getPosts())
  .listen(Bun.env.APP_PORT as string);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
