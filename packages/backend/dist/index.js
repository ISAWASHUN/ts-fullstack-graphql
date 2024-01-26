import http from 'http';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import typeDefs from './src/modules/root/greet/greet.typeDefs.js';
import resolvers from './src/modules/root/greet/greet.resolver.js';
import makeTodoTypeDefs from './src/modules/todos/make-todo/make-todo.typeDefs.js';
import makeTodoResolvers from './src/modules/todos/make-todo/make-todo.resolver.js';
import TodoTypeDefs from './src/modules/root/models/todo.typeDefs.js';
async function main() {
    const PORT = process.env.PORT || 5555;
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs: mergeTypeDefs([typeDefs, makeTodoTypeDefs, TodoTypeDefs]),
        resolvers: mergeResolvers([resolvers, makeTodoResolvers]),
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
