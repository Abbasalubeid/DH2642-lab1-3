function DetailsView (props){
    return (
        <div>
            <img height="100" src={props.dishData.image}></img>
            <div>Price {(props.dishData["pricePerServing"]).toFixed(2)}</div>
            <div>For {props.guests} guests: {(props.dishData["pricePerServing"] * props.guests).toFixed(2)}</div>
            <button onClick={addToMenuACB} disabled={props.isDishInMenu}>Add to menu!</button>
            <button onClick={eventPrinterACB} disabled={!props.isDishInMenu}>Cancel</button>
            
            
            
            {
                renderIngredients(props.dishData.extendedIngredients)
            }
            <div>{props.dishData.instructions}</div>

        <a href={props.dishData.sourceUrl}>More information</a>
        </div>

    );

    function eventPrinterACB(e){
        console.log(e.target.value)
    }

    function addToMenuACB(){
        props.onAddToMenu();
    }

    // function cancelAddingACB(){
    //     props.onCancel();
    // }

    function renderIngredients(ingredientArray){
        function ingredientTableRowCB(ingr){
            return <tr key={ingr.id}><td>{ingr.name}:</td> <td class="rightFix">{(ingr.amount).toFixed(2)} 
            </td><td>{ingr.unit} </td></tr>;
        }
        
        
        return <table>
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

export default DetailsView;