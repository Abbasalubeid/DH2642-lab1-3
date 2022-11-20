import React from "react";
import SidebarView from "../views/sidebarView";


export default
    function SidebarPresenter(props) {
    const [number, copyNumber] = React.useState(props.model.numberOfGuests);
    const [dishes, copyDishes] = React.useState(props.model.dishes);

    //  copy the value in component state	
    function observerACB() {    
        copyNumber(props.model.numberOfGuests);    
        copyDishes(props.model.dishes); // when notified, update state with current value
    }

    function wasCreatedACB() {
        console.log("component created!");                           // 1. the component has been created
        props.model.addObserver(observerACB);
        return function isTakenDownACB() {                                // 2. the component is being taken down 
            props.model.removeObserver(observerACB);
        };
    }
    React.useEffect(wasCreatedACB, []);

    function removeDishACB(dishToRemove) { props.model.removeFromMenu(dishToRemove) }

    function clickOnDishNameACB(dishToSet) { props.model.setCurrentDish(dishToSet.id) }

    function updateNumberACB(number) { props.model.setNumberOfGuests(number) }

    return <SidebarView number={props.model.numberOfGuests}
        dishes={props.model.dishes}
        onNumberChange={updateNumberACB}
        removeDish={removeDishACB}
        dishNameClick={clickOnDishNameACB} />;
}
