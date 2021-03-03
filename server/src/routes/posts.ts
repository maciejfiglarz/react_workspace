import { Router } from 'express';

// const PostController = require("../controller/post");
import {getAll,insertPost,pagination } from "../controllers/post"

const routes = Router();

routes.get("/", getAll);
routes.get("/pagination", pagination);
routes.post("/insert", insertPost );


export default routes;