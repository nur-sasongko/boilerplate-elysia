import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";

import Routes from "./routes";

const app = new Elysia()
  .use(swagger({
    path: "/docs",
  }))
  .get("/", () => `Welcome to a ${Bun.env.APP_NAME}`)
  .group("/api", (app) => app.use(Routes))
  .listen(Bun.env.APP_PORT as string);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
