import { AvailableScheduleEntity } from "../../entity/availableSchedule";
import { Connection } from "./connection";
import { AvailableScheduleModel } from "./model/availableSchedule";
import { toAvailableScheduleModel } from "./transformer/availableSchedule";

async function createAvailableSchedule(availableScheduleEntity: AvailableScheduleEntity): Promise<void> {
    const repository = await Connection.getRepository(AvailableScheduleModel)

    const availableScheduleModel = toAvailableScheduleModel(availableScheduleEntity)

    await repository.save(availableScheduleModel)
}

export {
    createAvailableSchedule
}