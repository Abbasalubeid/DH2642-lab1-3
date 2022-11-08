function SearchFormView (props){
    return (
        <div>
            <input  onInput={eventPrinterACB} placeholder="Search..." type="search"></input>
            <select onInput={eventPrinterACB}>
                <option>Choose:</option>
                {props.dishTypeOptions.map(onSelectCB)}
            </select>
            <button onClick={searchIsClickedACB}>Search!</button>
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