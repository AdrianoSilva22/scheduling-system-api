import { Request, Response } from "express";
import { CreateSchedulingUseCaseRequest } from "../useCase/ucio/scheduling";
import { CreateSchedulingUseCaseRepository, DeleteSchedulingByIdUseCaseRepository, ListSchedulingByIdUseCaseRepository, ListSchedulingsUseCaseRepository, UpdateSchedulingByIdUseCaseRepository } from "../repository/scheduling";
import { CreateSchedulingUseCase, DeleteSchedulingByIdUseCase, ListSchedulingByIdUseCase, ListSchedulingsUseCase, UpdateSchedulingByIdUseCase } from "../useCase/scheduling";
import { CreateSchedulingUseCaseValidate, ListSchedulingByIdUseCaseValidate } from "../validate/scheduling";

class CreateSchedulingController {
    async createScheduling(req: Request, res: Response) {

        try {
            const { client, horarioId } = req.body
            const ucReq = new CreateSchedulingUseCaseRequest(client, horarioId)

            const repository = new CreateSchedulingUseCaseRepository
            const validate = new CreateSchedulingUseCaseValidate
            const useCase = new CreateSchedulingUseCase(repository, validate)

            await useCase.createScheduling(ucReq)
            
            res.status(201).json({ message: "Agendamento criado com sucesso!" })
        } catch (error) {
            console.error("Erro ao criar agendamento:", error)

            res.status(500).json({ error: "Erro ao processar a requisição" })
        }


    }
}
class ListSchedulingsController {
    async listSchedulings(req: Request, res: Response) {
        try {
            const repository = new ListSchedulingsUseCaseRepository
            const useCase = new ListSchedulingsUseCase(repository)

            const schedulings = (await useCase.listSchedulings()).schedulings

            res.status(200).json({ schedulings: schedulings, message: "Agendamentos listados com sucesso" })
        } catch (error) {
            console.error("Erro ao listar Agendamentos:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}
class ListSchedulingByIdController {
    async listSchedulingById(req: Request, res: Response) {
        try {
            const { ID } = req.body

            const repository = new ListSchedulingByIdUseCaseRepository
            const validate = new ListSchedulingByIdUseCaseValidate
            const useCase = new ListSchedulingByIdUseCase(repository, validate)

            const scheduling = (await useCase.listSchedulingById(ID))
            if (scheduling.scheduling) {
                res.status(200).json({ scheduling: scheduling.scheduling, message: "Agendamento listado com sucesso" })
            } else if (scheduling.error) {
                res.status(200).json({ error: scheduling.error })
            }
        } catch (error) {
            console.error("Erro ao listar Agendamento:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}
class UpdateSchedulingByIdController {
    async UpdateSchedulingById(req: Request, res: Response) {
        try {

            const repository = new UpdateSchedulingByIdUseCaseRepository
            const useCase = new UpdateSchedulingByIdUseCase(repository)

            await useCase.UpdateSchedulingById(req.body)

            res.status(200).json({ message: "Agendamento Atualizado com sucesso!" })
        } catch (error) {
            console.error("Erro ao atulizar Agendamento:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}
class DeleteSchedulingByIdController {
    async deleteSchedulingById(req: Request, res: Response) {
        try {
            const repository = new DeleteSchedulingByIdUseCaseRepository
            const useCase = new DeleteSchedulingByIdUseCase(repository)

            await useCase.deleteSchedulingById(req.body)

            res.status(200).json({ message: "usuário deletado com sucesso!" })
        } catch (error) {
            console.error("Erro ao deletar usuário:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}

export {
    CreateSchedulingController, DeleteSchedulingByIdController, ListSchedulingByIdController,
    ListSchedulingsController, UpdateSchedulingByIdController
}