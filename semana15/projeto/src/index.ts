import express, {Request, Response} from 'express'
import cors from 'cors'
import knex from "knex";
import dotenv from "dotenv";
import { getUser } from './endpoint/getUser';
import { createUser } from './endpoint/createUser';

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express()
app.use(express.json())
app.use(cors())

app.get("/user/:id", getUser)
app.post("/user", createUser)



app.listen(3003, () => {
    console.log("Servidor ok na porta 3003!")
})