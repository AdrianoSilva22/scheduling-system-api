import { UserEntity } from "../../entity/user";
import { Connection } from "./connection";
import { UserModel } from "./model/user";
import { toUserEntity, toUserModel } from "./transformer/user";

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

async function listUserById(id: string): Promise<UserEntity> {
    const repository = await Connection.getRepository(UserModel)

    const userModel = await repository.findOneBy({ ID: id })

    const userEntity = toUserEntity(userModel)

    return userEntity
}

export {
    createUser,
    listUserById,
    listUsers
};

