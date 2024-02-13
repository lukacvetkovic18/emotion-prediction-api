import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../users/users.entity";

@Entity()
export class Prediction extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @ManyToOne(() => User, (user) => user.predictions, { onDelete: "CASCADE" })
    user: User;

    @CreateDateColumn()
    createdAt: Date;

    @Column("text")
    image: string;

    @Column("varchar")
    prediction: string;

    @Column("double")
    predictionPercentage: number;
}