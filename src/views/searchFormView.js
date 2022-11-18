function SearchFormView (props){
    return (
        <div className="searchForm">
            <input  onChange={userTypedACB} placeholder="What do you want for food" type="search" className="searchInput" title="Search any dish">
                </input>
            <select onChange={usesChoseACB} className="searchSelector" >
                <option value= "">Choose:</option>
                {props.dishTypeOptions.map(onSelectCB)}
            </select>
            <button onClick={userSearchedACB} className="searchButton">Search!</button>
            <button onClick={goToSummaryACB} className="searchButton">Summary</button>
        </div>
    );

    function userTypedACB(e){
        props.onUserTyped(e.target.value)
    }

    function usesChoseACB(e){
        props.onUserChose(e.target.value)
    }
    function userSearchedACB(){
        props.onUserSearched()
    }

    function onSelectCB(string){
        return <option key={string}>{string}</option>
    }

    function goToSummaryACB(){
        window.location.hash= "#summary";
    }

}

export default SearchFormView;