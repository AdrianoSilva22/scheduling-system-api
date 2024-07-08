import { CreateUserUseCaseRequest } from "../useCase/ucio/user";
import { CreateUserUseCaseValidateInterface } from "../useCase/validate/user";
import { checkStringEmpty } from "./validate";

class CreateUserUseCaseValidate implements CreateUserUseCaseValidateInterface {
    validateDriver(req: CreateUserUseCaseRequest): string | null {
        const { name, email, phone, password } = req
        if (checkStringEmpty(name)) return 'O nome não pode ficar vazio!'
        if (checkStringEmpty(email)) return 'O email não pode ficar vazio!'
        if (checkStringEmpty(phone)) return 'O telefone não pode ficar vazio!'
        if (checkStringEmpty(password)) return 'A senha não pode ficar vazia!'

        return null
    }
}

export {
    CreateUserUseCaseValidate
};
