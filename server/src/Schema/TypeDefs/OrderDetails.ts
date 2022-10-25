import { GraphQLID, GraphQLString, GraphQLObjectType } from "graphql";
import { AddproductType } from "./Addproduct";
import {Addproduct } from "../../Entities/Addproduct";
import { Orders } from "../../Entities/Order"
import { OrderType } from "./Order";
import { CREATE_PRODUCT } from "../Mutations/Addproduct";


export const OrederDetailsType = new GraphQLObjectType({
    name: "OrderDetails",
    fields: () => ({
        id: { type: GraphQLID},
        orderid: {
            type: OrderType,
            resolve(parent, args){
                const id = parent.orderid
                return Orders.findOneBy({ id })
            }
        },
        productid:{
            type: AddproductType,
            resolve(parent, args){
                const id = parent.productid
                return Addproduct.findOneBy({id})
            }
        },
        quantity: { type: GraphQLID},
        price: { type: GraphQLID},
        total: { type: GraphQLID},
        customerid: { type: GraphQLID}
    }),
});