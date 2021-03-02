import { Router } from 'express';
import postsRouter from './posts'

let routes = Router();

routes.use('/posts', postsRouter);

// export default routes;


export default routes;