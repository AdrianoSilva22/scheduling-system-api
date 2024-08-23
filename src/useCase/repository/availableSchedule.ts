import { AvailableScheduleEntity } from "../../entity/availableSchedule";
import { ListAvailableScheduleByIdUseCaseRequest, UpdateAvailableScheduleByIdUseCaseRequest } from "../ucio/availableSchedule";

interface CreateAvailableScheduleUseCaseRepositoryInterface {
    createAvailableSchedule(availableSchedule: AvailableScheduleEntity): Promise<void>
}
interface ListAvailableSchedulesUseCaseRepositoryInterface {
    listAvailableSchedules(): Promise<AvailableScheduleEntity[]>
}
interface ListAvailableScheduleByIdUseCaseRepositoryInterface {
    listAvailableScheduleById(ID: ListAvailableScheduleByIdUseCaseRequest): Promise<AvailableScheduleEntity>
}
interface UpdateAvailableScheduleByIdUseCaseRepositoryInterface {
    updateAvailableScheduleById(ID: UpdateAvailableScheduleByIdUseCaseRequest): Promise<AvailableScheduleEntity>
}
interface DeleteAvailableScheduleByIdUseCaseRepositoryInterface {
    deleteAvailableScheduleById(ID: string): Promise<void>
}

export {
    CreateAvailableScheduleUseCaseRepositoryInterface,
    ListAvailableSchedulesUseCaseRepositoryInterface,
    ListAvailableScheduleByIdUseCaseRepositoryInterface,
    UpdateAvailableScheduleByIdUseCaseRepositoryInterface,
    DeleteAvailableScheduleByIdUseCaseRepositoryInterface
}