import React from "react";
import SearchFormView from "../views/searchFormView.js"

export default
function SearchPresenter(props){

    const [searchQuery, setQuery]= React.useState(); 
    const [searchType, setSearchType]= React.useState();
    const [searchParams, setSearchParams] = React.useState({});
    

    // if(!props.model.searchResultsPromiseState.promise){
    //     props.model.doSearch(props.model.searchParams); 
    // }

    function handleInputACB1(string){ searchParams.query = string; }

    function handleInputACB2(string){ searchParams.type = string;  }

    function handleInputACB3(){

        props.model.doSearch(searchParams)
}


function userTypedACB(string){props.model.setSearchQuery(string)} 

function userChoseACB(string){props.model.setSearchType(string)} 

function userSearchedACB(){props.model.doSearch(props.model.searchParams)} 

return <div>
        <SearchFormView   dishTypeOptions={['starter', 'main course', 'dessert']}
                          onUserTyped={handleInputACB1}
                          onUserChose={handleInputACB2} 
                          onUserSearched={handleInputACB3}    />
                          </div>;

}