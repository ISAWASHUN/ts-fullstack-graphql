import http from 'http';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
const typeDefs = `#graphql
  type Query {
    health: Boolean!
  }
`;
const resolvers = {
    Query: {
        health: async (_, args, context, info) => {
            return true;
        }
    }
};
async function main() {
    const PORT = process.env.PORT || 5555;
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs: mergeTypeDefs([typeDefs]),
        resolvers: mergeResolvers([resolvers]),
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start();
    app.use(express.json());
    app.use("/graphql", expressMiddleware(server, {
        context: async ({ req, res }) => ({ req, res }),
    }));
    await new Promise((resolve) => httpServer.listen({ port: PORT }, (resolve)));
    console.log("server started at http://localhost:5555/graphql");
}
main().catch((error) => {
    console.error(error);
    process.exit(1);
});
