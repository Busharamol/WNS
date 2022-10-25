import { gql } from '@apollo/client';

export const CREATE_BANNER = gql`
    mutation createBanner(
        $img: String! 
        ){

        createBanner(
            img: $img
        ){
            id
            img
        }
    }
`;

export const DELETE_USER = gql`
    mutation deleteUser(
        $id: ID! 
        ){

        deleteUser(
            id: $id
        ){
            message
        }
    }
`;

export const DELETE_BANNER = gql`
    mutation deleteBanner(
        $id: ID! 
        ){

        deleteBanner(
            id: $id
        ){
            id
        }
    }
`;

export const CREATE_CATEGORY = gql`
    mutation createCategory(
        $cat_name: String! 
        ){

        createCategory(
            cat_name: $cat_name
        ){
            id
            cat_name
        }
    }
`;

export const DELETE_CATEGORY = gql`
    mutation deleteCategory(
        $id: ID! 
        ){

        deleteCategory(
            id: $id
        ){
            message
        }
    }
`;

export const CREATE_PRODUCT = gql`
    mutation createProduct(
        $p_name: String! 
        $description: String!
        $Rating: String!
        $price: String!
        $discount: String!
        $org_price: String!
        $img: String!
        $cat_name: String!
        ){

        createProduct(
            p_name: $p_name
            description: $description
            Rating: $Rating
            price: $price
            discount:  $discount
            org_price: $org_price
            img: $img
            cat_name:  $cat_name
        ){
            id
            p_name
            description
            Rating
            price
            discount
            org_price
            img
            cat_name
        }
    }
`;

export const DELETE_PRODUCT = gql`
    mutation deleteProduct(
        $id: ID! 
        ){
        deleteProduct(
            id: $id
        ){
            id
        }
    }
`;

export const UPDATE_PRODUCT = gql`
    mutation updateProduct(
        $id: ID!
        $new_p_name: String!
        $new_description: String!
        $new_rating: String!
        $new_price:String!
        $new_discount: String!
        $new_org_price: String!
        $new_img: String!
        $new_cat_name: String!
    ){
       updateProduct(
            id: $id
            new_p_name: $new_p_name
            new_description: $new_description
            new_rating: $new_rating
            new_price: $new_price
            new_discount: $new_discount
            new_org_price: $new_org_price
            new_img: $new_img
            new_cat_name: $new_cat_name
       ){
            id
            p_name
            description
            Rating
            price
            discount
            org_price
            img
            cat_name
       }
    }
`;