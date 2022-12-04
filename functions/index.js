const functions = require("firebase-functions");
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

exports.newMemberStatus = functions.region("europe-central2").firestore.document("/members/{uid}/payments/{pid}").onCreate((snap, context) => {
  const uid = context.params.uid;
  const data = snap.data()
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

    db.doc("/members/" + uid).update({
      period: period,
      status: "active",
      membershipStart: creationDate,
      membershipEnd: subscriptionDate
    })
  }
})

exports.welcomeEmail = functions.region("europe-central2").firestore.document("/members/{uid}").onUpdate((change, context) => {
  const uid = context.params.uid;
  const newData = change.after.data();
  const oldData = change.before.data();

  const {firstName, lastName, membershipEnd} = newData;
  const name = firstName + " " + lastName;
  
  if(newData.membershipEnd != oldData.membershipEnd){
    db.collection("/mail/").add({
      toUids : [uid],
      template: {
        name : "welcome",
        data : {
          name: name
        }
      }
    })
  }



})