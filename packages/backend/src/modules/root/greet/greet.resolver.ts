import { MyContext } from "../../../types/graphql.js";

const resolvers = {
  Query: {
    health: async (_:any, args:any, context: MyContext, info: any) => {
      return true;
    }
  }
}

export default resolvers;