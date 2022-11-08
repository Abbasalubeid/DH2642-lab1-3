function SearchResultsView (props){
    return (
        <div>
            <span class="searchResult"> 
                <img src="cat.jpeg"></img>
                <div></div>
            </span>
        </div>

    );

   function printCB(dish){
        return <div>{dish}</div>
    }
 

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

export default SearchResultsView;