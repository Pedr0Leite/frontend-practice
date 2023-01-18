import { gql } from "@apollo/client";

// This query inside the backquotes can be done inside the graphQL gui
// export const LOAD_USERS = gql`
// query{
//   getAllUsers{
//     id,
//     firstName,
//     lastName,
//     email
//   }
// }
// `
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
// export const LOAD_USERS = gql`
// query Query {

// allStarships {
// starships {
//   id
//   name
//   model
//   starshipClass
//   hyperdriveRating
//   passengers
//   costInCredits
// }
// }
// }
// `
// export const LOAD_USERS = gql`
// query Query {

// allStarships {
// starships {
//   id
//   name
//   model
//   starshipClass
//   hyperdriveRating
//   passengers
//   costInCredits
// }
// }
// }
// `

// query Query{
//   allFilms {
//     films {
//       id
//       title
//       characterConnection {
//         characters {
//           id
//           name
//         }
//       }
//     }
//   }
// }