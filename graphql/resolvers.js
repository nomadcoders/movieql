import { getMovies } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies()
  }
};

export default resolvers;
