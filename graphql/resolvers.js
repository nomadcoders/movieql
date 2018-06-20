const nicolas = {
  name: "Nicolas",
  age: 18,
  gender: "female"
};

const resolvers = {
  Query: {
    person: () => nicolas
  }
};

export default resolvers;
