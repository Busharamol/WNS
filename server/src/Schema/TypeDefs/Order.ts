import { GraphQLID, GraphQLString, GraphQLObjectType } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Entities/Users";


export const OrderType = new GraphQLObjectType({
    name: "Order",
    fields: () => ({
        id: { type: GraphQLID},
        date:{ type: GraphQLString},
        customerid: {
            type: UserType,
            resolve(parent, args){
                const id = parent.customerid
                return Users.findOneBy({ id })
            }
        }
    }),
});