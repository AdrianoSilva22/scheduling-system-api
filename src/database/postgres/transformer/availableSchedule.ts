import { AvailableScheduleEntity } from "../../../entity/availableSchedule";
import { AvailableScheduleModel } from "../model/availableSchedule";

function toAvailableScheduleEntity(m: AvailableScheduleModel): AvailableScheduleEntity {
    return new AvailableScheduleEntity(m.ID, m.dateTime, m.createdAt, m.updatedAt)

}

function toAvailableScheduleModel(e: AvailableScheduleEntity): AvailableScheduleModel {
    return new AvailableScheduleModel(e.ID, e.dateTime, e.createdAt, e.updatedAt)

}

export {
    toAvailableScheduleEntity,
    toAvailableScheduleModel
}