import { UserEntity } from "./user";

class AvailableScheduleEntity {
    ID: string;
    dateTime: Date;
    professional: UserEntity
    createdAt: Date;
    updatedAt: Date;

    constructor(ID: string, dateTime: Date, professional: UserEntity, createdAt: Date, updatedAt: Date) {
        this.ID = ID;
        this.dateTime = dateTime;
        this.professional = professional
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export {
    AvailableScheduleEntity
};
