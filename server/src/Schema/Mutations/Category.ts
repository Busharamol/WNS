import { CategoryType } from "../TypeDefs/Category";
import { MessageType } from "../TypeDefs/Messages";
import { GraphQLString, GraphQLID } from "graphql";
import { Category } from "../../Entities/Category";
export const CREATE_CATEGORY = {
    type: CategoryType,
    args: {
        cat_name: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { cat_name } = args;
        await Category.insert({ cat_name });
        return args;
    },
};



export const DELETE_CATEGORY = {
    type: MessageType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any) {
        const id = args.id
        await Category.delete(id)
        return {successful : true, message: "DELETE WORKED"}
    },
};
