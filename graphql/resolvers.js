import { people, getById } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id)
  }
};

export default resolvers;
