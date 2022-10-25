import { GraphQLObjectType, GraphQLID, GraphQLString , GraphQLFloat} from "graphql";
import { Category } from "../../Entities/Category";
import { CategoryType } from "../TypeDefs/Category";
export const AddproductType = new GraphQLObjectType({
    name: "AddProduct",
    fields: () => ({
        id: { type: GraphQLID },
        p_name: { type: GraphQLString },
        description: { type: GraphQLString },
        Rating: { type: GraphQLString },
        price: { type: GraphQLString },
        discount: { type: GraphQLString },
        org_price: { type: GraphQLString },
        img :{ type: GraphQLString},
        cat_name: { type: GraphQLString},
    })
});
