import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";
export const CategoryType = new GraphQLObjectType({
    name: "Category",
    fields: () => ({
        id: { type: GraphQLID },
        cat_name: { type: GraphQLString },
    })
});