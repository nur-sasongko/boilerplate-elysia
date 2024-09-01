//import elysia
import { Elysia } from "elysia";

//import controller
import { getPosts } from "../controllers/PostController";

const Routes = new Elysia({ prefix: "/posts" })

  //route get all posts
  .get("/", () => getPosts());

export default Routes;
