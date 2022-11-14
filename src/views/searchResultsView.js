function SearchResultsView (props){
    return (
        <div class="searchResult">
            {
                props.searchResults.map(picturingCB)
<<<<<<< HEAD
                
=======
>>>>>>> abbas
            }
        </div>

    );

    function picturingCB(dish){
        return  <span onClick={eventPrinterACB} key={dish.id}>
                    <img height="100" src={"https://spoonacular.com/recipeImages/" + dish.image} class="image"></img>
                    <div>{dish.title}</div>
                </span>;

    function eventPrinterACB(){
        props.onUserChoseDish(dish)
    }

}

}

export default SearchResultsView;