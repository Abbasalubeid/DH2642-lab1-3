function SearchResultsView (props){
    return (
        <div>
            {
             
                props.searchResults.map(picturingCB)

                // console.log(props.searchResults)
            }
        </div>

    );

    function picturingCB(dish){
        return  <span onClick={eventPrinterACB} key={dish.id}>
                    <img height="100" src={dish.image}></img>
                    <div>{dish.title}</div>
                </span>;



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

}

export default SearchResultsView;