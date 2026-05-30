import express from 'express';

const router = express.Router();

//método listarPosts()
router.get('/posts', (req: express.Request, res: express.Response) => {
    res.status(200).json({ message: 'Lista de posts' });
});

//método criarPost()
router.post('/posts', (req: express.Request, res: express.Response) => {
    res.status(201).json({ message: 'Post criado com sucesso' });
});

//método alterarStatus()
router.patch('/posts/:id/status', (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    res.status(200).json({ message: `Status do post ${id} alterado` });
});

//método removerPost()
router.delete('/posts/:id', (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    res.status(200).json({ message: `Post ${id} removido` });
});

export default router;

