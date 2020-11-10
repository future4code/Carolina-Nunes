import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { createUser } from "./endpoint/createUser";
import { login } from "./endpoint/login";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/signup", createUser)
app.post("/login", login)

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});