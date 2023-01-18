import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client';
import { ErrorLink, onError } from '@apollo/client/link/error';
import GetUsers from './Components/GetUsers';
import Form from './Components/Form';

// graphql error handling
const errorLink = onError(({graghqlErrors, networkError}) =>{
  if(graghqlErrors){
    graghqlErrors.map(({message, location, path}) =>{
      alert(`Graphql error ${message}`)
    })
  }
});

// link for the graphql server
const link = from([
  errorLink, 
  // new HttpLink({uri:"http://localhost:1313/graphql"
  // new HttpLink({uri:"http://api.spacex.land/graphql/"
  new HttpLink({uri:"https://swapi-graphql.netlify.app/.netlify/functions/index"
  })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link:link
});

function App() {
  return (
    <ApolloProvider client={client}>
      {" "}
    <GetUsers />
      {/* <Form /> */}
    </ApolloProvider>
  )
}

export default App;
