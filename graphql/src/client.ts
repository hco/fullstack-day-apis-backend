import { Client, cacheExchange, fetchExchange } from '@urql/core';

export const client = new Client({
  url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  exchanges: [cacheExchange, fetchExchange],
});

