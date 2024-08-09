import { SchedulingEntity } from "../../../entity/scheduling"
import { SchedulingModel } from "../model/scheduling"

function toSchedulingEntity(m: SchedulingModel): SchedulingEntity {
    return new SchedulingEntity(m.ID, m.client, m.horario, m.createdAt, m.updatedAt)

}

function toSchedulingModel(e: SchedulingEntity): SchedulingModel {
    return new SchedulingModel(e.ID, e.client, e.horario,e.createdAt, e.updatedAt)

}

export {
    toSchedulingEntity,
    toSchedulingModel
}