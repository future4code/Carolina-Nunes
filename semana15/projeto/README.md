# Projeto TO DO LIST

## Instruções:

Lembre-se de instalar as dependências:

```bash
npm install knex mysql --save-dev @types/knex
```

Crie uma variável para utilizar como conexão e configure o `dotenv`, criando o arquivo `.env` (adicione-o também no `.gitignore`)

```tsx
import knex from "knex";
import dotenv from "dotenv";

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
```
---

## Exercício da Semana:

Olá, tudo bem? O exercício de hoje vai lidar com um tema que vocês já estão acostumados. Já pedimos para vocês fazerem só o Front, já pedimos para fazerem o Front integrado, já até pedimos um projeto usando somente Node para isso: uma To Do List. Dessa vez, vai ser um pouquinho diferente, vocês vão fazer o backend dela.

Para começar a explicar o nosso sistema vamos falar sobre os usuários. O cadastro deles deve ser simples, pedindo: um nome, um apelido (nickname) e um email

As tarefas são definidas por: título, descrição, data limite até a qual precisa ser feita, status e usuário pedinte (o que criou a tarefa). Existem os usuários responsáveis por uma tarefa, ou seja, aqueles que terão que executa-las. Mais de um usuário pode ser diretamente responsável de mesma tarefa. Os status das tarefas são 3: *to do* ("a fazer"), *doing* ("fazendo") e *done* ("feita").

Dados esses requisitos do sistema, você deve modelar todo o banco de dados (usando MySQL) e implementar o backend. Leia atentamente a lista de endpoints mostrada abaixo antes de começar a modelagem do banco, aí estão descritas todas as informações necessárias para criá-los.

### Endpoints Mínimos

- **1. Criar usuário**

    **Método:** PUT
    **Path:** `/user`

    **Body:**

    ```json
    {
    	"name": "Astro Dev",
    	"nickname": "astrodev",
    	"email": "astro@dev.com"
    }
    ```

    **Observações**:

    - O seu código deve validar se os três campos estão completos (ou seja se não foram enviados ou se não estão vazios) e retornar um erro caso não estejam válidos
    - O seu código deve gerar o id do usuário

- **2. Pegar usuário pelo id**

    **Método:** GET
    **Path:** `/user/:id`

    **Path Param**: é o id do usuário

    **Body de Resposta:**

    ```json
    {
    	"id": "001",
    	"nickname": "astrodev"
    }
    ```

    **Observações**:

    - O seu código deve validar se o id do usuário foi enviado
    - O endpoint deve retornar um erro se não encontrar o usuário

- **3. Editar usuário**

    **Método:** POST
    **Path:** `/user/edit/:id`

    **Path Param**: é o id do usuário

    **Body:**

    ```json
    {
    	"name": "Astro Dev",
    	"nickname": "astrodev"
    }
    ```

    **Observações**:

    - O seu código deve validar se o id do usuário foi enviado
    - O seu código só deve alterar o que for enviado
    - Se algum valor enviado for vazio, deve retornar um erro

- **4. Criar tarefa**
- **5. Pegar tarefa pelo id**

### Desafios

- **6. Pegar todos os usuários**
- **7. Pegar tarefas criadas por um usuário**
- **8. Pesquisar usuário**
- **9. Atribuir um usuário responsável a uma tarefa**
- **10. Pegar usuários responsáveis por uma tarefa**
- **11. Pegar tarefa pelo id**
- **12. Atualizar o status da tarefa**
- **13. Pegar todas as tarefas por status**
- **14. Pegar todas as tarefas atrasadas**
- **15. Retirar um usuário responsável de uma tarefa**
- **16. Atribuir mais de um responsável a uma tarefa**
- **17. Procurar tarefa por termos**
- **18. Atualizar o status de várias tarefas**
- **19. Deletar tarefa**
- **20. Deletar usuário**

### Dicas de Modelagem

- Clique para ver

    Vamos separar essas dicas em três seções:

    - Tabela de usuários

        Essa é bem simples já que deverá guardar 4 imformações: id, name, nickname e email.

        ```sql
        CREATE TABLE TodoListUser (
        		id VARCHAR(255) PRIMARY KEY, 
            name VARCHAR(255) NULL, 
            nickname VARCHAR(255) UNIQUE NOT NULL, 
            email VARCHAR(255) UNIQUE NOT NULL
        );
        ```

    - Relação: Usuário Criador e Tarefa

        Sempre que formos pensar em uma relação, devemos, primeiramente, classificá-la entre: `1:1`, `1:N` e `N:M`. Vamos fazer isso com a relação entre usuário criador e tarefa. 

        Um usuário, no nosso sistema, pode criar quantas tarefas ele quiser. Só que uma tarefa tem apenas um usuário criador. Isso caracteriza uma relação `1:N`. "Cada `1` usuário está relacionado a `N` tarefas que ele criou". 

        Esse tipo de relação pode ser representada de uma forma muito simples: criando uma propriedade `user_id` na tabela de Tarefas (`N`) que é a chave estrangeira que a relacione com um único usuário (`1`) .

        ```sql
        CREATE TABLE TodoListTask (
        		id VARCHAR(255) PRIMARY KEY, 
            title VARCHAR(255) NOT NULL, 
            description TEXT NOT NULL, 
            status VARCHAR(255) NOT NULL DEFAULT "to_do",
            limit_date DATE NOT NULL,
            creator_user_id varchar(255) NOT NULL,
            FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
        );
        ```

        Usamos o operador `DEFAULT` para sempre criar uma tarefa com o status `to_do`, já que uma tarefa sempre começa como "a fazer".

         

    - Relação: Usuário Responsável e Tarefa

        Vamos fazer a mesma análise aqui: Um usuário, no nosso sistema, pode ser responsável por quantas tarefas ele quiser. Além disso, uma tarefa pode ter mais de um usuário responsável. Isso caracteriza uma relação `N:M`. "Cada  usuário está relacionado a `N` tarefas que ele ele é responsável; e cada tarefa pode possuir `M` usuários responsáveis." 

        Esse tipo de relação pode ser representada criando uma tabela intermediária que irá guardar cada um dos pares: usuário + tarefa. Chamaremos essa tabela de: `TodoListResponsibleUserTaskRelation`, que terá duas colunas: uma para o id da tarefa (`task_id`) e outra para o usuário (`responsible_user_id`) 

        ```sql
        CREATE TABLE TodoListResponsibleUserTaskRelation (
        		task_id VARCHAR(255),
            responsible_user_id VARCHAR(255),
            FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
            FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
        );
        ```

### Dicas de Express

- Clique para ver

    Lembre-se de ter importado o `express` e também `Request` e `Response`

    ```tsx
    import express, {Request, Response} from "express";
    ```

    - Como criar um endpoint `get`:

    ```tsx
    app.get("/caminhoDoEndpoint", async (req: Request, res: Response)=>{
       try{ //inicio de um sonho
          //corpo da função. Como é um get, normalmente buscaremos alguma informação.

          //fim do corpo da função
          //deu tudo certo
          res.status(200).send({chaveDoRetorno: valorDaBusca});
       }catch(error){
          //deu tudo errado
          res.status(400).send({chaveDoErro: valorDoErro});
       }
    });
    ```

    - Como criar um endpoint post:

    ```tsx
    app.post("/caminhoDoEndpoint", async (req: Request, res: Response)=>{
       try{ //inicio de um sonho
          //corpo da função. Como é um post, normalmente buscaremos enviaremos uma mensagem de erro ou sucesso.

          //fim do corpo da função
          //deu tudo certo
          res.status(200).send({chaveDoRetorno: mensagemDeSucesso});
       }catch(error){
          //deu tudo errado
          res.status(400).send({chaveDoErro: mensagemDeErro});
       }
    });
    ```

### Dicas gerais

- Clique para ver

    Lembre-se que consultas feitas com o `knex().raw` tem seu resultado dentro de um array, enquanto com o **queryBuilder**, o resultado já vem fora deste array.

    Exemplo com **queryBuilder**

    ```tsx
    async function mySelect(valor: string): Promise<any>{

    	const result = await knex()
            .select("*")
            .from("NOME_DA_TABELA")
            .where({coluna: valor});

    	return result;
    }
    ```

    Exemplo com **raw**

    ```tsx
    async function mySelect(valor: string): Promise<any>{

    	const result = await knex().raw(`
    		SELECT * FROM NOME_DA_TABELA
    	  WHERE COLUNA = "${valor}"
    	`);
       
    	return result[0];
    }
    ```