import React from "react";
import SearchFormView from "../views/searchFormView.js";
import SearchResultsView from "../views/searchResultsView"
import resolvePromise1 from "../resolvePromise.js";
import { searchDishes } from "../dishSource.js";
import promiseNoData from "../views/promiseNoData.js"

export default function SearchPresenter(props) {
  // const [searchQuery, setQuery]= React.useState();
  // const [searchType, setSearchType]= React.useState();
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

  function handleInputACB2(string) {
    const obj = {};
    obj.type = string;
    obj.query = searchParams.query;
    setSearchParams(obj);
  }

  function handleInputACB3() {
    resolvePromise1(searchDishes(searchParams), promiseState, notifyACB);
  }

  function handleInputACB4(dish) {
    props.model.setCurrentDish(dish.id)
  }

  function userTypedACB(string) {
    props.model.setSearchQuery(string);
  }

  function userChoseACB(string) {
    props.model.setSearchType(string);
  }

  function userSearchedACB() {
    props.model.doSearch(props.model.searchParams);
  }

  function userChoseDishACB(dish){props.model.setCurrentDish(dish.id)}
return (
    <div>
      <SearchFormView
        dishTypeOptions={["starter", "main course", "dessert"]}
        onUserTyped={handleInputACB1}
        onUserChose={handleInputACB2}
        onUserSearched={handleInputACB3}
      />
      {promiseNoData(promiseState) || 
        <SearchResultsView
          searchResults={promiseState.data}
          onUserChoseDish={handleInputACB4}
        />
      }
    </div>
  );
}