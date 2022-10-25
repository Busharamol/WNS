import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";
export const BannerType = new GraphQLObjectType({
    name: "Banners",
    fields: () => ({
        id: { type: GraphQLID },
        img: { type: GraphQLString },
    })
});