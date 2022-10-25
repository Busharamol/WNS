import { GraphQLList } from "graphql";
import { AddproductType } from "../TypeDefs/Addproduct";
import { Addproduct } from "../../Entities/Addproduct"

export const GET_ALL_PRODUCT = {
    type: new GraphQLList(AddproductType),
    resolve() {
        return Addproduct.find();
    },
}