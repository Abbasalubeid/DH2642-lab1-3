import { dishType } from "../utilities.js"
import { sortDishes } from "../utilities.js"
import { menuPrice } from "../utilities.js"

function SidebarView(props){

    // Custom event

    return (
            <div>
                <button disabled={ props.number === 1}
                        onClick={minusButtonIsClickedACB}>-</button>
                { props.number}        
                <button onClick={plusButtonIsClickedACB}>+</button>
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
            return <tr key={dish.id}>
                        <td><button onClick={xIsClickedACB}>x</button></td> 
                        <td><a onClick={nameTagIsClickedACB} href="#">{dish.title}</a></td> 
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
        
        return <table>
            <tbody>
    
                { sortDishes(dishArray).map(dishTableRowCB)}
                
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