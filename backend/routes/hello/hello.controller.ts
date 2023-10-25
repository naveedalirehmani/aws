import { Request, Response } from 'express';

async function sayHello(request: Request, response: Response) {
  response.status(200).json("hello from express");
}

export default { sayHello};
