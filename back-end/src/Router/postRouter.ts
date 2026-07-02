import express from 'express';
import postController from '../Controller/postController.js';
import middleware from '../midleware/jwtValidate.js';

const router = express.Router();
const postControllerInstance = new postController();

//método listarPosts()
router.get('/posts', postControllerInstance.getAllPosts);

router.get('/getAllPostsById', middleware, postControllerInstance.getAllPostsById);

router.get('/post/:idPost', postControllerInstance.getPostById);

//método criarPost()
router.post('/createPost', middleware, postControllerInstance.createPost);

//método alterarStatus()
router.patch('/posts/:idPost/status', postControllerInstance.updatePost);

//método removerPost()
router.delete('/posts/:idPost/delete', postControllerInstance.deletePost);

export default router;

