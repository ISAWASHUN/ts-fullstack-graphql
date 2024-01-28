import { DateTimeResolver } from "graphql-scalars";
export const resolvers = {
    DateTime: DateTimeResolver
};
// function validateDateTime(value: string) {
//   const RFC_3339_REGEX =
//     /^(\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60))(\.\d{1,})?(([Z])|([+|-]([01][0-9]|2[0-3]):[0-5][0-9]))$/;
//   const dateTimeString = value.toUpperCase();
//   if (!RFC_3339_REGEX.test(dateTimeString)) {
//     return false;
//   }
//   return true;
// }
// export const resolvers: Resolvers = {
//   DateTime: new GraphQLScalarType({
//     name: "Datetime",
//     description: "Datetime custom scalar type",
//     serialize(value) {
//       return value
//     },
//     parseValue(value) {
//       if(typeof value === "string") {
//         if(!validateDateTime(value)) {
//           throw new GraphQLError("Datetime must be a valid RFC 3339 date-time string")
//         }
//         return new Date(value)
//       }
//     },
//     parseLiteral(ast) {
//       if(!("value" in ast)) {
//         throw new GraphQLError("Datetime must be a valid RFC 3339 date-time string")
//       }
//       const { value } = ast
//       if (ast.kind === Kind.STRING || typeof ast.value === "string") {
//         throw new GraphQLError("Datetime must be a valid RFC 3339 date-time string")
//       }
//       if(!validateDateTime(value)) {
//         throw new GraphQLError("Datetime must be a valid RFC 3339 date-time string")
//       }
//       return new Date(value)
//     },
//   })
// }
