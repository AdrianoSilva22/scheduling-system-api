import { Request, Response } from "express";
import { CreateAvailableScheduleUseCaseRepository, DeleteAvailableScheduleByIdUseCaseRepository, ListAvailableScheduleByIdUseCaseRepository, ListAvailableSchedulesUseCaseRepository, UpdateAvailableScheduleByIdUseCaseRepository } from "../repository/availableSchedule";
import { CreateAvailableScheduleUseCase, DeleteAvailableScheduleByIdUseCase, ListAvailableScheduleByIdUseCase, ListAvailableSchedulesUseCase, UpdateAvailableScheduleByIdUseCase } from "../useCase/availableSchedule";
import { CreateAvailableScheduleUseCaseValidate, DeleteAvailableScheduleByIdUseCaseValidate, ListAvailableScheduleByIdUseCaseValidate, UpdateAvailableScheduleUseCaseValidate } from "../validate/availableSchedule";
import { CreateAvailableScheduleUseCaseRequest, UpdateAvailableScheduleByIdUseCaseRequest } from "../useCase/ucio/availableSchedule";

class CreateAvailableScheduleController {
    async createAvailableSchedule(req: Request, res: Response) {

        try {
            const { dateTime, professional } = req.body
            const ucReq = new CreateAvailableScheduleUseCaseRequest(dateTime, professional)

            const repository = new CreateAvailableScheduleUseCaseRepository
            const validate = new CreateAvailableScheduleUseCaseValidate
            const useCase = new CreateAvailableScheduleUseCase(repository, validate)

            const resultCreateAvailableSchedule = await useCase.createAvailableScheduling(ucReq)

            if (resultCreateAvailableSchedule.error) {
                res.status(400).json({ message: resultCreateAvailableSchedule.error })

            } else {
                res.status(201).json({ message: "Horário disponível criado com sucesso!" })
            }
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
            if (availableschedule.error) {
                res.status(400).json({ error: availableschedule.error })
            } else {
                res.status(200).json({ availableschedule: availableschedule.availableSchedule, message: "Horário disponível listados com sucesso" })
            }
        } catch (error) {
            console.error("Erro ao listar Horário disponível:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}
class UpdateAvailableScheduleByIdController {
    async UpdateAvailableScheduleById(req: Request, res: Response) {
        try {
            const { ID, dateTime, professional } = req.body

            const ucReq = new UpdateAvailableScheduleByIdUseCaseRequest(ID, dateTime, professional)

            const repository = new UpdateAvailableScheduleByIdUseCaseRepository
            const validate = new UpdateAvailableScheduleUseCaseValidate
            const useCase = new UpdateAvailableScheduleByIdUseCase(repository, validate)

            const resultUpdateAvailableSchedule = await useCase.UpdateAvailableScheduleById(ucReq)

            if (resultUpdateAvailableSchedule.error) {
                res.status(400).json({ message: resultUpdateAvailableSchedule.error })
            } else {
                res.status(200).json({ message: "Horário disponível atualizado com sucesso!", updatedAvailableSchedule: resultUpdateAvailableSchedule.availableSchedule })
            }
        } catch (error) {
            console.error("Erro ao atulizar usuário:", error)
            res.status(500).json({ error: "Erro ao processar a requisição" })
        }
    }
}
class DeleteAvailableScheduleByIdController {
    async deleteAvailableScheduleById(req: Request, res: Response) {
        try {
            const { ID } = req.body

            const repository = new DeleteAvailableScheduleByIdUseCaseRepository
            const validate = new DeleteAvailableScheduleByIdUseCaseValidate
            const useCase = new DeleteAvailableScheduleByIdUseCase(repository, validate)

            const resultDeleteAvailableSchedule = await useCase.deleteAvailableScheduleById(ID)
            if (resultDeleteAvailableSchedule.error) {
                res.status(400).json({ message: resultDeleteAvailableSchedule.error })
            } else {
                res.status(200).json({ message: "Horário disponível deletado com sucesso!" })
            }
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