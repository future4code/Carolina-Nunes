import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

export const getToken = (
    token: string
): AuthenticationData => {
    return jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as AuthenticationData
}