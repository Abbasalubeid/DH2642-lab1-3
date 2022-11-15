import SearchFormView from "../views/searchFormView.js";
import SearchResultsView from "../views/searchResultsView.js";
import promiseNoData from "../views/promiseNoData";

export default
function SearchPresenter(props) {

    if(!props.model.searchResultsPromiseState.promise){
        props.model.doSearch(props.model.searchParams); 
    }

function userTypedACB(string){props.model.setSearchQuery(string)} 

function userChoseACB(string){props.model.setSearchType(string)} 

function userSearchedACB(){props.model.doSearch(props.model.searchParams)} 

function userChoseDishACB(dish){props.model.setCurrentDish(dish.id)}

return ( <div>
        <SearchFormView   dishTypeOptions={["starter", "main course", "dessert"]}
                          onUserTyped={userTypedACB}
                          onUserChose={userChoseACB} 
                          onUserSearched={userSearchedACB}    />
        { promiseNoData(props.model.searchResultsPromiseState) || 
 		<SearchResultsView searchResults={props.model.searchResultsPromiseState.data}
                           onUserChoseDish={userChoseDishACB}     />}

    </div>
    
    );

}

