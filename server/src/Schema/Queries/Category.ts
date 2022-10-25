import { GraphQLList } from "graphql";
import { CategoryType } from "../TypeDefs/Category";
import { Category } from "../../Entities/Category"

export const GET_ALL_CATEGORY = {
    type: new GraphQLList(CategoryType),
    resolve() {
        return Category.find();
    },
}