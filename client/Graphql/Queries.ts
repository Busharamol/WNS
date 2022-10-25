import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
    query getAllUsers {
        getAllUsers {
            id 
            name
            username
            address
        }
    }
`
export const GET_ALL_BANNERS = gql`
    query getAllBanners {
        getAllBanners {
            id 
            img
        }
    }
`

export const GET_ALL_CATEGORY = gql`
    query getAllCategory {
        getAllCategory {
            id 
            cat_name
        }
    }
`


export const GET_ALL_PRODUCT = gql`
    query getAllProduct {
        getAllProduct {
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
`