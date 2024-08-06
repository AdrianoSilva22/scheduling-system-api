import { UserEntity } from "../../../entity/user";
import { UserModel } from "../model/user";


function toUserEntity(m: UserModel): UserEntity {
    return new UserEntity(m.ID, m.name, m.email, m.password, m.phone, m.role, m.scheduling ?? [], m.createdAt, m.updatedAt)

}

function toUserModel(e: UserEntity): UserModel {
    return new UserModel(e.ID, e.name, e.email, e.password, e.phone, e.role, e.scheduling ?? [], e.createdAt, e.updatedAt)

}

export {
    toUserEntity,
    toUserModel
};

