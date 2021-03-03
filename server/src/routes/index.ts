import { Router } from 'express';
import postsRouter from './posts'

const routes = Router();

routes.use('/posts', postsRouter);

// export default routes;


export default routes;