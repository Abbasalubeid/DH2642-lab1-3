import React from "react";
import DetailsView from "../views/detailsView.js";
import promiseNoData from "../views/promiseNoData.js";

export default
function DetailsPresenter(props){
        const [number, copyNumber] = React.useState(props.model.numberOfGuests);
        const [promise, copyPromiseStatePromise] = React.useState(props.model.currentDishPromiseState.promise);
        const [data, copyPromiseStateData] = React.useState(props.model.currentDishPromiseState.data);
        const [error, copyPromiseStateError] = React.useState(props.model.currentDishPromiseState.error);
        
        //  copy the value in component state	
        function observerACB() {    // no need for payload
            copyNumber(props.model.numberOfGuests);
            copyPromiseStatePromise(props.model.currentDishPromiseState.promise);
            copyPromiseStateData(props.model.currentDishPromiseState.data);
            copyPromiseStateError(props.model.currentDishPromiseState.error);
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

        function userAddedToMenu(){ props.model.addToMenu(props.model.currentDishPromiseState.data)}

        return promiseNoData(props.model.currentDishPromiseState) || <DetailsView dishData={props.model.currentDishPromiseState.data}
        isDishInMenu={props.model.dishes.find(findDishIdCB)}
        guests={props.model.numberOfGuests}
        onAddToMenu={userAddedToMenu}/>;

            function findDishIdCB(dish){
                     return dish.id === props.model.currentDish;
            }
}