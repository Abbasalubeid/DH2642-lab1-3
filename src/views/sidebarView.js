import { dishType } from "../utilities.js"
import { sortDishes } from "../utilities.js"
import { menuPrice } from "../utilities.js"

function SidebarView(props) {

  // Custom event

  return (
    <div>
      <div className="sidebar-firtdiv">
        <button disabled={props.number === 1}
          onClick={minusButtonIsClickedACB} className="button btn1" title="Click to decrease nr of guest">-</button>
        <p className="number"><b>{props.number}</b></p>
        <button onClick={plusButtonIsClickedACB} className="button btn2" title="Click to increase nr of guest">+</button>
      </div>
      {dishRendering(props.dishes, props.number)}
    </div>
  );

  function plusButtonIsClickedACB() {
    props.onNumberChange(props.number + 1);
  }

  function minusButtonIsClickedACB() {
    props.onNumberChange(props.number - 1);
  }


  function dishRendering(dishArray, people) {

    function dishTableRowCB(dish) {
      return <tr key={dish.id} className="sidebar-trText">
        <td><button onClick={xIsClickedACB} className="btn-style" title="Click to remove">x</button></td>
        <td><a onClick={nameTagIsClickedACB} href="#details" className="link">{dish.title}</a></td>
        <td className="rightFix">{dishType(dish)}</td>
        <td className="rightFix">{(dish.pricePerServing * people).toFixed(2)}</td>
      </tr>;


      function xIsClickedACB() {
        props.removeDish(dish)
      }

      function nameTagIsClickedACB() {
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