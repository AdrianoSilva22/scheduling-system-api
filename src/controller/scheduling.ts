import { Request, Response } from "express";
import { CreateSchedulingUseCaseRequest } from "../useCase/ucio/scheduling";
import { CreateSchedulingUseCaseRepository } from "../repository/scheduling";
import { CreateAvailableScheduleUseCaseValidate } from "../validate/availableSchedule";
import { CreateSchedulingUseCase } from "../useCase/scheduling";
import { CreateSchedulingUseCaseValidate } from "../validate/scheduling";

class CreateSchedulingController {
    async createAvailableSchedule(req: Request, res: Response) {

        try {
            const { clientId, horarioId } = req.body
            const ucReq = new CreateSchedulingUseCaseRequest(clientId, horarioId)

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

export {
    CreateSchedulingController}