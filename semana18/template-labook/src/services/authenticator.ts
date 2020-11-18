import * as jwt from "jsonwebtoken"
import { USER_ROLES } from "../model/User"


export type AuthenticationData = {
   id: string,
   role: USER_ROLES
}

class Authenticator {
   public generateToken(
      payload: AuthenticationData
   ): string {
      return jwt.sign(
         payload,
         process.env.JWT_KEY as string,
         {
            expiresIn: "24min"
         }
      )
   }

   public getTokenData(
      token: string
   ): AuthenticationData {
      const result = jwt.verify(
         token,
         process.env.JWT_KEY as string
      ) as AuthenticationData

      return {
         id: result.id,
         role: result.role
      }
   }
}

export default new Authenticator()