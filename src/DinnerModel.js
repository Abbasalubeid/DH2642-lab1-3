/* This is an example of a JavaScript class.
   The Model keeps only abstract data and has no notions of graohics or interaction
*/
import { searchDishes, getDishDetails } from "./dishSource.js";
import resolvePromise1 from "./resolvePromise.js";
class DinnerModel {
  constructor(nrGuests = 2, dishArray = [], currentDish) {
    this.observers = [];
    this.setNumberOfGuests(nrGuests);
    this.dishes = dishArray;
    this.searchResultsPromiseState = {};
    this.searchParams = {};
    this.currentDishPromiseState = {};
  }

  addObserver(callback) {
    this.observers = [...this.observers, callback];
  }

  removeObserver(callback) {
    function isSameCallbackCB(cb) {
      if (cb === callback) return false;
      else return true;
    }

    this.observers = this.observers.filter(isSameCallbackCB);
  }

  notifyObservers(payload) {
    function invokeObserverCB(obs) {
      obs(payload);
    }
    try {
      this.observers.forEach(invokeObserverCB);
    } catch (error) {
      console.error(error);
    }
  }

  setSearchQuery(q) {
    this.searchParams.query = q;
  }

  setSearchType(t) {
    this.searchParams.type = t;
  }

  doSearch(searchParams) {
    resolvePromise1(
      searchDishes(searchParams),
      this.searchResultsPromiseState,
      this.notifyObservers.bind(this)
    );
  }

  setCurrentDish(id) {
    if (id && id !== this.currentDish) {
      this.currentDish = id;
      resolvePromise1(
        getDishDetails(id),
        this.currentDishPromiseState,
        this.notifyObservers.bind(this)
      );
      const payload = { newCurrentDishID: id };
      this.notifyObservers(payload);
    }
  }

  setNumberOfGuests(nr) {
    // if() and throw exercise
    if (!Number.isInteger(nr) || nr < 1)
      throw "number of guests not a positive integer";
    else if (nr !== this.numberOfGuests) {
      this.numberOfGuests = nr;
      const payload = { newNumberOfGuests: nr };
      this.notifyObservers(payload);
    }

    // TODO throw an error if the argument is smaller than 1 or not an integer
    // the error message must be exactly "number of guests not a positive integer"
    // to check for integer: test at the console Number.isInteger(3.14)

    // TODO if the argument is a valid number of guests, store it in this.numberOfGuests

    // when this is done the TW1.1 DinnerModel "can set the number of guests" should pass
    // also "number of guests is a positive integer"
  }
  addToMenu(dishToAdd) {

    function hasNotSameIDCB(dish){
        if (dish.id === dishToAdd.id)
            return true;
        else
        return false;    
    }
    // array spread syntax example. Make sure you understand the code below.
    // It sets this.dishes to a new array [   ] where we spread (...) the previous value
    if (this.dishes.filter(hasNotSameIDCB).length > 0)
      return;
    else {
      this.dishes = [...this.dishes, dishToAdd];
      const payload = { addedDish: dishToAdd };
      this.notifyObservers(payload);
    }
  }

  removeFromMenu(dishToRemove) {
    // callback exercise! Also return keyword exercise
    function hasSameIdCB(dish) {
      if (dishToRemove.id === dish.id) return false;
      else return true;
      // TODO return true if the id property of dish is _different_ from the dishToRemove's id property
      // This will keep the dish when we filter below.
      // That is, we will not keep the dish that has the same id as dishToRemove (if any)
    }

    function hasNotSameIDCB(dish){
        if (dish.id === dishToRemove.id)
            return true;
        else
        return false;    
    }

    if (this.dishes.filter(hasNotSameIDCB).length > 0){
      this.dishes = this.dishes.filter(hasSameIdCB);
      const payload = { removedDish: dishToRemove };
      this.notifyObservers(payload);
    }

    // the test "can remove dishes" should pass
  }
  /* 
       ID of dish currently checked by the user.
       A strict MVC/MVP Model would not keep such data, 
       but we take a more relaxed, "Application state" approach. 
       So we store also abstract data that will influence the application status.
     */

  // OLD setCurrentDish
  // setCurrentDish(id){
  //     //this.currentDish=TODO
  //     this.currentDish = id;
  // }
}

export default DinnerModel;
