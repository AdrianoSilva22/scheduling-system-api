import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { UserEntity } from "../entity/user";

dotenv.config()


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
            expiresIn: '1h'
        })

        return token
    } catch (error) {
        console.log('INTERNAL_SERVER_ERROR', error)
        throw new Error()
    }
}

export {
    generateToken,
}
