import express from 'express';
import postController from '../controller/postController.js';

const router = express.Router();
const postControllerInstance = new postController();

//método listarPosts()
router.get('/posts', postControllerInstance.getAllPosts);

router.get('/post/:idPost', postControllerInstance.getPostById);

//método criarPost()
router.post('/createPost', postControllerInstance.createPost);

//método alterarStatus()
router.patch('/posts/:idPost/status', postControllerInstance.updatePost);

//método removerPost()
router.delete('/posts/:idPost/delete', postControllerInstance.deletePost);

export default router;

