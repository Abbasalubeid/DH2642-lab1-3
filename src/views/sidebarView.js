import { dishType } from "../utilities.js"
import { sortDishes } from "../utilities.js"
import { menuPrice } from "../utilities.js"

function SidebarView(props){

    // Custom event

    return (
            <div>
              <div class="sidebar-firtdiv">
                <button disabled={ props.number === 1}
                        onClick={minusButtonIsClickedACB} class="button btn1" title="Click to decrease nr of guest"><b>-</b></button>
                        <p class="number"><b>{props.number}</b></p>      
                <button onClick={plusButtonIsClickedACB} class="button btn2" title="Click to increase nr of guest"><b>+</b></button>
                </div>
                { dishRendering(props.dishes, props.number)}
            </div>
    );

    function plusButtonIsClickedACB(){
         props.onNumberChange(props.number + 1);
          }
  
      function minusButtonIsClickedACB(){
         props.onNumberChange(props.number - 1);
      }


      function dishRendering(dishArray, people){

        function dishTableRowCB(dish){
            return <tr key={dish.id} class="sidebar-trText">
                        <td><button onClick={xIsClickedACB} class="btn-style" title="Click to remove">x</button></td> 
                        <td><a onClick={nameTagIsClickedACB} href="#" class="link">{dish.title}</a></td> 
                        <td class="rightFix">{dishType(dish)}</td>
                        <td class="rightFix">{(dish.pricePerServing*people).toFixed(2)}</td>
                   </tr>;


      function xIsClickedACB(){
        props.removeDish(dish)
      }
      
      function nameTagIsClickedACB(){
        props.dishNameClick(dish)
      }
        }
        
        return <table border="1px solid black" width="400px" height="300">
            <tbody>
    
                {sortDishes(dishArray).map(dishTableRowCB)}
                
                <tr>
                    <td> </td>
                    <td>Total:</td>
                    <td> </td>
                    <td>{(menuPrice(dishArray) * people).toFixed(2)} </td>
                </tr>
    
            </tbody>
            </table>;
    }
}




export default SidebarView;