import { Request, Response } from "express";

export const getUser =  async (req: Request, res: Response)=>{
    try{ //inicio de um sonho
       //corpo da função. Como é um post, normalmente buscaremos enviaremos uma mensagem de erro ou sucesso.
 
       //fim do corpo da função
       //deu tudo certo
       res.status(200).send({chaveDoRetorno: valorDaBusca});
    }catch(error){
       //deu tudo errado
       res.status(400).send({chaveDoErro: valorDoErro});
    }
};