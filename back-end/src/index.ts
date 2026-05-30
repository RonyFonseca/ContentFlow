import express from 'express'; 
import userRouter from './Router/userRouter.js';


const app = express();
app.use(express.json());
app.use('/api', userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});