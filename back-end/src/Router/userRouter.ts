import express from 'express';

const router = express.Router();

router.get('/users', (req: express.Request, res: express.Response) => {
    res.send('User list');
});

export default router;