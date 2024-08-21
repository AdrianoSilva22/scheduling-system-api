import { Request, Response } from "express"
import { AuthUseCaseRequest } from "../useCase/ucio/auth"
import { AuthUseCaseValidate } from "../validate/auth"
import { AuthUseCase } from "../useCase/auth"
import { AuthUseCaseRepository } from "../repository/auth"

class AuthController {
    async AuthUser(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const ucReq = new AuthUseCaseRequest(email, password)

            const repository = new AuthUseCaseRepository
            const validate = new AuthUseCaseValidate
            const useCase = new AuthUseCase(repository, validate)

            const user = (await useCase.authUser(ucReq))
            if (user.error) {
                res.status(200).json({ message: user.error })
            } else if (user.userTokenJwt) {
                res.status(200).json({ message: 'Login realizado com sucesso!', token: user.userTokenJwt });
            }
        } catch (error) {
            console.error("ERRO INTERNO AO LOGAR:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}

export {
    AuthController
}