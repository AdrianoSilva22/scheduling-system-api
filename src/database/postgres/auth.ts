import { UserEntity } from "../../entity/user";
import { Connection } from "./connection";
import { UserModel } from "./model/user";
import { toUserEntity } from "./transformer/user";

async function authUser(email: string): Promise<UserEntity> {
    const repository = await Connection.getRepository(UserModel);
    
    const userModel: UserModel = await repository.findOne({ where: { email } });
    
    const userEntity = toUserEntity(userModel)

    return userEntity
}

export {
    authUser
}