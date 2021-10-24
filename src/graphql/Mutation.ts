import {gql} from '@apollo/client';

export const Sign_In = gql`
    mutation Mutation($email: String!, $password: String!) {
        signIn(email: $email, password: $password) {
            token
            role
            _id
            name
            area    
        }
    }
`;

export const Sign_Up = gql`
    mutation Mutation($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
        signUp(email: $email, password: $password, first_name: $firstName, last_name: $lastName) {
            token
            role
            _id
            name
            area
        }
    }
`;

export const Set_Bin_Empty = gql`
    mutation Mutation($id: ID!) {
        setBinEmpty(_id: $id) {
            _id
            area
            bottle_count
            status
        }
    }
`;