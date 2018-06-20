import { getMovies } from "./db";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating)
  }
};

export default resolvers;
