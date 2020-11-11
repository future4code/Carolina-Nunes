import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

const expiresIn = "1min";

export const generateToken = (
    input: AuthenticationData
    ): string => {
    return jwt.sign(
        input,
        process.env.JWT_KEY as string,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    )
}

export const getToken = (
    token: string
): AuthenticationData => {
    const payload = jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as AuthenticationData
    return {
        id: payload.id,
        role: payload.role
    }
}