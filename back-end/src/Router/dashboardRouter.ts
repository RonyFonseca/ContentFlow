import express from 'express';

const router = express.Router();

//gerarResumo e calcularPostsPorStatus
router.get('/dashboard/summary', (req: express.Request, res: express.Response) => {
    res.status(200).json({ message: 'Resumo estatístico dos posts por status' });
});

//método calcularAlcanceTotal()
router.get('/dashboard/reach', (req: express.Request, res: express.Response) => {
    res.status(200).json({ message: 'Dados de alcance analítico por dia da semana' });
});

export default router;