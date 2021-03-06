### Exercício 1

a) O salt acrescenta aleatoriamente sequências de caracteres a senha, projetando resultados criptográficos complexos e aumentando 

b c)
```
export const hash = async(s: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);
    return result;
}

export const compare = async(s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash);
}
```

### Exercício 2

a) O cadastro, para que a senha criada já seja criptografada.

b) 
```
export const createUser = async (
    req: Request, 
    res: Response
) => {
    
    const { email, password, role } = req.body

    try {
        if (!email || email.indexOf("@") === -1) {
            res.status(404).send({message: "E-mail inválido"})
        }
        if (!password || password.lenght > 6) {
            res.status(404).send({message: "Senha inválida"})
        }
        const id = generateId()

        const hashPassword: string = await hash(password)

        await createUserData(
            id,
            email,
            hashPassword,
            role
        )
        
        const token = generateToken({id, role})

        res.status(200).send({
            token,
            message: "Usuário criado com sucesso!"
        })

    } catch (error) {
        res.status(400).send({message: error.message})
    }

}
```

c)
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

        const correctPassword: boolean = await compare(password, user.password)

        if (!correctPassword){
            res.status(404).send({message: "Usuário não encontrado ou senha incorreta"})
        }
        
        const token = generateToken({
            id: user.id,
            role: user.password
        })
        res.status(200).send({
            token: token,
            message: "Login realizado com sucesso!"
        })

    } catch (error) {
        res.status(400).send({message: error.message})
    }

}
```


d) Apenas se o endpoint for restrito ao usuário administrador.

### Exercício 3

a)
```
ALTER TABLE aula50_User ADD COLUMN role VARCHAR(255) DEFAULT "normal"
```

b) 
```
export type AuthenticationData = {
    id: string,
    role: USER_ROLE
}
```

c d) Alterações no código já colocado acima.

### Exercício 4

a) 
```
export const getUserById = async (
    req: Request, 
    res: Response
) => {
    
    try {

        const token = req.headers.authorization as string;

        const authenticationData = getToken(token);

        if (authenticationData.role !== "NORMAL") {
            throw new Error("Somente o usuário normal pode ter acesso à essa funcionalidade");
          }

        const user = await getUserByIdData(authenticationData.id);
        
        res.status(200).send({
            id: user.id,
            email: user.email,
            role: authenticationData.role
        })

    } catch (error) {
        res.status(400).send({message: error.message})
    }

}
```

### Exercício 5

a) 
*Query:*
```
export const deleteUserData = async (
    id:string
    ): Promise<any> => {
        await connection
            .delete()
            .from('aula50_User')
            .where({ id });
}
```

*Endpoint:*
```
export const deleteUser = async (
    req:Request, 
    res:Response
    ) => {

        const token: string = req.headers.authorization as string
        const AuthenticationData = getToken(token)

        try {

            if(AuthenticationData.role !== USER_ROLE.ADMIN){
                res.status(404).send({message: "Usuário não autorizado"})
            }

            const id = req.params.id

            const testUser = await getUserByIdData(id)

            if(!testUser){
                res.status(404).send({message: "Usuário não encontrado"})
            }

            await deleteUserData(id)

            res.status(200).send({
                message: "Usuário deletado com sucesso!"
            })
        } catch (error) {
            res.status(400).send(error.message || error.sqlMessage)
        }
}
```

### Exercício 6

*Query:*
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

*Endpoint:*
```






