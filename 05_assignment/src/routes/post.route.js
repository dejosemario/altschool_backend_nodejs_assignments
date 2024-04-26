import {Router} from 'express';
import * as postController from '../controllers/post.controller.js';
import wrapper from '../middlewares/wrapper';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const postRoute = Router();

postRoute.get('/', wrapper(postController.getAllPosts));
postRoute.get('/:id', wrapper(postController.getPostById));

postRoute.post('/', authMiddleware, wrapper(postController.createPost));
postRoute.patch('/:id', authMiddleware, wrapper(postController.updatePost));
postRoute.delete('/:id', authMiddleware,  wrapper(postController.deletePost))

export default postRoute;