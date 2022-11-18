import React from "react";
import SidebarView from "../views/sidebarView";


export default
    function SidebarPresenter(props) {
    // const [number, copyNumber]=React.useState(props.model.numberOfGuests);
    // const [dishes, copyDishes]=React.useState(props.model.currentDish);

    // // much more can be copied, e.g. props.model.somePromiseState.data
    //  //  copy the value in component state	
    // function observerACB(){    // no need for payload
    //     copyNumber(props.model.numberOfGuests);    // when notified, update state with current value
    //     copyDishes(props.model.currentDish); // when notified, update state with current value
    // }

    const [, reRender] = React.useState(props.model.numberOfGuests);

    function observerACB(payload) {    // no need for payload
        if (payload && payload.setNrGuests)
            // assuming that setNrGuests is the payload sent by setNumberOfGuests
            reRender(new Object());
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

    // function handleEventACB(e){props.model.setNumberOfGuests(x);}  
    function removeDishACB(dishToRemove) { props.model.removeFromMenu(dishToRemove) }

    function clickOnDishNameACB(dishToSet) { props.model.setCurrentDish(dishToSet) }

    function updateNumberACB(number) { props.model.setNumberOfGuests(number) }

    return <SidebarView number={props.model.numberOfGuests}
        dishes={props.model.dishes}
        onNumberChange={updateNumberACB}
        removeDish={removeDishACB}
        dishNameClick={clickOnDishNameACB} />;
}
