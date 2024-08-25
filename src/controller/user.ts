import { Request, Response } from "express"
import { CreateUserUserCaseRepository, DeleteUserByIdUseCaseRepository, ListUserByIdUseCaseRepository, ListUsersUseCaseRepository, UpdateUserByIdUseCaseRepository } from "../repository/user"
import { CreateUserUseCaseRequest, DeleteUserByIdUseCaseRequest, UpdateUserByIdUseCaseRequest } from "../useCase/ucio/user"
import { CreateUserUseCase, DeleteUserByIdUseCase, ListUserByIdUseCase, ListUsersUseCase, UpdateUserByIdUseCase } from "../useCase/user"
import { CreateUserUseCaseValidate, DeleteUserByIdUseCaseValidate, ListUserByIdUseCaseValidate, UpdateUserUseCaseValidate } from "../validate/user"
class CreateUserController {
    async createUser(req: Request, res: Response) {
        try {
            const { name, email, password, phone, role } = req.body

            const ucReq = new CreateUserUseCaseRequest(name, email, password, phone, role)

            const validate = new CreateUserUseCaseValidate
            const repository = new CreateUserUserCaseRepository
            const useCase = new CreateUserUseCase(validate, repository)

            const resultCreateUser = await useCase.createUser(ucReq)

            if (resultCreateUser.error) {
                res.status(400).json({ message: resultCreateUser.error })
            } else {
                res.status(201).json({ message: "Usuário criado com sucesso" })
            }
        } catch (error) {
            console.error("Erro ao criar usuário:")
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
            const { ID, name, password, phone } = req.body
            const ucReq = new UpdateUserByIdUseCaseRequest(ID, name, password, phone)

            const validate = new UpdateUserUseCaseValidate
            const repository = new UpdateUserByIdUseCaseRepository
            const useCase = new UpdateUserByIdUseCase(repository, validate)

            const resultUpdateUserById = await useCase.UpdateUserById(ucReq)

            if (resultUpdateUserById.error) {
                res.status(400).json({ message: resultUpdateUserById.error })
            } else {
                res.status(200).json({ message: "Usuário atualizado com sucesso!" })
            }
        } catch (error) {
            console.error("Erro ao atulizar usuário:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}
class DeleteUserByIdController {
    async deleteUserById(req: Request, res: Response) {
        try {
            const { ID } = req.body

            const validate = new DeleteUserByIdUseCaseValidate
            const repository = new DeleteUserByIdUseCaseRepository
            const useCase = new DeleteUserByIdUseCase(repository, validate)

            const resultDeleteUserById = await useCase.deleteUserById(ID)

            if (resultDeleteUserById.error) {
                res.status(400).json({ message: resultDeleteUserById.error })
            } else {
                res.status(200).json({ message: "Usuário deletado com sucesso!" })
            }
        } catch (error) {
            console.error("Erro ao deletar usuário:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}

export {
    CreateUserController, DeleteUserByIdController, ListUserByIdController,
    ListUsersController, UpdateUserByIdController
}

