import { createAvailableSchedule, deleteAvailableScheduleById, listAvailableScheduleById, listAvailableSchedules, updateAvailableScheduleById } from "../database/postgres/availableSchedule";
import { AvailableScheduleEntity } from "../entity/availableSchedule";
import { CreateAvailableScheduleUseCaseRepositoryInterface, DeleteAvailableScheduleByIdUseCaseRepositoryInterface, ListAvailableScheduleByIdUseCaseRepositoryInterface, ListAvailableSchedulesUseCaseRepositoryInterface, UpdateAvailableScheduleByIdUseCaseRepositoryInterface } from "../useCase/repository/availableSchedule";
import { ListAvailableScheduleByIdUseCaseRequest, UpdateAvailableScheduleByIdUseCaseRequest } from "../useCase/ucio/availableSchedule";

class CreateAvailableScheduleUseCaseRepository implements CreateAvailableScheduleUseCaseRepositoryInterface {
    async createAvailableSchedule(availableSchedule: AvailableScheduleEntity): Promise<void> {
        await createAvailableSchedule(availableSchedule)
    }
}
class ListAvailableSchedulesUseCaseRepository implements ListAvailableSchedulesUseCaseRepositoryInterface {
    async listAvailableSchedules(): Promise<AvailableScheduleEntity[]> {
        return await listAvailableSchedules()
    }
}
class ListAvailableScheduleByIdUseCaseRepository implements ListAvailableScheduleByIdUseCaseRepositoryInterface {
    async listAvailableScheduleById(ID: ListAvailableScheduleByIdUseCaseRequest): Promise<AvailableScheduleEntity> {
        return listAvailableScheduleById(ID)
    }
}
class UpdateAvailableScheduleByIdUseCaseRepository implements UpdateAvailableScheduleByIdUseCaseRepositoryInterface {
    async updateAvailableScheduleById(ID: UpdateAvailableScheduleByIdUseCaseRequest): Promise<AvailableScheduleEntity> {
        return updateAvailableScheduleById(ID)
    }
}
class DeleteAvailableScheduleByIdUseCaseRepository implements DeleteAvailableScheduleByIdUseCaseRepositoryInterface {
    async deleteAvailableScheduleById(ID: string): Promise<void> {
        await deleteAvailableScheduleById(ID)
    }
}

export {
    CreateAvailableScheduleUseCaseRepository,
    ListAvailableSchedulesUseCaseRepository,
    ListAvailableScheduleByIdUseCaseRepository,
    UpdateAvailableScheduleByIdUseCaseRepository,
    DeleteAvailableScheduleByIdUseCaseRepository
}