import path from "path";
import morgan from "morgan";
import express, { Express, Request, Response } from "express";
// import { ApolloServer } from "apollo-server-express";
// import context  from "./graphql/context";

import Api1 from "./routes/api";
// import { executableSchema } from "./graphql/index";

const app: Express = express();

// const graphqlServer = new ApolloServer({
//   introspection: true,
//   schema: executableSchema,
//   formatError: (error) => {
//     return error;
//   },
//   context,
// });

app.use(express.json());
app.use(morgan("combined"));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/v1", Api1);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ status: "Server is running" });
});

export { app};

// "@graphql-tools/load-files": "^6.6.1",
// "@graphql-tools/schema": "^10.0.0",
// "apollo-server-express": "^3.12.1",
// "cors": "^2.8.5",
// "graphql": "^15.8.0",
// "graphql-subscriptions": "^2.0.0",
// "graphql-tools": "^7.0.5",
// "graphql-ws": "^5.14.0",