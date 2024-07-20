import { Request, Response } from "express"
import { CreateUserUserCaseRepository, ListUserByIdUseCaseRepository, ListUsersUseCaseRepository } from "../repository/user"
import { CreateUserUseCaseRequest } from "../useCase/ucio/user"
import { CreateUserUseCase, ListUserByIdUseCase, ListUsersUseCase } from "../useCase/user"
import { CreateUserUseCaseValidate, ListUserByIdUseCaseValidate } from "../validate/user"
class CreateUserController {
    async createUser(req: Request, res: Response) {
        try {
            const { name, email, password, phone } = req.body

            const ucReq = new CreateUserUseCaseRequest(name, email, password, phone)

            const validate = new CreateUserUseCaseValidate
            const repository = new CreateUserUserCaseRepository
            const useCase = new CreateUserUseCase(validate, repository)

            await useCase.createUser(ucReq)

            res.status(201).json({ message: "Usuário criado com sucesso" })
        } catch (error) {
            console.error("Erro ao criar motorista:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}
class ListUsersController {
    async listUsers(req: Request, res: Response) {
        try {
            const repository = new ListUsersUseCaseRepository
            const useCase = new ListUsersUseCase(repository)

            const users = (await useCase.listUsers()).users

            res.status(200).json({ users: users, message:  "Usuários listados com sucesso" })
        } catch (error) {
            console.error("Erro ao listar usuários:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}
class ListUserByIdController {
    async listUserById(req: Request, res: Response) {
        try {
            const { id } = req.body
            
            const repository = new ListUserByIdUseCaseRepository
            const validate = new ListUserByIdUseCaseValidate
            const useCase = new ListUserByIdUseCase(repository, validate)

            const user = (await useCase.listUserById(id))
            
            if (user.user){
                res.status(200).json({ user: user.user, message:  "Usuário listado com sucesso" })
            } else {
                res.status(200).json({ message: user.error })
            }
        } catch (error) {
            console.error("Erro ao listar usuário:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}

export {
    CreateUserController,
    ListUserByIdController,
    ListUsersController
}

