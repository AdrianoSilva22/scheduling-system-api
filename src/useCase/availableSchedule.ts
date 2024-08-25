import { AvailableScheduleEntity } from "../entity/availableSchedule";
import { generateUUID } from "../utils/uuid";
import { DeleteAvailableScheduleByIdUseCaseValidate } from "../validate/availableSchedule";
import { CreateAvailableScheduleUseCaseRepositoryInterface, DeleteAvailableScheduleByIdUseCaseRepositoryInterface, ListAvailableScheduleByIdUseCaseRepositoryInterface, ListAvailableSchedulesUseCaseRepositoryInterface, UpdateAvailableScheduleByIdUseCaseRepositoryInterface } from "./repository/availableSchedule";
import { CreateAvailableScheduleUseCaseRequest, CreateAvailableScheduleUseCaseResponse, DeleteAvailableScheduleByIdUseCaseResponse, ListAvailableScheduleByIdUseCaseRequest, ListAvailableScheduleByIdUseCaseResponse, ListAvailableSchedulesUseCaseResponse, UpdateAvailableScheduleByIdUseCaseRequest, UpdateAvailableScheduleByIdUseCaseResponse } from "./ucio/availableSchedule";
import { CreateAvailableScheduleUseCaseValidateInterface, ListAvailableScheduleByIdUseCaseValidateInterface, UpdateAvailableScheduleByIdUseCaseValidateInterface } from "./validate/availableSchedule";

class CreateAvailableScheduleUseCase {
    repository: CreateAvailableScheduleUseCaseRepositoryInterface
    validate: CreateAvailableScheduleUseCaseValidateInterface

    constructor(repository: CreateAvailableScheduleUseCaseRepositoryInterface, validate: CreateAvailableScheduleUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async createAvailableScheduling(req: CreateAvailableScheduleUseCaseRequest): Promise<CreateAvailableScheduleUseCaseResponse> {
        try {
            const errorMessage = this.validate.validateAvailableSchedule(req)
            console.log(errorMessage);
            
            if (errorMessage) {
                console.log('PRE_CONDITIONAL_ERROR', errorMessage)
                return new CreateAvailableScheduleUseCaseResponse(errorMessage)
            }

            const { dateTime, professional } = req
            const UUID = generateUUID()
            const now = new Date()

            this.repository.createAvailableSchedule(new AvailableScheduleEntity(UUID, dateTime, professional, now, now))
            
            return new CreateAvailableScheduleUseCaseResponse(null)
        } catch (error: any) {
            console.log('PRE_CONDITIONAL_ERROR', error)
            return new CreateAvailableScheduleUseCaseResponse(error)
        }
    }

}

class ListAvailableSchedulesUseCase {
    repository: ListAvailableSchedulesUseCaseRepositoryInterface

    constructor(repository: ListAvailableSchedulesUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async listAvailableSchedules(): Promise<ListAvailableSchedulesUseCaseResponse> {
        try {

            const availableschedules = await this.repository.listAvailableSchedules()
            return new ListAvailableSchedulesUseCaseResponse(availableschedules)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)

            return new ListAvailableSchedulesUseCaseResponse(error)
        }
    }
}
class ListAvailableScheduleByIdUseCase {
    repository: ListAvailableScheduleByIdUseCaseRepositoryInterface
    validate: ListAvailableScheduleByIdUseCaseValidateInterface

    constructor(repository: ListAvailableScheduleByIdUseCaseRepositoryInterface, validate: ListAvailableScheduleByIdUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async listAvailableScheduleById(req: ListAvailableScheduleByIdUseCaseRequest): Promise<ListAvailableScheduleByIdUseCaseResponse> {
        try {
            const errorMessage = await this.validate.validateAvailableScheduleById(req)

            if (errorMessage) {
                console.log('PRE_CONDITIONAL_ERROR', errorMessage)
                return new ListAvailableScheduleByIdUseCaseResponse(errorMessage)
            }

            const availableschedule = await this.repository.listAvailableScheduleById(req)

            return new ListAvailableScheduleByIdUseCaseResponse(availableschedule)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)
            return new ListAvailableScheduleByIdUseCaseResponse(error)
        }
    }
}
class UpdateAvailableScheduleByIdUseCase {
    repository: UpdateAvailableScheduleByIdUseCaseRepositoryInterface
    validate: UpdateAvailableScheduleByIdUseCaseValidateInterface

    constructor(repository: UpdateAvailableScheduleByIdUseCaseRepositoryInterface, validate: UpdateAvailableScheduleByIdUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async UpdateAvailableScheduleById(req: UpdateAvailableScheduleByIdUseCaseRequest): Promise<UpdateAvailableScheduleByIdUseCaseResponse> {
        try {
            const errorMessage = await this.validate.validateAvailableScheduleById(req)

            if (errorMessage) {
                console.log('PRE_CONDITIONAL_ERROR', errorMessage)
                return new UpdateAvailableScheduleByIdUseCaseResponse(errorMessage)
            }

            const availableschedule = await this.repository.updateAvailableScheduleById(req)

            return new UpdateAvailableScheduleByIdUseCaseResponse(availableschedule)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)
            return new UpdateAvailableScheduleByIdUseCaseResponse(error)
        }
    }
}
class DeleteAvailableScheduleByIdUseCase {
    repository: DeleteAvailableScheduleByIdUseCaseRepositoryInterface
    validate: DeleteAvailableScheduleByIdUseCaseValidate

    constructor(repository: DeleteAvailableScheduleByIdUseCaseRepositoryInterface, validate: DeleteAvailableScheduleByIdUseCaseValidate) {
        this.repository = repository
        this.validate = validate
    }

    async deleteAvailableScheduleById(req: ListAvailableScheduleByIdUseCaseRequest): Promise<DeleteAvailableScheduleByIdUseCaseResponse> {
        try {
            const errorMessage = await this.validate.validateAvailableScheduleById(req)


            if (errorMessage) {
                console.log('PRE_CONDITIONAL_ERROR', errorMessage)
                return new DeleteAvailableScheduleByIdUseCaseResponse(errorMessage)
            }
            const { ID } = req
            const availableschedule = await this.repository.deleteAvailableScheduleById(ID)

            return new DeleteAvailableScheduleByIdUseCaseResponse(null)

        } catch (error: any) {
            console.log('INTERNAL_SERVER_ERROR', error)
            return new DeleteAvailableScheduleByIdUseCaseResponse(error)
        }
    }
}

export {
    CreateAvailableScheduleUseCase,
    DeleteAvailableScheduleByIdUseCase,
    ListAvailableScheduleByIdUseCase,
    ListAvailableSchedulesUseCase,
    UpdateAvailableScheduleByIdUseCase
}

