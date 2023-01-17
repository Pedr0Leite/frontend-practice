const express = require("express");
const app = express();
const PORT = 1313;
const { graphqlHTTP } = require("express-graphql");
const schema = require('./Schemas/index.js');
const cors = require("cors");
const graphql = require("graphql");

app.use(cors());
app.use(express.json());
app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true
    })
);


app.listen(PORT, ()=>{
    console.log("server running...");
})