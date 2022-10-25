import { GraphQLList } from "graphql";
import { BannerType } from "../TypeDefs/Banner";
import { Banners } from "../../Entities/Banner"

export const GET_ALL_Banners = {
    type: new GraphQLList(BannerType),
    resolve() {
        return Banners.find();
    },
}