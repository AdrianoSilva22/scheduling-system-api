import { CreateUserUseCaseRequest, ListUserByIdUseCaseRequest, UpdateUserByIdUseCaseRequest } from "../useCase/ucio/user";
import { CreateUserUseCaseValidateInterface, DeleteUserByIdUseCaseValidateInterface, ListUserByIdUseCaseValidateInterface, UpdateUserByIdUseCaseValidateInterface } from "../useCase/validate/user";
import { checkEmail, checkEmpty, checkRole, checkStringEmpty } from "./validate";

class CreateUserUseCaseValidate implements CreateUserUseCaseValidateInterface {
    validateUser(req: CreateUserUseCaseRequest): string | null {
        const { name, email, phone, password, role } = req
        if (checkStringEmpty(name)) return 'O Nome não pode ficar vazio!'
        if (checkStringEmpty(email)) return 'O Email não pode ficar vazio!'
        if (checkEmail(email)) return 'O Email informado está no formato errado!'
        if (checkStringEmpty(phone)) return 'O Telefone não pode ficar vazio!'
        if (checkStringEmpty(role)) return 'O Cargo não pode ficar vazio!'
        if (checkRole(role)) return 'Cargo inválido'
        if (checkStringEmpty(password)) return 'A Senha não pode ficar vazia!'

        return null
    }
}

class ListUserByIdUseCaseValidate implements ListUserByIdUseCaseValidateInterface {
    validateUserById(req: ListUserByIdUseCaseRequest): string | null {

        if (checkEmpty(req)) return "O Id é necessário"

        return null
    }
}

class DeleteUserByIdUseCaseValidate implements DeleteUserByIdUseCaseValidateInterface {
    validateUserById(req: ListUserByIdUseCaseRequest): string | null {

        if (checkEmpty(req)) return "O Id é necessário"

        return null
    }
}

class UpdateUserUseCaseValidate implements UpdateUserByIdUseCaseValidateInterface {
    validateUserById(req: UpdateUserByIdUseCaseRequest): string | null {
        const { ID, name, phone, password } = req
        if (checkEmpty(ID)) return "O Id é necessário"

        if (name) {
            if (checkEmpty(name)) return 'O Nome não pode ficar vazio!'
        }

        if (phone) {
            if (checkEmpty(phone)) if (checkStringEmpty(phone)) return 'O Telefone não pode ficar vazio!'
        }

        if (password) {
            if (checkStringEmpty(password)) return 'A Senha não pode ficar vazia!'
        }
        return null
    }
}

export {
    CreateUserUseCaseValidate,
    ListUserByIdUseCaseValidate,
    UpdateUserUseCaseValidate,
    DeleteUserByIdUseCaseValidate
};

