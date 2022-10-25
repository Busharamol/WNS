import { AddproductType } from "../TypeDefs/Addproduct";
import { MessageType } from "../TypeDefs/Messages";
import { GraphQLString, GraphQLFloat, GraphQLID } from "graphql";
import { Addproduct } from "../../Entities/Addproduct";
import { resolve } from "path";
export const CREATE_PRODUCT = {
    type: AddproductType,
    args: {
        p_name: { type: GraphQLString },
        description: { type: GraphQLString },
        Rating: { type: GraphQLString },
        price: { type: GraphQLString },
        discount: { type: GraphQLString },
        org_price: { type: GraphQLString },
        img :{ type: GraphQLString},
        cat_name :{ type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const { p_name, description, Rating, price, discount, org_price, img, cat_name } = args;
        await Addproduct.insert({ p_name, description, Rating, price, discount, org_price, img , cat_name});
        return args;
    },
};

export const DELETE_PRODUCT = {
    type: AddproductType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any) {
        const id = args.id
        await Addproduct.delete(id)
        return {successful : true, message: "DELETE WORKED"}
    },
};

export const UPDATE_PRODUCT = {
    type: AddproductType,
    args:{
        id: {type: GraphQLID},
        new_p_name: { type: GraphQLString },
        new_description: { type: GraphQLString },
        new_rating: { type: GraphQLString },
        new_price: { type: GraphQLString },
        new_discount: { type: GraphQLString },
        new_org_price: { type: GraphQLString },
        new_img :{ type: GraphQLString},
        new_cat_name :{ type: GraphQLString} 
    },
    async resolve(_parent: any, args: any){
        const { id, new_p_name, new_description, new_rating, new_price, new_discount, new_org_price, new_img, new_cat_name} = args;
        const addProduct = await Addproduct.findOne({ where: { id:id }});
        await Addproduct.update({ id:id }, { p_name: new_p_name}); 
        await Addproduct.update({ id:id }, { description: new_description}); 
        await Addproduct.update({ id:id }, { Rating: new_rating}); 
        await Addproduct.update({ id:id }, { price: new_price}); 
        await Addproduct.update({ id:id }, { discount: new_discount}); 
        await Addproduct.update({ id:id }, { org_price: new_org_price}); 
        await Addproduct.update({ id:id }, { img: new_img}); 
        await Addproduct.update({ id:id }, { cat_name: new_cat_name}); 

        return({
            id,
            new_p_name,
            new_description,
            new_rating,
            new_price,
            new_discount,
            new_org_price,
            new_img,
            new_cat_name
        })
    },
}