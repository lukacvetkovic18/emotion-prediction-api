import { BaseEntity, BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcryptjs";
import { Prediction } from "../predictions/predictions.entity";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar", { unique: true })
    username: string;

    @Column()
    password: string;

    @OneToMany(() => Prediction, (prediction) => prediction.user, { cascade: true })
    predictions: Prediction[];

    @BeforeInsert()
    async hashPassword(){
        if (this.password) {
            this.password = await bcrypt.hash(this.password, 10);
        }
    }
    async comparePassword(attempt: string) : Promise <boolean> {
        return await bcrypt.compare(attempt, this.password);
    }
}