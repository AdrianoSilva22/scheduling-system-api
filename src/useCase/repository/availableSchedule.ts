import { AvailableScheduleEntity } from "../../entity/availableSchedule";

interface CreateAvailableScheduleUseCaseRepositoryInterface {
    createAvailableSchedule(availableSchedule: AvailableScheduleEntity): Promise<void>
}

export {
    CreateAvailableScheduleUseCaseRepositoryInterface
}