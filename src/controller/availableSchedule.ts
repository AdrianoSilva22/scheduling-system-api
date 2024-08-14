import { Request, Response } from "express";
import { CreateAvailableSchedulingUseCaseRepository } from "../repository/availableSchedule";
import { CreateAvailableScheduleUseCase } from "../useCase/availableSchedule";
import { CreateAvailableScheduleUseCaseValidate } from "../validate/availableSchedule";
import { CreateAvailableScheduleUseCaseRequest } from "../useCase/ucio/availableSchedule";

class CreateAvailableScheduleController {
    async createAvailableSchedule(req: Request, res: Response) {

        try {
            const { dateTime, professional } = req.body
            const ucReq = new CreateAvailableScheduleUseCaseRequest(dateTime, professional)

            const repository = new CreateAvailableSchedulingUseCaseRepository
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

export {
    CreateAvailableScheduleController
}