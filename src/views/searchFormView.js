function SearchFormView (props){
    return (
        <div class="searchForm">
            <input  onChange={userTypedACB} placeholder="What do you want for food" type="search" class="searchInput" title="Search any dish">
                </input>
            <select onChange={usesChoseACB} class="searchSelector" type="select">
                <option value= "">Choose:</option>
                {props.dishTypeOptions.map(onSelectCB)}
            </select>
            <button onClick={userSearchedACB} class="searchButton"><b>Search!</b></button>
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
        return <option value={string}>{string}</option>
    }

}

export default SearchFormView;