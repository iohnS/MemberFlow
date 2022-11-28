import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.newUser = functions.firestore
  .document("/members/{uid}/")
  .onCreate((change, context) => {
    functions.logger.info("Data", change.data());
    console.log("UID", context.auth?.uid);
    console.log("Event type", context.eventType);
    console.log("Context param uid", context.params.uid);
  });
