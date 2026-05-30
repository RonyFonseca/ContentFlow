import express from 'express'; 
import userRouter from './Router/userRouter.js';
import postRouter from './Router/postRouter.js';
import dashboardRouter from './Router/dashboardRouter.js';

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(postRouter);
app.use(dashboardRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});