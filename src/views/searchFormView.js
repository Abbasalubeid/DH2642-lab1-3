function SearchFormView (props){
    return (
        <div class="searchForm">
            <input  onInput={eventPrinterACB} placeholder="Search anything..." type="search" class="searchInput" title="Search any dish">
                </input>
            <select onInput={eventPrinterACB} class="searchSelector" type="select">
                <option>Choose:</option>
                {props.dishTypeOptions.map(onSelectCB)}
            </select>
            <button onClick={searchIsClickedACB} class="searchButton"><b>Search!</b></button>
        </div>
    );

    function searchIsClickedACB(e){
        console.log(e.target.value)
    }

    function eventPrinterACB(e){
        console.log(e.target.value)
    }

        function onSelectCB(String){
            return <option>{String}</option>
        }

}

export default SearchFormView;