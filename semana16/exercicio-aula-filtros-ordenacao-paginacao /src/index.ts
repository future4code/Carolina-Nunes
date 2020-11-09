import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserByName } from "./endpoints/getUserByName";
import { getUserByType } from "./endpoints/getUserByType";
import { getSearchUser } from "./endpoints/getSearchUser";
import { getUserLimitFive } from "./endpoints/getUserLimitFive";
import { getSpecificSearch } from "./endpoints/getSpecificSearch";

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

app.get('/users', getAllUsers)
app.get('/users/name/:name', getUserByName)
app.get('/users/type/:type', getUserByType)
app.get('/users/search', getSearchUser)
app.get('/users/limitfive', getUserLimitFive)
app.get('/users/search/specific', getSpecificSearch)



const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
