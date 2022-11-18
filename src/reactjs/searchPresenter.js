import React from "react";
import SearchFormView from "../views/searchFormView.js";
import SearchResultsView from "../views/searchResultsView"
import resolvePromise1 from "../resolvePromise.js";
import { searchDishes } from "../dishSource.js";
import promiseNoData from "../views/promiseNoData.js"

export default function SearchPresenter(props) {
  const [searchParams, setSearchParams] = React.useState({});
  const [promiseState] = React.useState({});
  const [, reRender] = React.useState();

  if (!promiseState.promise) {
    resolvePromise1(searchDishes(searchParams), promiseState, notifyACB);
  }
  
  function notifyACB() {
    const newProm = {};
    reRender(newProm);
  }

  function handleInputACB1(string) {
    const obj = {};
    obj.query = string;
    obj.type = searchParams.type;
    setSearchParams(obj);
  }

  function handleSelectionACB(string) {
    const obj = {};
    obj.type = string;
    obj.query = searchParams.query;
    setSearchParams(obj);
  }

  function handleSearchButtonACB() {
    resolvePromise1(searchDishes(searchParams), promiseState, notifyACB);
  }

  function UpdateCurrentDishACB(dish) {
    props.model.setCurrentDish(dish.id)
  }

  return (
    <div>
      <SearchFormView
        dishTypeOptions={["starter", "main course", "dessert"]}
        onUserTyped={handleInputACB1}
        onUserChose={handleSelectionACB}
        onUserSearched={handleSearchButtonACB}
      />
      {promiseNoData(promiseState) || 
        <SearchResultsView
          searchResults={promiseState.data}
          onUserChoseDish={UpdateCurrentDishACB}
        />
      }
    </div>
  );
}
