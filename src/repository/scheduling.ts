import { createScheduling, deleteSchedulingById, listSchedulingById, listSchedulings, updateSchedulingById } from "../database/postgres/scheduling"
import { SchedulingEntity } from "../entity/scheduling"
import { CreateScheduleUseCaseRepositoryInterface, DeleteSchedulingByIdUseCaseRepositoryInterface, ListSchedulingByIdUseCaseRepositoryInterface, ListSchedulingsUseCaseRepositoryInterface, UpdateSchedulingByIdUseCaseRepositoryInterface } from "../useCase/repository/scheduling"
import { ListSchedulingByIdUseCaseRequest, UpdateSchedulingByIdUseCaseRequest } from "../useCase/ucio/scheduling"

class CreateSchedulingUseCaseRepository implements CreateScheduleUseCaseRepositoryInterface {
    async createScheduling(scheduling: SchedulingEntity): Promise<void> {
        await createScheduling(scheduling)
    }
}
class ListSchedulingsUseCaseRepository implements ListSchedulingsUseCaseRepositoryInterface {
    async listSchedulings(): Promise<SchedulingEntity[]> {
        return await listSchedulings()
    }

}
class ListSchedulingByIdUseCaseRepository implements ListSchedulingByIdUseCaseRepositoryInterface {
    async listSchedulingById(ID: ListSchedulingByIdUseCaseRequest): Promise<SchedulingEntity> {
        return listSchedulingById(ID)
    }
}
class UpdateSchedulingByIdUseCaseRepository implements UpdateSchedulingByIdUseCaseRepositoryInterface {
    async updateSchedulingById(ID: UpdateSchedulingByIdUseCaseRequest): Promise<SchedulingEntity> {
        return updateSchedulingById(ID)
    }
}
class DeleteSchedulingByIdUseCaseRepository implements DeleteSchedulingByIdUseCaseRepositoryInterface {
    async deleteSchedulingById(ID: string): Promise<void> {
        await deleteSchedulingById(ID)
    }
}

export {
    CreateSchedulingUseCaseRepository,
    ListSchedulingsUseCaseRepository,
    ListSchedulingByIdUseCaseRepository,
    UpdateSchedulingByIdUseCaseRepository,
    DeleteSchedulingByIdUseCaseRepository
}