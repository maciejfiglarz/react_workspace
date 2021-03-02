import { Router } from 'express';

// const PostController = require("../controller/post");
import {getAll} from "../controllers/post"

let routes = Router();

// routes.get('/', (request, response) => {
//   response.send('Hello world!');
// });

routes.get("/", getAll);

routes.get('/hello', (req, res) => {
  res.status(200).json({test:'f'});
});


export default routes;