import { CreateSchedulingUseCaseRequest, ListSchedulingByIdUseCaseRequest, UpdateSchedulingByIdUseCaseRequest } from "../useCase/ucio/scheduling";
import { CreateSchedulingUseCaseValidateInterface, DeleteSchedulingByIdUseCaseValidateInterface, ListSchedulingByIdUseCaseValidateInterface, UpdateSchedulingByIdUseCaseValidateInterface } from "../useCase/validate/scheduling";
import { checkEmpty } from "./validate";

class CreateSchedulingUseCaseValidate implements CreateSchedulingUseCaseValidateInterface {
    validateScheduling(req: CreateSchedulingUseCaseRequest): string | null {
        const { client, horario } = req
        if (checkEmpty(client)) return 'O ID do cliente deve ser preenchido!'
        if (checkEmpty(horario)) return 'O ID do horário deve ser preenchido!'

        return null
    }
}

class ListSchedulingByIdUseCaseValidate implements ListSchedulingByIdUseCaseValidateInterface {
    validateSchedulingById(req: ListSchedulingByIdUseCaseRequest): string | null {

        if (checkEmpty(req)) return "O Id é necessário"

        return null
    }
}

class DeleteSchedulingByIdUseCaseValidate implements DeleteSchedulingByIdUseCaseValidateInterface {
    validateSchedulingById(req: ListSchedulingByIdUseCaseRequest): string | null {

        if (checkEmpty(req)) return "O Id é necessário"

        return null
    }
}

class UpdatedSchedulingUseCaseValidate implements UpdateSchedulingByIdUseCaseValidateInterface {
    validateSchedulingById(req: UpdateSchedulingByIdUseCaseRequest): string | null {
        const { client, horario } = req
        if (checkEmpty(client)) return 'O ID do cliente deve ser preenchido!'
        if (checkEmpty(horario)) return 'O ID do horário deve ser preenchido!'

        return null
    }
}

export {
    CreateSchedulingUseCaseValidate,
    ListSchedulingByIdUseCaseValidate,
    UpdatedSchedulingUseCaseValidate,
    DeleteSchedulingByIdUseCaseValidate
}