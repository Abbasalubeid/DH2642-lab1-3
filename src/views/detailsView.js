function  DetailsView(props){
    return (
            <div>
                {props.dishData.map(dishPricePerdishCB)}
            </div>
    );

    function dishPricePerdishCB(dish){
        return dish(pricePerServing) * dish.guests;
    }
}

export default DetailsView;