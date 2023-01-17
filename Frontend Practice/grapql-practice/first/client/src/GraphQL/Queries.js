import { gql } from "@apollo/client";

// This query inside the backquotes can be done inside the graphQL gui
export const LOAD_USERS = gql`
query{
  getAllUsers{
    id,
    firstName,
    lastName,
    email
  }
}
`
// export const LOAD_USERS = gql`
// query{
//     rockets {
//     id
//     name
//     company
//     boosters
//   }
// }
// `