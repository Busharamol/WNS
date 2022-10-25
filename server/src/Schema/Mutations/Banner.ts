import { BannerType } from "../TypeDefs/Banner";
import { GraphQLString, GraphQLID } from "graphql";
import { Banners } from "../../Entities/Banner";
export const CREATE_BANNER = {
    type: BannerType,
    args: {
        img: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { img } = args;
        await Banners.insert({ img });
        return args;
    },
};


export const DELETE_BANNER = {
    type: BannerType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any) {
        const id = args.id
        await Banners.delete(id)
        return {successful : true, message: "DELETE WORKED"}
    },
};
