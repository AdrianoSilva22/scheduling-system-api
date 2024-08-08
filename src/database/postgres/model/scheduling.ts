import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AvailableScheduleEntity } from "../../../entity/availableSchedule";
import { UserEntity } from "../../../entity/user";
import { AvailableScheduleModel } from "./availableSchedule";
import { UserModel } from "./user";
@Entity({ schema: 'public', name: 'scheduling' })
class SchedulingModel {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    ID: string;

    @ManyToOne(() => UserModel, user => user.scheduling)
    @JoinColumn({ name: 'client_id' })
    client: UserEntity; 

    @OneToOne(() => AvailableScheduleModel, availableSchedule => availableSchedule.scheduling)
    @JoinColumn({ name: 'horario_id' })
    horario: AvailableScheduleEntity;  

    @Column({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;

    constructor(
        ID: string,
        client: UserEntity,
        horario: AvailableScheduleEntity,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.ID = ID;
        this.client = client;
        this.horario = horario;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export { SchedulingModel };

