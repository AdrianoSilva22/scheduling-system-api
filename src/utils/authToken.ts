import * as dotenv from "dotenv";
import { NextFunction, Request, Response } from 'express';
import jwt from "jsonwebtoken";
import { UserEntity } from "../entity/user";
import { IGetUserAuthInfoRequest } from "..";

dotenv.config()

export const tokenUtils = () => {

    const generateToken = (userEntity: UserEntity) => {
        try {
            const userJwtPayload = {
                id: userEntity.ID,
                role: userEntity.role,
                status: userEntity.status,
                name: userEntity.name,
            }

            const SECRET = process.env.SECRET;
            if (!SECRET) {
                throw new Error('Chave secreta não definida!');
            }

            const token = jwt.sign(userJwtPayload, SECRET, {
                expiresIn: 3
            })

            return token
        } catch (error) {
            console.log('INTERNAL_SERVER_ERROR', error)
            throw new Error()
        }
    }

    const checkAuthenticatedToken = (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
        try {
            const headersToken = req.headers.authorization as string
            
            if (!headersToken) { res.status(401).send("É necessário autenticar.") }

            const headersTokenWithoutBearer = headersToken.slice(7, headersToken.length)
            
            jwt.verify(headersTokenWithoutBearer, process.env.SECRET as string, (err, decoded) => {
                if (err) {
                    res.status(401).send({ message: "Token inválido" });
                } else {
                    req.user = decoded as { id: string; name: string; email: string; role: string };

                    next()
                }
            })
        } catch (err) {
            console.log(err)
            res.status(500).send("Falha ao autenticar o token")
        }
    }

    return {
        generateToken,
        checkAuthenticatedToken
    }

}