import express from "express";
import resolvers from "./Resolvers.js";
import schema from "./Schema.js";
import { graphqlHTTP } from "express-graphql";
let app = express();

app.get("/", (req, res) => {
  res.send("Up and Running");
});

const root = resolvers;
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: root,
  })
);

app.listen(5050, () => {
  console.log("running 5050");
});
