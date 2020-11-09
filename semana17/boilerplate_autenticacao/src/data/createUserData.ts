import { connection } from "..";

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