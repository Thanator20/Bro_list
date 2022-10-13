import express from 'express';
import cors from 'cors';
import friendsRouter from './friends.routes';

const apiRouter = express.Router();

apiRouter.use(cors());
apiRouter.use(express.json());
apiRouter.use('/friends', friendsRouter);

export default apiRouter;
