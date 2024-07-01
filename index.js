const { createHandler } = require("graphql-http/lib/use/express");
const express = require("express");
const { ruruHTML } = require("ruru/server");
const schema = require("./schema");
const rootValue = require("./resolver");
const { setUpDatatbase } = require("./mongo");

const app = express();

app.all(
  "/graphql",
  createHandler({
    schema,
    rootValue,
    context: async () => {
      const mongo = await setUpDatatbase();
      return { mongo };
    },
  })
);

app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

app.listen(4000, console.log("Server running on localhost:4000"));
