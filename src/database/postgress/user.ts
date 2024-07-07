import { UserEntity } from "../../entity/user";
import { Connection } from "./connection";
import { UserModel } from "./model/user";
import { toUserModel } from "./transformer/user";

async function createUser(userData: UserEntity) {
    const repository = await Connection.getRepository(UserModel)

    const userModel = toUserModel(userData)

    await repository.save(userModel)
}

export {
    createUser
};
