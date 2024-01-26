import { Resolvers } from "../../../__generated__/graphql.js";

const resolvers: Resolvers = {
  Mutation: {
    makeTodo: async (_, {makeTodoInput}, context, info) => {
      const todoItem = {
        id: crypto.randomUUID(),
        title: makeTodoInput.title,
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      }
      return {
        todo: todoItem
      }
    }
  }
};

export default resolvers;