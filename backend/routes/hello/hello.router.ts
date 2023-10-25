import { Router } from 'express';

const helloRouter = Router();

import helloController from './hello.controller';

helloRouter.get('/', helloController.sayHello);

export default helloRouter;
