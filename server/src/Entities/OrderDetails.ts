import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderDetails extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    orderid!: number;

    @Column()
    productid!: number;

    @Column()
    quantity!: number;

    @Column()
    total!: number;

    @Column()
    customerid!: number;

}