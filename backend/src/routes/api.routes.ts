import express from 'express';
import cors from 'cors';
import friendsRouter from './friends.routes';
import favouriteFoodRouter from './favFood.routes';

const apiRouter = express.Router();

apiRouter.use(cors());
apiRouter.use(express.json());
apiRouter.use('/friends', friendsRouter);
apiRouter.use('/food', favouriteFoodRouter);

export default apiRouter;
