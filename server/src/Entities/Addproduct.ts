import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Addproduct extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    p_name!: string;

    @Column()
    description!: string;

    @Column()
    Rating!: string;

    @Column()
    price!:string;

    @Column()
    discount!: String;

    @Column()
    org_price!: string;

    @Column()
    cat_name!: string;

    @Column()
    img!: string;

}