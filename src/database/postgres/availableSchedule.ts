import { AvailableScheduleEntity } from "../../entity/availableSchedule";
import { ListAvailableScheduleByIdUseCaseRequest, UpdateAvailableScheduleByIdUseCaseRequest } from "../../useCase/ucio/availableSchedule";
import { Connection } from "./connection";
import { AvailableScheduleModel } from "./model/availableSchedule";
import { toAvailableScheduleEntity, toAvailableScheduleModel } from "./transformer/availableSchedule";

async function createAvailableSchedule(availableScheduleEntity: AvailableScheduleEntity): Promise<void> {
    const repository = await Connection.getRepository(AvailableScheduleModel)

    const availableScheduleModel = toAvailableScheduleModel(availableScheduleEntity)

    await repository.save(availableScheduleModel)
}
async function listAvailableSchedules(): Promise<AvailableScheduleEntity[]> {
    const repository = await Connection.getRepository(AvailableScheduleModel)

    const availableSchedules = await repository.find({
        relations: ['professional']
    })

    const availableSchedulesEntities = availableSchedules.map((availableSchedules) => toAvailableScheduleEntity(availableSchedules))

    return availableSchedulesEntities
}

async function listAvailableScheduleById(ID: ListAvailableScheduleByIdUseCaseRequest): Promise<AvailableScheduleEntity> {
    const repository = await Connection.getRepository(AvailableScheduleModel)

    const availableScheduleModel = await repository.findOne({
        where: {ID},
        relations: ['professional']
    });


    const availableScheduleEntity = toAvailableScheduleEntity(availableScheduleModel)

    return availableScheduleEntity
}

async function updateAvailableScheduleById(req: UpdateAvailableScheduleByIdUseCaseRequest): Promise<AvailableScheduleEntity> {
    const { ID, ...availableScheduleProps } = req

    const repository = await Connection.getRepository(AvailableScheduleModel)

    const existingAvailableSchedule = await repository.findOneBy({ ID })

    if (!existingAvailableSchedule) {
        throw new Error(`Horário Disponível com ID: ${ID} não encontrado`);
    }

    await repository.update(ID, availableScheduleProps)

    const updatedAvailableScheduleModel = await repository.findOne({ 
        where: {ID},
        relations: ['professional']
     });

    const updatedAvailableScheduleEntity = toAvailableScheduleEntity(updatedAvailableScheduleModel)

    return updatedAvailableScheduleEntity
}

async function deleteAvailableScheduleById(ID: string): Promise<void> {
    const repository = await Connection.getRepository(AvailableScheduleModel)
    
    await repository.delete({ ID })
}

export {
    createAvailableSchedule,
    listAvailableScheduleById,
    listAvailableSchedules,
    deleteAvailableScheduleById,
    updateAvailableScheduleById
}
