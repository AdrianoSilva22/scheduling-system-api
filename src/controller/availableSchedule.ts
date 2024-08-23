import { Request, Response } from "express";
import { CreateAvailableScheduleUseCaseRepository, DeleteAvailableScheduleByIdUseCaseRepository, ListAvailableScheduleByIdUseCaseRepository, ListAvailableSchedulesUseCaseRepository, UpdateAvailableScheduleByIdUseCaseRepository } from "../repository/availableSchedule";
import { CreateAvailableScheduleUseCase, DeleteAvailableScheduleByIdUseCase, ListAvailableScheduleByIdUseCase, ListAvailableSchedulesUseCase, UpdateAvailableScheduleByIdUseCase } from "../useCase/availableSchedule";
import { CreateAvailableScheduleUseCaseValidate, ListAvailableScheduleByIdUseCaseValidate } from "../validate/availableSchedule";
import { CreateAvailableScheduleUseCaseRequest } from "../useCase/ucio/availableSchedule";

class CreateAvailableScheduleController {
    async createAvailableSchedule(req: Request, res: Response) {

        try {
            const { dateTime, professional } = req.body
            const ucReq = new CreateAvailableScheduleUseCaseRequest(dateTime, professional)

            const repository = new CreateAvailableScheduleUseCaseRepository
            const validate = new CreateAvailableScheduleUseCaseValidate
            const useCase = new CreateAvailableScheduleUseCase(repository, validate)

            await useCase.createAvailableScheduling(ucReq)

            res.status(201).json({ message: "Horário disponível criado com sucesso!" })
        } catch (error) {
            console.error("Erro ao criar horário disponível:", error)

            res.status(500).json({ error: "Erro ao processar a requisição" })
        }


    }
}
class ListAvailableSchedulesController {
    async listAvailableSchedules(req: Request, res: Response) {
        try {
            const repository = new ListAvailableSchedulesUseCaseRepository
            const useCase = new ListAvailableSchedulesUseCase(repository)

            const availableSchedules = (await useCase.listAvailableSchedules()).availableSchedules

            res.status(200).json({ availableSchedules: availableSchedules, message: "Horários disponíveis listados com sucesso" })
        } catch (error) {
            console.error("Erro ao listar Horários disponíveis:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}
class ListAvailableScheduleByIdController {
    async listAvailableScheduleById(req: Request, res: Response) {
        try {
            const { ID } = req.body

            const repository = new ListAvailableScheduleByIdUseCaseRepository
            const validate = new ListAvailableScheduleByIdUseCaseValidate
            const useCase = new ListAvailableScheduleByIdUseCase(repository, validate)

            const availableschedule = (await useCase.listAvailableScheduleById(ID))
            if (availableschedule.availableSchedule) {
                res.status(200).json({ availableschedule: availableschedule.availableSchedule, message: "Usuário listado com sucesso" })
            } else if (availableschedule.error) {
                res.status(200).json({ error: availableschedule.error })
            }
        } catch (error) {
            console.error("Erro ao listar usuário:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}
class UpdateAvailableScheduleByIdController {
    async UpdateAvailableScheduleById(req: Request, res: Response) {
        try {

            const repository = new UpdateAvailableScheduleByIdUseCaseRepository
            const useCase = new UpdateAvailableScheduleByIdUseCase(repository)

            await useCase.UpdateAvailableScheduleById(req.body)

            res.status(200).json({ message: "usuário Atualizado com sucesso!" })
        } catch (error) {
            console.error("Erro ao atulizar usuário:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}
class DeleteAvailableScheduleByIdController {
    async deleteAvailableScheduleById(req: Request, res: Response) {
        try {
            const repository = new DeleteAvailableScheduleByIdUseCaseRepository
            const useCase = new DeleteAvailableScheduleByIdUseCase(repository)

            await useCase.deleteAvailableScheduleById(req.body)

            res.status(200).json({ message: "usuário deletado com sucesso!" })
        } catch (error) {
            console.error("Erro ao deletar usuário:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}

export {
    CreateAvailableScheduleController, DeleteAvailableScheduleByIdController, ListAvailableScheduleByIdController,
    ListAvailableSchedulesController, UpdateAvailableScheduleByIdController
}