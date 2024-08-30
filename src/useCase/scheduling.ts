import { SchedulingEntity } from "../entity/scheduling";
import { generateUUID } from "../utils/uuid";
import { CreateScheduleUseCaseRepositoryInterface, DeleteSchedulingByIdUseCaseRepositoryInterface, ListSchedulingByIdUseCaseRepositoryInterface, ListSchedulingsUseCaseRepositoryInterface, UpdateSchedulingByIdUseCaseRepositoryInterface } from "./repository/scheduling";
import { CreateSchedulingUseCaseRequest, CreateSchedulingUseCaseResponse, DeleteSchedulingByIdUseCaseResponse, ListSchedulingByIdUseCaseRequest, ListSchedulingByIdUseCaseResponse, ListSchedulingsUseCaseResponse, UpdateSchedulingByIdUseCaseRequest, UpdateSchedulingByIdUseCaseResponse } from "./ucio/scheduling";
import { CreateSchedulingUseCaseValidateInterface, DeleteSchedulingByIdUseCaseValidateInterface, ListSchedulingByIdUseCaseValidateInterface, UpdateSchedulingByIdUseCaseValidateInterface } from "./validate/scheduling";

class CreateSchedulingUseCase {
    repository: CreateScheduleUseCaseRepositoryInterface
    validate: CreateSchedulingUseCaseValidateInterface

    constructor(repository: CreateScheduleUseCaseRepositoryInterface, validate: CreateSchedulingUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async createScheduling(req: CreateSchedulingUseCaseRequest): Promise<CreateSchedulingUseCaseResponse> {
        try {
            const errorMessage = await this.validate.validateScheduling(req)

            if (errorMessage) {
                console.log('PRE_CONDITIONAL_ERROR', errorMessage)
                return new CreateSchedulingUseCaseResponse(errorMessage)
            }

            const { client, horario } = req
            const UUID = generateUUID()
            const now = new Date()

            this.repository.createScheduling(new SchedulingEntity(UUID, client, horario, now, now))

            return new CreateSchedulingUseCaseResponse(null)
        } catch (error: any) {
            console.log('PRE_CONDITIONAL_ERROR', error)
            return new CreateSchedulingUseCaseResponse(error)
        }
    }
}

class ListSchedulingsUseCase {
    repository: ListSchedulingsUseCaseRepositoryInterface

    constructor(repository: ListSchedulingsUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async listSchedulings(): Promise<ListSchedulingsUseCaseResponse> {
        try {
            const schedulings = await this.repository.listSchedulings()

            return new ListSchedulingsUseCaseResponse(schedulings)
        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)

            return new ListSchedulingsUseCaseResponse(error)
        }
    }
}
class ListSchedulingByIdUseCase {
    repository: ListSchedulingByIdUseCaseRepositoryInterface
    validate: ListSchedulingByIdUseCaseValidateInterface

    constructor(repository: ListSchedulingByIdUseCaseRepositoryInterface, validate: ListSchedulingByIdUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async listSchedulingById(req: ListSchedulingByIdUseCaseRequest): Promise<ListSchedulingByIdUseCaseResponse> {
        try {
            const errorMessage = await this.validate.validateSchedulingById(req)

            if (errorMessage) {
                console.log('PRE_CONDITIONAL_ERROR', errorMessage)
                return new ListSchedulingByIdUseCaseResponse(errorMessage)
            }

            const scheduling = await this.repository.listSchedulingById(req)

            return new ListSchedulingByIdUseCaseResponse(scheduling)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)
            return new ListSchedulingByIdUseCaseResponse(error)
        }
    }
}
class UpdateSchedulingByIdUseCase {
    repository: UpdateSchedulingByIdUseCaseRepositoryInterface
    validate: UpdateSchedulingByIdUseCaseValidateInterface
    constructor(repository: UpdateSchedulingByIdUseCaseRepositoryInterface, validate: UpdateSchedulingByIdUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async UpdateSchedulingById(req: UpdateSchedulingByIdUseCaseRequest): Promise<UpdateSchedulingByIdUseCaseResponse> {
        try {
            const errorMessage = await this.validate.validateSchedulingById(req)

            if (errorMessage) {
                console.log('PRE_CONDITIONAL_ERROR', errorMessage)
                return new UpdateSchedulingByIdUseCaseResponse(errorMessage)
            }
            let newUpdatedAt = new Date()
            req.updatedAt = newUpdatedAt

            const scheduling = await this.repository.updateSchedulingById(req)

            return new UpdateSchedulingByIdUseCaseResponse(scheduling)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)
            return new UpdateSchedulingByIdUseCaseResponse(error)
        }
    }
}
class DeleteSchedulingByIdUseCase {
    repository: DeleteSchedulingByIdUseCaseRepositoryInterface
    validate: DeleteSchedulingByIdUseCaseValidateInterface
    constructor(repository: DeleteSchedulingByIdUseCaseRepositoryInterface, validate: DeleteSchedulingByIdUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async deleteSchedulingById(req: ListSchedulingByIdUseCaseRequest): Promise<DeleteSchedulingByIdUseCaseResponse> {
        try {
            const errorMessage = await this.validate.validateSchedulingById(req)

            if (errorMessage) {
                console.log('PRE_CONDITIONAL_ERROR', errorMessage)
                return new DeleteSchedulingByIdUseCaseResponse(errorMessage)
            }

            const { ID } = req
            await this.repository.deleteSchedulingById(ID)

            return new DeleteSchedulingByIdUseCaseResponse(null)
        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)
            return new DeleteSchedulingByIdUseCaseResponse(error)
        }
    }
}

export {
    CreateSchedulingUseCase,
    DeleteSchedulingByIdUseCase,
    ListSchedulingByIdUseCase,
    ListSchedulingsUseCase,
    UpdateSchedulingByIdUseCase
}
