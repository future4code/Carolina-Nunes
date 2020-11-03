import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import knex from "knex";
import dotenv from "dotenv";
import { getActorByName } from './endpoins/getActorByName';
import { getGender } from './endpoins/getGender';
import { actorUpdate } from './endpoins/actorUpdate';
import { actorDelete } from './endpoins/actorDelete';
import { salaryAvg } from './endpoins/salaryAvg';
import { getActorById } from './endpoins/getActorById';
import { getActorByGender } from './endpoins/getActorByGender';

dotenv.config();

export const connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || "3306"),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
});

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/actor/:name", getActorByName)
app.get("/actor/:gender", getGender)
app.put("/actors/update/salary", actorUpdate)
app.delete('/actors/delete/:id', actorDelete)
app.get('/actors/salary/:gender', salaryAvg)
app.get("/actor/:id", getActorById)
app.get('/actors', getActorByGender)

app.listen(3306, () => {
    console.log("Servidor rodando...")
})