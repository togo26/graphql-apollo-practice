import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false
    },
    Mutation: {
      toggleLikeMovie: (_, { id }, { cache }) => {
        const myMovie = {
          id,
          __typename: 'Movie',
        };

        cache.modify({
          id: cache.identify(myMovie),
          fields: {
            isLiked: cached => !cached
          }
        });
      }
    }
  }
});

export default client;
