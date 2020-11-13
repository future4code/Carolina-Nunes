import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import createUser from "./endpoints/createUser";
import { loginUser } from "./endpoints/loginUser";
import { getUserProfile } from "./endpoints/getUserProfile";
import { getUserById } from "./endpoints/getUserById";
import { createRecipe } from "./endpoints/createRecipe";
import { getRecipeById } from "./endpoints/getRecipeById";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());


app.post('/signup', createUser)
app.post('/login', loginUser)
app.get('/user/profile', getUserProfile)
app.get('/user/:id', getUserById)
app.post('/recipe', createRecipe)
app.get('/recipe/:id', getRecipeById)



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});