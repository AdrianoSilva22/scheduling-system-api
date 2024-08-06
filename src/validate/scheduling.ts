import { CreateSchedulingUseCaseRequest } from "../useCase/ucio/scheduling";
import { CreateSchedulingUseCaseValidateInterface } from "../useCase/validate/scheduling";
import { checkStringEmpty } from "./validate";

class CreateSchedulingUseCaseValidate implements CreateSchedulingUseCaseValidateInterface {
    validateScheduling(req: CreateSchedulingUseCaseRequest): string | null {
        const { clientId, horarioId } = req
        if (checkStringEmpty(clientId)) return 'O ID do cliente deve ser preenchido!'
        if (checkStringEmpty(horarioId)) return 'O ID do horário deve ser preenchido!'

        return null
    }
}

export {
    CreateSchedulingUseCaseValidate
}