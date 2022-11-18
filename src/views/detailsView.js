function DetailsView(props) {
    return (
        <div className="search-dishes">
            <div className="div">
                <div className="detailsView">
                    <img height="100" src={props.dishData.image} className="image detailsimg"></img>
                    <div className="txt1"><b>Price {(props.dishData["pricePerServing"]).toFixed(2)} <br />
                        For {props.guests} guests: {(props.dishData["pricePerServing"] * props.guests).toFixed(2)} </b></div>
                </div>
                {renderIngredients(props.dishData.extendedIngredients, props.guests)}

                <div className="instr">{props.dishData.instructions}</div>

                <a id="linkToInfo" href={props.dishData.sourceUrl}>More information</a>
            </div>
            <div>
                <button className="detailsButtons" onClick={addToMenuACB} disabled={props.isDishInMenu}>Add to menu!</button>
                <button className="detailsButtons" onClick={cancelIsClickedACB} disabled={!props.isDishInMenu}>Cancel</button>
            </div>
        </div>

    );

    function cancelIsClickedACB(e) {
        window.location.hash= "#search";
    }

    function addToMenuACB() {
        props.onAddToMenu();
        window.location.hash= "#search";
    }

    // function cancelAddingACB(){
    //     props.onCancel();
    // }

    function renderIngredients(ingredientArray) {
        function ingredientTableRowCB(ingr) {
            return <tr key={ingr.id}><td>{ingr.name}:</td> <td className="rightFix">{(ingr.amount).toFixed(2)}
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

export default DetailsView;
