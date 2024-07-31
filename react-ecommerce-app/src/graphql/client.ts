// src/graphql/client.ts

import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://your-graphql-api-endpoint.com/graphql',
  cache: new InMemoryCache()
});