import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from "./Queries/User";
import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } from "./Mutations/User";
import { GET_ALL_Banners } from "./Queries/Banner";
import { CREATE_BANNER, DELETE_BANNER } from "./Mutations/Banner";
import { CREATE_CATEGORY, DELETE_CATEGORY } from "./Mutations/Category";
import { GET_ALL_CATEGORY } from "./Queries/Category";
import { GET_ALL_PRODUCT } from "./Queries/Addproduct";
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./Mutations/Addproduct";
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS,
        getAllBanners: GET_ALL_Banners,
        getAllCategory: GET_ALL_CATEGORY,
        getAllProduct: GET_ALL_PRODUCT
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
        deleteUser: DELETE_USER,
        updatePassword: UPDATE_PASSWORD,
        createBanner: CREATE_BANNER,
        deleteBanner: DELETE_BANNER,
        createCategory: CREATE_CATEGORY,
        deleteCategory: DELETE_CATEGORY,
        createProduct: CREATE_PRODUCT,
        deleteProduct: DELETE_PRODUCT,
        updateProduct: UPDATE_PRODUCT,
    },
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});