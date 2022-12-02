const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");'
// });


/**
 * exports.newUser = functions.firestore
  .document("/members/{uid}/")
  .onCreate((change, context) => {
    functions.logger.info("Data", change.data());
    console.log("UID", context.auth?.uid);
    console.log("Event type", context.eventType);
    console.log("Context param uid", context.params.uid);
  });
 */

exports.randomNumber = functions.region("europe-central2").https.onRequest((request, response) => {
    const number = Math.round(Math.random() * 100)
    response.send(number.toString())
})
