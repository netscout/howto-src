import Koa from 'koa'
import { ApolloServer } from 'apollo-server-koa'
import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'

const server = new ApolloServer({ typeDefs, resolvers });
const app = new Koa();
server.applyMiddleware({ app });

app.listen({ port: 8080 }, () =>
    console.log(`🚀 Server ready at http://localhost:8080${server.graphqlPath}`),
);
