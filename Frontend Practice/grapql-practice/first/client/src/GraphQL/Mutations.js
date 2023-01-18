import { gql } from "@apollo/client";

/*
*First is the mutaion schema that was build on the server side
*Second is what are we going to send to the server side to create the user
*Third is what returns from the mutation
*/

export const CREATE_USER_MUTATION = gql`

    mutation createUser(
    $firstName: String!
    $lastName:String!
    $email:String!
    $password:String
    ){
        createUser(
        firstName: $firstName
        lastName:$lastName
        email:$email
        password:$password
        ){
        firstName
        }
    }
`