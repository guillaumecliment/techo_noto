import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
// The gql function from the graphql-tag package, allow you to write and parse GraphQL 
import { gql } from 'apollo-boost';

const client = new ApolloClient({
cache: new InMemoryCache(),
link: new HttpLink({
uri: 'https://your-hasura-endpoint-url'
}),
});

export default client;


// I can import this client in your React components and use the useQuery and useMutation hooks from the @apollo/react-hooks package to make GraphQL queries and mutations.

    // Example usage:
    
    // import client from './apollo';
    // import { useQuery } from '@apollo/react-hooks';

    // const GET_USERS = gql// query { // users { // id // name // email // } // } //;

    // function Users() {
    // const { loading, error, data } = useQuery(GET_USERS, { client });

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;

    // return data.users.map(({ id, name, email }) => (
    // <div key={id}>
    // <p>{name}</p>
    // <p>{email}</p>
    // </div>
    // ));
    // }

// TODO: Remember to replace the "https://your-hasura-endpoint-url" with your Hasura endpoint URL.