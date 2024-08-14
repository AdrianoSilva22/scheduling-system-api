import { CreateUserUseCaseRequest, ListUserByIdUseCaseRequest, LoginUserUseCaseRequest } from "../useCase/ucio/user";
import { CreateUserUseCaseValidateInterface, ListUserByIdUseCaseValidateInterface, LoginUserUseCaseValidateInterface } from "../useCase/validate/user";
import { checkStringEmpty, checkUuid } from "./validate";

class CreateUserUseCaseValidate implements CreateUserUseCaseValidateInterface {
    validateUser(req: CreateUserUseCaseRequest): string | null {
        const { name, email, phone, password } = req
        if (checkStringEmpty(name)) return 'O nome não pode ficar vazio!'
        if (checkStringEmpty(email)) return 'O email não pode ficar vazio!'
        if (checkStringEmpty(phone)) return 'O telefone não pode ficar vazio!'
        if (checkStringEmpty(password)) return 'A senha não pode ficar vazia!'

        return null
    }
}

class ListUserByIdUseCaseValidate implements ListUserByIdUseCaseValidateInterface {
    validateUserById(req: ListUserByIdUseCaseRequest): string | null {

        if (!checkUuid(req)) return "O Id é necessário e no formato uuid"

        return null
    }
}

class LoginUserUseCaseValidate implements LoginUserUseCaseValidateInterface {
    validateLoginUser(req: LoginUserUseCaseRequest): string | null {
        const { email, password } = req
        if (checkStringEmpty(email)) return 'O email não pode ficar vazio!'
        if (checkStringEmpty(password)) return 'A senha não pode ficar vazia!'

        return null
    }
}

export {
    CreateUserUseCaseValidate,
    ListUserByIdUseCaseValidate,
    LoginUserUseCaseValidate
};

