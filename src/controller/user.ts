import { Request, Response } from "express";
import { CreateUserUserCaseRepository } from "../repository/user";
import { CreateUserUseCaseRequest } from "../useCase/ucio/user";
import { CreateUserUseCase } from "../useCase/user";
import { CreateUserUseCaseValidate } from "../validate/user";

class CreateUserController {
    async createUser(req: Request, res: Response) {
        try {
            const { name, email, password, phone } = req.body

            const ucReq = new CreateUserUseCaseRequest(name, email, password, phone)

            const validate = new CreateUserUseCaseValidate
            const repository = new CreateUserUserCaseRepository
            const useCase = new CreateUserUseCase(validate, repository)

            await useCase.createUser(ucReq)

            res.status(201).json({ message: "Usuário criado com sucesso" });
        } catch (error) {
            console.error("Erro ao criar motorista:", error);
            res.status(500).json({ error: "Erro ao processar a requisição" });
        }
    }
}

export {
    CreateUserController
};

