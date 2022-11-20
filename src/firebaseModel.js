// Add relevant imports here 
import firebaseConfig from "/src/firebaseConfig.js";
import {getDishDetails} from "./dishSource.js"
import DinnerModel from "./DinnerModel";


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
    
    function allInOnePromiseACB(firebaseData) {        
           
        function makeAllPromisesCB(dishId){ return getDishDetails(dishId); }

        const dishArray = firebaseData.val()?.dishes ?? [];
        const guests = firebaseData.val()?.guests ?? 2;

        const arrayWithPromises = Object.keys(dishArray).map(makeAllPromisesCB);

        function newModelACB(dishes){ return new DinnerModel(guests, dishes);}
        
        return Promise.all(arrayWithPromises).then(newModelACB);
        
    }
    
        return firebase.database().ref(REF).once("value").then(allInOnePromiseACB);
}

function updateFirebaseFromModel(model) {
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

    firebase.database().ref(REF+"/guests").on("value", 
   function guestsChangedInFirebaseACB(firebaseData){ model.setNumberOfGuests(firebaseData.val());});

   firebase.database().ref(REF+"/currentDish").on("value", 
   function guestsChangedInFirebaseACB(firebaseData){ model.setCurrentDish(firebaseData.val());});
   
   firebase.database().ref(REF+"/dishes/").on("child_added",
   function dishAddedInFirebaseACB(firebaseData){
    function hasNotSameIDCB(dish){
        if (dish.id === +firebaseData.key)
            return true;
        else
        return false;    
    }
    if(!model.dishes.filter(hasNotSameIDCB).length > 0)
    getDishDetails(+firebaseData.key).then(function addFetchedDish(dish){model.addToMenu(dish)})});
   
   firebase.database().ref(REF+"/dishes/").on("child_removed",
   function dishRemovedInFirebaseACB(firebaseData){
    const dishToRemove = {id : +firebaseData.key }
    model.removeFromMenu(dishToRemove);
   });
}

export {observerRecap, firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase};