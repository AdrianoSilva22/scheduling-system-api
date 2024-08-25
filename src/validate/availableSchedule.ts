import { CreateAvailableScheduleUseCaseRequest, DeleteAvailableScheduleByIdUseCaseRequest, ListAvailableScheduleByIdUseCaseRequest, UpdateAvailableScheduleByIdUseCaseRequest } from "../useCase/ucio/availableSchedule";
import { CreateAvailableScheduleUseCaseValidateInterface, deleteAvailableScheduleByIdUseCaseValidateInterface, ListAvailableScheduleByIdUseCaseValidateInterface, UpdateAvailableScheduleByIdUseCaseValidateInterface } from "../useCase/validate/availableSchedule";
import { checkEmpty } from "./validate";

class CreateAvailableScheduleUseCaseValidate implements CreateAvailableScheduleUseCaseValidateInterface {
    validateAvailableSchedule(req: CreateAvailableScheduleUseCaseRequest): string | null {
        const { dateTime, professional } = req
        if (checkEmpty(professional)) return 'O Id do profissional deve ser informado!'
        if (checkEmpty(dateTime)) return 'A data e hora devem ser informados!'

        return null
    }
}
class UpdateAvailableScheduleUseCaseValidate implements UpdateAvailableScheduleByIdUseCaseValidateInterface {
    validateAvailableScheduleById(req: UpdateAvailableScheduleByIdUseCaseRequest): string | null {
        const { ID, dateTime, professional } = req
        if (checkEmpty(ID)) return "O Id é necessário"
        if (checkEmpty(professional)) return 'O Id do profissional deve ser informado!'
        if (checkEmpty(dateTime)) return 'Adata e hora devem ser informados!'

        return null
    }
}

class ListAvailableScheduleByIdUseCaseValidate implements ListAvailableScheduleByIdUseCaseValidateInterface {
    validateAvailableScheduleById(req: ListAvailableScheduleByIdUseCaseRequest): string | null {

        if (checkEmpty(req)) return "O Id é necessário"

        return null
    }
}
class DeleteAvailableScheduleByIdUseCaseValidate implements deleteAvailableScheduleByIdUseCaseValidateInterface {
    validateAvailableScheduleById(req: DeleteAvailableScheduleByIdUseCaseRequest): string | null {

        if (checkEmpty(req)) return "O Id é necessário"

        return null
    }
}

export {
    CreateAvailableScheduleUseCaseValidate,
    ListAvailableScheduleByIdUseCaseValidate,
    DeleteAvailableScheduleByIdUseCaseValidate,
    UpdateAvailableScheduleUseCaseValidate
}