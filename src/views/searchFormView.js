function SearchFormView (props){
    return (
        <div>
            <input  onChange={userTypedACB} placeholder="Search..." type="search"></input>
            <select onChange={usesChoseACB}>
                <option value= "">Choose:</option>
                {props.dishTypeOptions.map(onSelectCB)}
            </select>
            <button onClick={userSearchedACB}>Search!</button>
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