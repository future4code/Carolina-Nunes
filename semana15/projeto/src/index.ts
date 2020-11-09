import express from 'express'
import cors from 'cors'
import knex from "knex";
import dotenv from "dotenv";
import { createUser } from './endpoint/createUser';
import { getUserById } from './endpoint/getUserById';
import { updateUser } from './endpoint/updateUser';
import { createTask } from './endpoint/createTask';
import { getTaskById } from './endpoint/getTaskById';

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express()
app.use(express.json())
app.use(cors())

app.put("/user", createUser)
app.get("/user/:id", getUserById)
app.post("/user/edit/:id", updateUser)
app.put("/task", createTask)
app.get("/task/:id", getTaskById)


app.listen(3003, () => {
    console.log("Servidor ok na porta 3003!")
})