import { Router } from 'express';

const usersRouter = Router();

import userController from './users.controller';

usersRouter.get('/getuser/:id', userController.getUser);
usersRouter.get('/', userController.getAllUsers);
usersRouter.post('/createuser', userController.createUser);

export default usersRouter;
