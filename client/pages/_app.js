import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return <ApolloProvider client={client}><Component {...pageProps} /></ApolloProvider>
}
export default MyApp
