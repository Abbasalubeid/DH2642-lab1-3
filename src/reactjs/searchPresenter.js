import React from "react";
import {render} from "react-dom";
import SearchFormView from "../views/searchFormView.js"

export default
function SearchPresenter(props){

    if(!props.model.searchResultsPromiseState.promise){
        props.model.doSearch(props.model.searchParams); 
    }

    const [searchQuery, setQuery]= React.useState(); 
    const [searchType, setSearchType]= React.useState();
    
    // const [searchParam, setSearchParam] = React.useState({query: " " , type : " "});

    

    
    function handleInputACB1(string){ setQuery(string); }

    function handleInputACB2(string){ setSearchType(string); }

    function handleInputACB3(){ 
        props.model.doSearch(searchParam);
}


function userTypedACB(string){props.model.setSearchQuery(string)} 

function userChoseACB(string){props.model.setSearchType(string)} 

function userSearchedACB(){props.model.doSearch(props.model.searchParams)} 

return <div>
        <SearchFormView   dishTypeOptions={["Starter", "Main course", "Dessert"]}
                          onUserTyped={handleInputACB1}
                          onUserChose={handleInputACB2} 
                          onUserSearched={handleInputACB3}    />
                          </div>;

}