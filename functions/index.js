const functions = require("firebase-functions");
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.checkMemberStatus = functions.region("europe-central2").firestore.document("/members/{uid}/payments/{pid}").onCreate((snap, context) => {
  
  const uid = context.params.uid;
  const data = snap.data();

  const {created, status, amount } = data
  if(status === "succeeded"){
    let period = 0;
    if(amount === 5000){
      period = 6;
    }else if (amount === 7000){
      period = 12;
    }
    const subscriptionDate = new Date((created + (period * 2628000))*1000).toISOString().split("T")[0] // period is the amount of months for the subscription and 2628000 is how many seconds there are in a month.
    const creationDate = new Date(created * 1000).toISOString().split("T")[0]

    db.doc("members/" + uid).update({
      period: period,
      status: "active",
      membershipStart: creationDate,
      membershipEnd: subscriptionDate
    })

    console.log("UID", uid)
    console.log("period", period)
    console.log("membershipEnd", subscriptionDate)
    console.log("memebrshipstart", creationDate)

  }
})