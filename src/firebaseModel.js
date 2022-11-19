// Add relevant imports here 
import firebaseConfig from "/src/firebaseConfig.js";


// Initialise firebase
firebase.initializeApp(firebaseConfig); 
const REF="dinnerModel40";
// firebase.database().ref(REF+"/test").set("dummy");
// firebase.database().ref(REF+"/test").set(null);

function observerRecap(model) {

    function logPayloadsObserverACB(payload){
        console.log(payload);
    }

    model.addObserver(logPayloadsObserverACB);
}

function firebaseModelPromise() {
    function makeBigPromiseACB(firebaseData) {
        //TODO
    }
    return;
}

function updateFirebaseFromModel(model) {
    //TODO
    function persistenceObserverACB(payload){
        if (payload){
        
            if (payload.hasOwnProperty('newNumberOfGuests'))
                firebase.database().ref(REF+"/guests").set(model.numberOfGuests);
                
            if (payload.hasOwnProperty('newCurrentDishID'))
                firebase.database().ref(REF+"/currentDish").set(payload.newCurrentDishID);

            if(payload.hasOwnProperty('addedDish'))
            firebase.database().ref(REF+"/dishes/"+payload.addedDish.id).set(payload.addedDish.title);
            
            if(payload.hasOwnProperty('removedDish'))
                firebase.database().ref(REF+"/dishes/"+payload.removedDish.id).set(null);
        }
    }

    model.addObserver(persistenceObserverACB);
}

function updateModelFromFirebase(model) {
    //TODO
    firebase.database().ref(REF+"/guests").on("value", 
   function guestsChangedInFirebaseACB(firebaseData){ model.setNumberOfGuests(firebaseData.val());}
);


}

// Remember to uncomment the following line:
export {observerRecap, firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase};