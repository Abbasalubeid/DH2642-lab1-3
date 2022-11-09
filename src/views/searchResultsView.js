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
                    <img height="100" src={"https://spoonacular.com/recipeImages/" + dish.image}></img>
                    <div>{dish.title}</div>
                </span>;

    function eventPrinterACB(e){
        console.log(e.target.value)
    }

}

}

export default SearchResultsView;