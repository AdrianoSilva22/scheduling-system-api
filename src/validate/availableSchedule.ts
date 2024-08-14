import { CreateAvailableScheduleUseCaseRequest } from "../useCase/ucio/availableSchedule";
import { CreateAvailableScheduleUseCaseValidateInterface } from "../useCase/validate/availableSchedule";
import { checkDateEmpty, checkEmpty } from "./validate";

class CreateAvailableScheduleUseCaseValidate implements CreateAvailableScheduleUseCaseValidateInterface {
    validateAvailableSchedule(req: CreateAvailableScheduleUseCaseRequest): string | null {
        const { dateTime, professional } = req
        if (checkDateEmpty(dateTime)) return 'O horário deve ser preenchido!'
        if (checkEmpty(professional)) return 'O profissional deve ser informado!'

        return null
    }
}

export {
    CreateAvailableScheduleUseCaseValidate
}