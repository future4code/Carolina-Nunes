import {connection} from "../index"

export const deleteActor = async (id: string): Promise<any> => {
    await connection("Actor").delete().where("id", id);
  };