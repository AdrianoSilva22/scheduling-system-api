import { CreateAvailableScheduleUseCaseRequest } from "../useCase/ucio/availableSchedule";
import { ListSchedulingByIdUseCaseRequest } from "../useCase/ucio/scheduling";
import { CreateAvailableScheduleUseCaseValidateInterface, ListAvailableScheduleByIdUseCaseValidateInterface } from "../useCase/validate/availableSchedule";
import { ListSchedulingByIdUseCaseValidateInterface } from "../useCase/validate/scheduling";
import { checkDateEmpty, checkEmpty } from "./validate";

class CreateAvailableScheduleUseCaseValidate implements CreateAvailableScheduleUseCaseValidateInterface {
    validateAvailableSchedule(req: CreateAvailableScheduleUseCaseRequest): string | null {
        const { dateTime, professional } = req
        if (checkDateEmpty(dateTime)) return 'O horário deve ser preenchido!'
        if (checkEmpty(professional)) return 'O profissional deve ser informado!'

        return null
    }
}

class ListAvailableScheduleByIdUseCaseValidate implements ListAvailableScheduleByIdUseCaseValidateInterface {
    validateAvailableScheduleById(req: ListSchedulingByIdUseCaseRequest): string | null {

        if (checkEmpty(req)) return "O Id é necessário"

        return null
    }
}

export {
    CreateAvailableScheduleUseCaseValidate,
    ListAvailableScheduleByIdUseCaseValidate
}