import express from 'express'; 
import userRouter from './Router/userRouter.js';
import postRouter from './Router/postRouter.js';
import dashboardRouter from './Router/dashboardRouter.js';

const app = express();
app.use(express.json());
app.use('/api', userRouter);
app.use('/api', postRouter);
app.use('/api', dashboardRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});