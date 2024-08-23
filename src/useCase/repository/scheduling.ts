import { SchedulingEntity } from "../../entity/scheduling"
import { ListSchedulingByIdUseCaseRequest, UpdateSchedulingByIdUseCaseRequest } from "../ucio/scheduling"

interface CreateScheduleUseCaseRepositoryInterface {
    createScheduling(scheduling: SchedulingEntity): Promise<void>
}
interface ListSchedulingsUseCaseRepositoryInterface {
    listSchedulings(): Promise<SchedulingEntity[]>
}
interface ListSchedulingByIdUseCaseRepositoryInterface {
    listSchedulingById(ID: ListSchedulingByIdUseCaseRequest): Promise<SchedulingEntity>
}
interface UpdateSchedulingByIdUseCaseRepositoryInterface {
    updateSchedulingById(ID: UpdateSchedulingByIdUseCaseRequest): Promise<SchedulingEntity>
}
interface DeleteSchedulingByIdUseCaseRepositoryInterface {
    deleteSchedulingById(ID: string): Promise<void>
}


export {
    CreateScheduleUseCaseRepositoryInterface,
    ListSchedulingsUseCaseRepositoryInterface,
    ListSchedulingByIdUseCaseRepositoryInterface,
    UpdateSchedulingByIdUseCaseRepositoryInterface,
    DeleteSchedulingByIdUseCaseRepositoryInterface
}