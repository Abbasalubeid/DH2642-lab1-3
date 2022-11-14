
function searchDishes (props){
    return (
        <div class="search-dishes">
            <div class="div">
                <div class="detailsView">
                    <img height="100" src={props.dishData.image} class="image detailsimg"></img>
                    <div class="txt1"><b>Price {(props.dishData["pricePerServing"]).toFixed(2)} <br/>
                    For {props.guests} guests: {(props.dishData["pricePerServing"] * props.guests).toFixed(2)} </b></div>
                </div>
                {renderIngredients(props.dishData.extendedIngredients, props.guests)}
                
                <div class="instr">{props.dishData.instructions}</div>

            <a href={props.dishData.sourceUrl}>More information</a>
        </div>
        <div>
            <button onClick={addDishACB} disabled={props.isDishInMenu}>Add to menu!</button>
            <button onClick={eventPrinterACB} disabled={!props.isDishInMenu}>Cancel</button>
        </div>
        </div>

    );

    function eventPrinterACB(e){
        console.log(e.target.value)
    }
    function addDishACB(){
        props.addDish(dish)
      }

    function renderIngredients(ingredientArray, people){
        function ingredientTableRowCB(ingr){
            return <tr key={ingr.id}><td>{ingr.name}:</td> <td class="rightFix">{(ingr.amount).toFixed(2)} 
            </td><td>{ingr.unit} </td></tr>;
        }
        
        
        return <table border="1px solid black" margin="100">
            <thead>
            <th>Ingredients</th>
            </thead>
            <tbody>
    
               {  
                
               ingredientArray.map(ingredientTableRowCB)
    
              }
    
            </tbody>
            </table>;
    }


}

export default searchDishes;

