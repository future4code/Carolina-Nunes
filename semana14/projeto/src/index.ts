import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

type DadosCliente = {
    nome: string,
    cpf: string,
    dataDeNascimento: string,
    saldo: number,
    extrato: Extrato[]
}

type Extrato = {
    valor: number,
    data: string,
    descricao: string
}

let clientes: DadosCliente[] = [
    {
        nome: "Carolina",
        cpf: "99099099099",
        dataDeNascimento: "07/12/1982",
        saldo: 0,
        extrato: [
            {
                valor: 10,
                data: "20/02/2020",
                descricao: "deposito"
            }
        ]
    }
]

app.post("/users", (req: Request, res: Response): void=>{
    

    try{

        const {nome, cpf, dataDeNascimento, saldo} = req.body;

        const cliente: DadosCliente = {
            nome: nome,
            cpf: cpf,
            dataDeNascimento: dataDeNascimento,
            saldo: saldo,
            extrato: []
        }

        clientes.push(cliente);

        res.status(200).send({
            message: "Conta criada com sucesso!"
        })
    } catch(error){
        res.status(400).send({
            message: "Erro ao criar conta"
        });
    }
});

app.get("/users", (req: Request, res: Response): void =>{


    try{
        res.status(200).send(clientes);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});


app.listen(3003, () => {
    console.log("Servidor ok na porta 3003!")
})