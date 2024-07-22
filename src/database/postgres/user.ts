import { UserEntity } from "../../entity/user";
import { ListUserByIdUseCaseRequest, UpdateUserByIdUseCaseRequest } from "../../useCase/ucio/user";
import { Connection } from "./connection";
import { UserModel } from "./model/user";
import { toUserEntity, toUserModel } from "./transformer/user";
import bcrypt from "bcryptjs"

async function createUser(userEntity: UserEntity): Promise<void> {
    const repository = await Connection.getRepository(UserModel)

    const userModel = toUserModel(userEntity)

    await repository.save(userModel)
}

async function listUsers(): Promise<UserEntity[]> {
    const repository = await Connection.getRepository(UserModel)

    const users = await repository.find()

    const usersEntities = users.map((userModel) => toUserEntity(userModel))

    return usersEntities
}

async function listUserById(ID: ListUserByIdUseCaseRequest): Promise<UserEntity> {
    const repository = await Connection.getRepository(UserModel)

    const userModel = await repository.findOneBy({ ID })

    const userEntity = toUserEntity(userModel)

    return userEntity
}

async function updateUserById(req: UpdateUserByIdUseCaseRequest): Promise<UserEntity> {
    const { ID, ...userProps } = req
    
    const repository = await Connection.getRepository(UserModel)

    await repository.update(ID, userProps)
    const updatedUserModel = await repository.findOneBy({ ID });
    const userEntity = toUserEntity(updatedUserModel)

    return userEntity
}

async function deleteUserById(ID: string): Promise<void> {
    const repository = await Connection.getRepository(UserModel)
    
    await repository.delete({ ID })
}


export {
    createUser,
    listUserById,
    listUsers,
    deleteUserById,
    updateUserById
};

