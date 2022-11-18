import React from "react";
import { shoppingList } from "../utilities.js";
import SummaryView from "../views/summaryView.js";


export default
    function SummaryPresenter(props) {
    const [number, copyNumber] = React.useState(props.model.numberOfGuests);
    const [ingredients, copyIngredients] = React.useState(props.model.dishes);
    //  copy the value in component state	
    function observerACB() {    // no need for payload
        copyNumber(props.model.numberOfGuests);
        copyIngredients(props.model.dishes);
    }
    function wasCreatedACB() {
        console.log("component created!");                           // 1. the component has been created
        props.model.addObserver(observerACB);
        return function isTakenDownACB() {                                // 2. the component is being taken down 
            props.model.removeObserver(observerACB);
            console.log("component created!");
        };
    }
    React.useEffect(wasCreatedACB, []);
    return <SummaryView people={props.model.numberOfGuests} ingredients={shoppingList(props.model.dishes)} />;
}


