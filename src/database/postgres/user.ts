import { UserEntity } from "../../entity/user";
import { Connection } from "./connection";
import { UserModel } from "./model/user";
import { toUserEntity, toUserModel } from "./transformer/user";

async function createUser(userData: UserEntity): Promise<void> {
    const repository = await Connection.getRepository(UserModel)

    const userModel = toUserModel(userData)

    await repository.save(userModel)
}

async function getAllUsers(): Promise<UserEntity[]> {
    const repository = await Connection.getRepository(UserModel)

    const users = await repository.find() 

    const user = users.map( (user) =>{
     return toUserEntity(user)
        
    })

  return user

}

export {
    createUser,
    getAllUsers
};

