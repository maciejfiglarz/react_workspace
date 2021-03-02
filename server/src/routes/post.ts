import express from 'express';
import controller from '../controllers/post';

const router = express.Router();

router.get('/', controller.getAllPosts);
// router.post('/posts/insert', controller.createPost);
// router.get('/get/books', controller.getAllBooks);

export = router;
