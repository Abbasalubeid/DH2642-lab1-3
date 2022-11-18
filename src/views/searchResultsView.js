function SearchResultsView (props){
    return (
        <div className="searchResult">
            {
                props.searchResults.map(picturingCB)
                
            }
        </div>

    );

    function picturingCB(dish){
        return  <span onClick={eventPrinterACB} key={dish.id}>
                    <img height="100" src={"https://spoonacular.com/recipeImages/" + dish.image} className="image"></img>
                    <div>{dish.title}</div>
                </span>;

    function eventPrinterACB(){
        props.onUserChoseDish(dish)
        window.location.hash="#details";
    }

}

}

export default SearchResultsView;