### Exercício 1

a) Acho que a utilização de strings permite que o id fique mais seguro do que números.

b) 
```
import { v4 } from "uuid";

export function generateId(): string {
    return v4();
}
```

### Exercício 2

a) O código se conecta com o banco de dados e a função *createUser* cria um novo usuário na tabela.

b) 
```
CREATE TABLE aula50_User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

c) 
*query:*
```
export const createUserData = async (
    id: string, 
    email: string, 
    password: string) => {
    await connection
      .insert({
        id,
        email,
        password,
      })
      .into("aula50_User");
};
```

### Exercício 3

a) Transforma em string o parâmetro para que o formato seja aceito no sign().

b) 
```
const expiresIn = "1min";

export const generateToken = (input: AuthenticationData): string => {
    return jwt.sign(
        input,
        process.env.JWT_KEY as string,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    )
}
```

### Exercício 4

a b c)
```
export const createUser = async (
    req: Request, 
    res: Response
) => {
    
    const { email, password } = req.body

    try {
        if (!email || email.indexOf("@") === -1) {
            res.status(404).send({message: "E-mail inválido"})
        }
        if (!password || password.lenght > 6) {
            res.status(404).send({message: "Senha inválida"})
        }
        const id = generateId()

        await createUserData(
            id,
            email,
            password
        )
        
        const token = generateToken({id})
        res.status(200).send({
            token,
            message: "Usuário criado com sucesso!"
        })

    } catch (error) {
        res.status(400).send({message: error.message})
    }

}
```

### Exercício 5

a)
```
export const getUserByEmailData = async(
    email: string
    ): Promise<User> => {

    const result = await connection
      .select("*")
      .from("aula50_User")
      .where({ email });
 
    return result[0];
}
```

### Exercício 6

a b)
```
export const login = async (
    req: Request, 
    res: Response
) => {
    
    const { email, password } = req.body

    try {
        if (!email || email.indexOf("@") === -1) {
            res.status(404).send({message: "E-mail inválido"})
        }

        const user: User = await getUserByEmail(email)

        if (!user) {
            res.status(404).send({message: "Usuário não encontrado ou senha incorreta"})
        }

        if (user.password !== password){
            res.status(404).send({message: "Usuário não encontrado ou senha incorreta"})
        }
        
        const token = generateToken({id: user.id})
        res.status(200).send({
            token,
            message: "Login realizado com sucesso!"
        })

    } catch (error) {
        res.status(400).send({message: error.message})
    }

}
```

### Exercício 7

```
export const getToken = (
    token: string
): AuthenticationData => {
    return jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as AuthenticationData
}
```





