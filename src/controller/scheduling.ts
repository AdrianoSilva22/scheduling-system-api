import { Request, Response } from "express";
import { CreateSchedulingUseCaseRequest, DeleteSchedulingByIdUseCaseRequest, UpdateSchedulingByIdUseCaseRequest } from "../useCase/ucio/scheduling";
import { CreateSchedulingUseCaseRepository, DeleteSchedulingByIdUseCaseRepository, ListSchedulingByIdUseCaseRepository, ListSchedulingsUseCaseRepository, UpdateSchedulingByIdUseCaseRepository } from "../repository/scheduling";
import { CreateSchedulingUseCase, DeleteSchedulingByIdUseCase, ListSchedulingByIdUseCase, ListSchedulingsUseCase, UpdateSchedulingByIdUseCase } from "../useCase/scheduling";
import { CreateSchedulingUseCaseValidate, DeleteSchedulingByIdUseCaseValidate, ListSchedulingByIdUseCaseValidate, UpdatedSchedulingUseCaseValidate } from "../validate/scheduling";
import { ListAvailableScheduleByIdUseCaseRequest } from "../useCase/ucio/availableSchedule";

class CreateSchedulingController {
    async createScheduling(req: Request, res: Response) {

        try {
            const { client, horarioId } = req.body
            const ucReq = new CreateSchedulingUseCaseRequest(client, horarioId)

            const repository = new CreateSchedulingUseCaseRepository
            const validate = new CreateSchedulingUseCaseValidate
            const useCase = new CreateSchedulingUseCase(repository, validate)

            const resultCreateScheduling = await useCase.createScheduling(ucReq)

            if (resultCreateScheduling.error) {
                res.status(400).json({ message: resultCreateScheduling.error })
            } else {
                res.status(200).json({ message: "Agendamento criado com sucesso!" })
            }
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

            const resultListSchedulingById = (await useCase.listSchedulingById(ID))
            if (resultListSchedulingById.error) {
                res.status(400).json({ message: resultListSchedulingById.error })
            } else {
                res.status(200).json({ scheduling: resultListSchedulingById.scheduling, message: "Agendamento listado com sucesso" })
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
            const { ID, client, horario } = req.body
            const ucReq = new UpdateSchedulingByIdUseCaseRequest(ID, client, horario)

            const repository = new UpdateSchedulingByIdUseCaseRepository
            const validate = new UpdatedSchedulingUseCaseValidate
            const useCase = new UpdateSchedulingByIdUseCase(repository, validate)

            const resultUpdateSchedulingById = await useCase.UpdateSchedulingById(ucReq)

            if (resultUpdateSchedulingById.error) {
                res.status(400).json({ message: resultUpdateSchedulingById.error })
            } else {
                res.status(200).json({ message: "Agendamento atualizado com sucesso!" })
            }

        } catch (error) {
            console.error("Erro ao atulizar Agendamento:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}
class DeleteSchedulingByIdController {
    async deleteSchedulingById(req: Request, res: Response) {
        try {
            const { ID } = req.body

            const repository = new DeleteSchedulingByIdUseCaseRepository
            const validate = new DeleteSchedulingByIdUseCaseValidate
            const useCase = new DeleteSchedulingByIdUseCase(repository, validate)

            const resultDeleteSchedulingById = await useCase.deleteSchedulingById(ID)

            if (resultDeleteSchedulingById.error) {
                res.status(400).json({ message: resultDeleteSchedulingById.error })
            } else {
                res.status(200).json({ message: "Agendamento deletado com sucesso!" })
            }

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