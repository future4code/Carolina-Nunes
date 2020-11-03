import { Request, Response } from "express";
import { deleteActor } from "../data/deleteActor";


export const actorDelete = async (req: Request, res: Response) => {
    const id: string = String(req.params.id)

    try {
        deleteActor(id)
        res.status(200).send("Ator apagado.")
    } catch (error) {
        res.status(400).send("Error")
    }
}