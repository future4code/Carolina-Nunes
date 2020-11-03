import express, {Express, Request, Response} from 'express'
import cors from 'cors'

const app: Express = express()
app.use(express.json())
app.use(cors())

type Account = {
    name: string,
    cpf: string,
    dateOfBirth: Date,
    balance: number,
    statement: Array<Transaction>
}

type Transaction = {
    value: number,
    date: Date,
    description: string
}

const accounts: Account[] = []

app.post("/users", (req: Request, res: Response): void=>{
    
    try{

        const {name, cpf, dateOfBirthAsString} = req.body;

        const [day, month, year] = dateOfBirthAsString.split("/")
        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

        const ageInMiliseconds: number = Date.now() - dateOfBirth.getTime()
        const ageInYears: number = ageInMiliseconds / 1000 / 60 / 60 / 24 / 365

        if (ageInYears < 18){
            res.statusCode = 406
            throw new Error("Idade deve ser maior que 18 anos")
        }

        accounts.push({
            name: name, 
            cpf: cpf, 
            dateOfBirth: dateOfBirth, 
            balance: 0,
            statement: []
        })

        res.status(201).send({
            message: "Conta criada com sucesso!"
        })
    } catch(error){
        console.log(error)
        res.send(error.message);
    }
});

app.get("/users", (req: Request, res: Response): void =>{

    try{
        if (!accounts.length){
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }
        res.status(200).send(accounts);
    }catch(error){
        res.send(error.message);
    }
});


app.listen(3003, () => {
    console.log("Servidor ok na porta 3003!")
})