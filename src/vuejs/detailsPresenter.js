import DetailsView from "../views/detailsView.js";
import promiseNoData from "../views/promiseNoData.js";
import searchResults from "../views/searchResultsView.js";



function AsyncDetailsPresenter(props) {
    function doSearchACB(dish) {
        resolvePromise(props.model.searchDishes(dish), props.model.currentDishPromiseState);
    }
    function isDishInMenuACB(dish) {
        
    }
    function addDishToMenuACB(dishToAdd){
        props.model.addToMenu(dishToAdd)
    }
    return <DetailsView onSearch={doSearchACB} addDish = {addDishToMenuACB} 
     searchResults = {props.model.currentDishPromiseState.data}/>
}

// function DetailsView(props) {
//     function handleInputACB(event) {
//         props.onSearch(event.target.value);
//     }
//     return <div > < input onChange={handleInputACB}/> 
//     {props.searchResults}
//     </div >;
// }



export default AsyncDetailsPresenter;