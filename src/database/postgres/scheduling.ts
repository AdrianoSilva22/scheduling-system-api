import { SchedulingEntity } from "../../entity/scheduling"
import { Connection } from "./connection"
import { SchedulingModel } from "./model/scheduling"
import { toSchedulingModel } from "./transformer/scheduling"

async function createScheduling(schedulingEntity: SchedulingEntity): Promise<void> {
    const repository = await Connection.getRepository(SchedulingModel)

    const schedulingModel = toSchedulingModel(schedulingEntity)

    await repository.save(schedulingModel)
}

export {
    createScheduling
}
