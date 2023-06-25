import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from './app/modules/user/user.routes';
import globalErrorHandler from './middlewares/globalErrorHandler';
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user/', userRoutes);

// Global Error Handler
app.use(globalErrorHandler);

export default app;
