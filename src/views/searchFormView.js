function SearchFormView (props){
    return (
        <div class="searchForm">
            <input  onInput={userTypedACB} placeholder="What do you for food" type="search" class="searchInput" title="Search any dish">
                </input>
            <select onInput={usesChoseACB} class="searchSelector" type="select">
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