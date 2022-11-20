import DetailsView from "../views/detailsView.js";
import promiseNoData from "../views/promiseNoData.js";

export default
function DetailsPresenter(props){

    function userAddedToMenu(){ props.model.addToMenu(props.model.currentDishPromiseState.data)}

return promiseNoData(props.model.currentDishPromiseState) || <DetailsView dishData={props.model.currentDishPromiseState.data}
                    isDishInMenu={props.model.dishes.find(findDishIdCB)}
                    guests={props.model.numberOfGuests}
                    onAddToMenu={userAddedToMenu}/>;
        
        function findDishIdCB(dish){
            return dish.id === props.model.currentDish;
        }
}
