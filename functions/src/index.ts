import * as functions from 'firebase-functions';
import { getSdk } from './generated/graphql';
import { GraphQLClient } from 'graphql-request';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest(async (req, res) => {
 const client = new GraphQLClient('https://countries.trevorblades.com');
 const sdk = getSdk(client);
 const result = await sdk.getCountries();

 const foo = sdk.getCountries()
 
 console.log('FOO');
 console.log(result);
 

 res.send("Hello from Firebase!");
});
