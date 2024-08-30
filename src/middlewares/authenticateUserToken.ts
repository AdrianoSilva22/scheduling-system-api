import { NextFunction, Response } from "express"
import { IGetUserAuthInfoRequest } from ".."
import jwt from "jsonwebtoken";

const checkAuthenticatedToken = (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    try {
        const headersToken = req.headers.authorization as string

        if (headersToken) {
            const headersTokenWithoutBearer = headersToken.slice(7, headersToken.length)

            jwt.verify(headersTokenWithoutBearer, process.env.SECRET as string, (err, decoded) => {
                if (err) {
                    res.status(401).send({ message: "Token inválido" });
                } else {
                    req.user = decoded as { id: string; name: string; email: string; role: string };

                    next()
                }
            })
        } else {
            res.status(401).send("É necessário autenticar.")
        }
    } catch (err) {
        res.status(500).send("Falha ao autenticar o token")
    }
}

export {
    checkAuthenticatedToken
}