import SidebarView from "../views/sidebarView";

export default
function Sidebar(props){

    function removeDishACB(dishToRemove){props.model.removeFromMenu(dishToRemove)}

    function clickOnDishNameACB(dishToSet){props.model.setCurrentDish(dishToSet)}
    
    function updateNumberACB(number){ props.model.setNumberOfGuests(number) }
    
    return <SidebarView number={props.model.numberOfGuests} 
                        dishes={props.model.dishes}  
                        onNumberChange={updateNumberACB}  
                        removeDish={removeDishACB} 
                        dishNameClick={clickOnDishNameACB}/>;
}
