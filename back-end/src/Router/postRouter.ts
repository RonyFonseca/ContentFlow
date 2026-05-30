import express from 'express';
import postController from '../Controller/postController.js';

const router = express.Router();
const postControllerInstance = new postController();

//método listarPosts()
router.get('/posts', (req: express.Request, res: express.Response) => {
    res.status(200).json({ message: 'Lista de posts' });
});

//método criarPost()
router.post('/createPost', postControllerInstance.createPost);

//método alterarStatus()
router.patch('/posts/:idPost/status', postControllerInstance.updatePost);

//método removerPost()
router.delete('/posts/:idPost/delete', postControllerInstance.deletePost);

export default router;

