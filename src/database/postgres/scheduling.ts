import { SchedulingEntity } from "../../entity/scheduling"
import { ListSchedulingByIdUseCaseRequest, UpdateSchedulingByIdUseCaseRequest } from "../../useCase/ucio/scheduling"
import { Connection } from "./connection"
import { SchedulingModel } from "./model/scheduling"
import { toSchedulingEntity, toSchedulingModel } from "./transformer/scheduling"

async function createScheduling(schedulingEntity: SchedulingEntity): Promise<void> {
    const repository = await Connection.getRepository(SchedulingModel)

    const schedulingModel = toSchedulingModel(schedulingEntity)

    await repository.save(schedulingModel)
}

async function listSchedulings(): Promise<SchedulingEntity[]> {
    const repository = await Connection.getRepository(SchedulingModel)

    const schedulings = await repository.find({
        relations: ['client', 'horario']
    })

    const schedulingsEntities = schedulings.map((schedulingModel) => toSchedulingEntity(schedulingModel))

    return schedulingsEntities
}

async function listSchedulingById(ID: ListSchedulingByIdUseCaseRequest): Promise<SchedulingEntity> {
    const repository = await Connection.getRepository(SchedulingModel)

    const schedulingModel = await repository.findOneBy({ ID })

    const schedulingEntity = toSchedulingEntity(schedulingModel)

    return schedulingEntity
}

async function updateSchedulingById(req: UpdateSchedulingByIdUseCaseRequest): Promise<SchedulingEntity> {
    const { ID, ...SchedulingProps } = req

    const repository = await Connection.getRepository(SchedulingModel)

    await repository.update(ID, SchedulingProps)

    const updatedSchedulingModel = await repository.findOneBy({ ID });
    
    const schedulingEntity = toSchedulingEntity(updatedSchedulingModel)

    return schedulingEntity
}

async function deleteSchedulingById(ID: string): Promise<void> {
    const repository = await Connection.getRepository(SchedulingModel)

    await repository.delete({ ID })
}

export {
    createScheduling,
    listSchedulingById,
    listSchedulings,
    deleteSchedulingById,
    updateSchedulingById
}
