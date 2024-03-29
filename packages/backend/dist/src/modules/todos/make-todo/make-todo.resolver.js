export const resolvers = {
    Mutation: {
        makeTodo: async (_, { makeTodoInput }, { prismaClient }, info) => {
            const newTodo = await prismaClient.todo.create({
                data: {
                    title: makeTodoInput.title,
                },
            });
            newTodo.createdAt;
            return {
                todo: {
                    ...newTodo,
                    updatedAt: newTodo.updatedAt,
                    createdAt: newTodo.createdAt
                }
            };
        }
    }
};
