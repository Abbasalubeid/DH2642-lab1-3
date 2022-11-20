// Add relevant imports here 
import React from "react";
import app from "../views/app.js"
import {observerRecap, firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase} from "../firebaseModel.js"
import resolvePromise1 from "../resolvePromise.js";
import promiseNoData from "../views/promiseNoData.js"

// Define the ReactRoot component
export default function ReactRoot(){

const [promiseState] = React.useState({});
const [, reRender] = React.useState();

function notifyACB() {
    const newProm = {};
    reRender(newProm);
  }

function wasCreatedACB() {
    resolvePromise1(firebaseModelPromise(), promiseState, notifyACB); 
    promiseState.data.addObserver(notifyACB);                   
    return function isTakenDownACB() {                              
        props.model.removeObserver(observerACB);
        
    };
}

React.useEffect(wasCreatedACB, []);

return (<div>
        {promiseNoData(promiseState) || <app model={promiseState.data}/>};

</div>);

}

