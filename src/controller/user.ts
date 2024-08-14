import { Request, Response } from "express"
import { CreateUserUserCaseRepository, DeleteUserByIdUseCaseRepository, ListUserByIdUseCaseRepository, ListUsersUseCaseRepository, LoginUserUseCaseRepository, UpdateUserByIdUseCaseRepository } from "../repository/user"
import { CreateUserUseCaseRequest, LoginUserUseCaseRequest } from "../useCase/ucio/user"
import { CreateUserUseCase, DeleteUserByIdUseCase, ListUserByIdUseCase, ListUsersUseCase, LoginUserUseCase, UpdateUserByIdUseCase } from "../useCase/user"
import { CreateUserUseCaseValidate, ListUserByIdUseCaseValidate, LoginUserUseCaseValidate } from "../validate/user"
class CreateUserController {
    async createUser(req: Request, res: Response) {
        try {
            const { name, email, password, phone, role } = req.body

            const ucReq = new CreateUserUseCaseRequest(name, email, password, phone, role)

            const validate = new CreateUserUseCaseValidate
            const repository = new CreateUserUserCaseRepository
            const useCase = new CreateUserUseCase(validate, repository)

            await useCase.createUser(ucReq)

            res.status(201).json({ message: "Usuário criado com sucesso" })
        } catch (error) {
            console.error("Erro ao criar usuário:", error)
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

            res.status(200).json({ users: users, message: "Usuários listados com sucesso" })
        } catch (error) {
            console.error("Erro ao listar usuários:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}
class ListUserByIdController {
    async listUserById(req: Request, res: Response) {
        try {
            const { ID } = req.body

            const repository = new ListUserByIdUseCaseRepository
            const validate = new ListUserByIdUseCaseValidate
            const useCase = new ListUserByIdUseCase(repository, validate)

            const user = (await useCase.listUserById(ID))
            if (user.user) {
                res.status(200).json({ user: user.user, message: "Usuário listado com sucesso" })
            } else if (user.error) {
                res.status(200).json({ error: user.error })
            }
        } catch (error) {
            console.error("Erro ao listar usuário:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}
class UpdateUserByIdController {
    async UpdateUserById(req: Request, res: Response) {
        try {

            const repository = new UpdateUserByIdUseCaseRepository
            const useCase = new UpdateUserByIdUseCase(repository)

            await useCase.UpdateUserById(req.body)

            res.status(200).json({ message: "usuário Atualizado com sucesso!" })
        } catch (error) {
            console.error("Erro ao atulizar usuário:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}
class DeleteUserByIdController {
    async deleteUserById(req: Request, res: Response) {
        try {
            const repository = new DeleteUserByIdUseCaseRepository
            const useCase = new DeleteUserByIdUseCase(repository)

            await useCase.deleteUserById(req.body)

            res.status(200).json({ message: "usuário deletado com sucesso!" })
        } catch (error) {
            console.error("Erro ao deletar usuário:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}

class LoginUserController {
    async loginUser(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const ucReq = new LoginUserUseCaseRequest(email, password)

            const repository = new LoginUserUseCaseRepository
            const validate = new LoginUserUseCaseValidate
            const useCase = new LoginUserUseCase(repository, validate)

            const user = (await useCase.loginUser(ucReq))
            if (user.error) {
                res.status(200).json({ message: user.error })
            } else {
                res.status(200).json({ message: "Usuário Logado Sucesso!" })
            }
        } catch (error) {
            console.error("ERRO INTERNO AO LOGAR:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}

export {
    CreateUserController, DeleteUserByIdController, ListUserByIdController,
    ListUsersController, LoginUserController, UpdateUserByIdController
}

