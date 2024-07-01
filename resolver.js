const db = require("./sampleData");

// The rootValue provides a resolver function for each API endpoint
const rootValue = {
  hello: ({ name }) => {
    return `Hello ${name}`;
  },
  age: async (_, { mongo }) => {
    const users = await mongo.users.find().toArray();
    console.log(users);
    return 25;
  },
  users: () => {
    return db.users;
  },
  createUser: async ({ user }, { mongo }) => {
    const movies = await mongo.movies.find().toArray();

    console.log(movies);

    return {
      id: "1",
      ...user,
    };
  },
};

module.exports = rootValue;
