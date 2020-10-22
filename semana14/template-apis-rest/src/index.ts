//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';
//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

//Exercício 1
// a. Usaria o método GET
// b. A entidade é /users

//Exercício2
// a. Usando um filtro
// b. Usando o TYPE e o ENUM

//Exercício 4
// a. É preciso substituir o dado existente, então usamos o index.
// b. Não, porque ele só edita os dados um usuário existente, não cria outros.

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

//Exercício 3

app.get("/users/query", (req: Request, res: Response): void =>{

    const name = req.query.name;
    console.log("o nome que chegou: ", name);
    try{

        const user = users.filter((u)=> u.name === name);

        if(!user){
            throw new Error();
        }

        res.status(200).send(user);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});


app.get("/users", (req: Request, res: Response): void =>{

    try{
        res.status(200).send(users);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

app.get("/users/:type", (req: Request, res: Response): void =>{

    try{
        const usersByType = users.filter((user)=>user.type === req.params.type
        )
        res.status(200).send(usersByType);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

app.post("/users", (req: Request, res: Response): void=>{
    try{
        const {id, name, email, age, type} = req.body;
        const user = {
            id,
            name,
            email,
            age,
            type
        }

        users.push(user);
        res.status(200).send({message: "User created successfully"});
    }catch(error){
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})



app.put("/users", (req: Request, res: Response): void=>{

    try{

        const {id, name, email, age, type} = req.body;

        const userIndex = users.findIndex((u)=> u.id === id);

        if(userIndex === -1){
            throw new Error();
        }

        users[userIndex].name = name;
        users[userIndex].email = email;
        users[userIndex].age = age;
        users[userIndex].type = type;

        res.status(200).send({message: "User updated successfully"});
    }catch(error){
        res.status(400).send({
            message: "Error inserting users"
        });
    }
});

app.delete("/users/:id", (req: Request, res: Response): void =>{

    try{
        const result: number | undefined = users.findIndex(
            (user) => user.id === Number(req.params.id)
        )
            if(result === -1){
                throw new Error
            }
        users.splice(result, 1)
        
        res.status(200).end()
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
