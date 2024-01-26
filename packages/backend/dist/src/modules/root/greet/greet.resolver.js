const resolvers = {
    Query: {
        health: async (_, args, context, info) => {
            return true;
        }
    }
};
export default resolvers;
