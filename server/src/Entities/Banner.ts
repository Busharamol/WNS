import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Banners extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    img!: string;
}