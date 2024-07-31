import { CreateAvailableScheduleUseCaseRequest } from "../useCase/ucio/availableSchedule";
import { CreateAvailableScheduleUseCaseValidateInterface } from "../useCase/validate/availableSchedule";
import { checkDateEmpty } from "./validate";

class CreateAvailableScheduleUseCaseValidate implements CreateAvailableScheduleUseCaseValidateInterface {
    validateAvailableSchedule(req: CreateAvailableScheduleUseCaseRequest): string | null {
        const { dateTime } = req
        if (checkDateEmpty(dateTime)) return 'O horário deve ser preenchido!'

        return null
    }
}

export {
    CreateAvailableScheduleUseCaseValidate
}