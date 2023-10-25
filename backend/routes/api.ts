import { Router } from 'express';

const Api1 = Router();

import helloRouter from './hello/hello.router';
import usersRouter from './users/router.router';

Api1.use('/hello', helloRouter);
Api1.use('/user', usersRouter);

export default Api1;
