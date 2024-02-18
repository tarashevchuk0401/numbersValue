// // src/app/graphql.module.ts

// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { APOLLO_OPTIONS } from 'apollo-angular';
// import { ApolloClient, ApolloClientOptions, ApolloLink, InMemoryCache, createHttpLink } from '@apollo/client/core';
// import { HttpLink } from 'apollo-angular/http';
// import config from '../../amplifyconfiguration.json'
// import { createAuthLink } from "aws-appsync-auth-link";
// import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";


// const uri = 'http://w5zq67kfefhrfozjziecfqq2qa.appsync-api.eu-central-1.amazonaws.com/graphql'; // <-- add the URL of the GraphQL server here
// export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
//   console.log('URL:' + uri)

  
//   return {
//     link: httpLink.create({ uri  }),
//     cache: new InMemoryCache(),
//   };
// }

// const url = config.aws_appsync_graphqlEndpoint;


// const region = config.aws_appsync_region;

// const auth = {
//   type: config.aws_appsync_authenticationType,
//   apiKey: config.aws_appsync_apiKey,
//   // jwtToken: async () => token, // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
//   // credentials: async () => credentials, // Required when you use IAM-based auth.
// };

// // const httpLink = new HttpLink({ uri: url });

// const link = ApolloLink.from([
//   createAuthLink({ url, region, auth, }),
//   createSubscriptionHandshakeLink({ url, region, auth }, httpLink),
// ]);

// const client = new ApolloClient({
//   link,
//   cache: new InMemoryCache(),
// });




// // import config from "../../amplifyconfiguration.json";
// // // import { ApolloProvider } from "@apollo/react-hooks";
// // // import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
// // import { setContext } from "apollo-link-context";
// // // .....

// // const httpLink = createHttpLink({
// //   uri: config.aws_appsync_graphqlEndpoint
// // });
// // const authLink = setContext((_, { headers }) => {
// //   // get the authentication token from local storage if it exists
// //   const token = sessionStorage.getItem("token");
// //   console.log("Header in AppSync ", token);
// //   // return the headers to the context so httpLink can read them
// //   return {
// //     headers: {
// //       ...headers,
// //       authorization: token ? token : ""
// //     }
// //   };
// // });
// // const client = new ApolloClient({
// //   // uri: config.aws_appsync_graphqlEndpoint,
// //   link: httpLink,
// //   cache: new InMemoryCache(),
// //   headers: {
// //     type: config.aws_appsync_authenticationType,
// //     apiKey: config.aws_appsync_apiKey
// //   }
  
// // });


// @NgModule({
//   exports: [HttpClientModule],
//   imports: [
//     // ApolloModule
//   ],
//   providers: [
//     {
//       provide: APOLLO_OPTIONS,
//       // useFactory: createApollo,
//       deps: [HttpLink],

//       useFactory: () => {
//         return appsyncClient 
//       }
//     },
//   ]
// })
// export class GraphQLModule {}


