import { BASE_URL, API_KEY } from "../src/apiConfig";

function treatHTTPResponseACB(response) {
  /*TODO throw if the HTTP response is not 200, otherwise return response.json()*/
    if (response) { return response.json(); }
    else{throw error;}
}

function getDishDetails() {
  return fetch(
    BASE_URL + endpoint + params,
    {
      // object literal
      method: "GET", // HTTP method
      headers: {
        // HTTP headers, also object literal
        "X-Mashape-Key": API_KEY,
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      }, // end of headers object
    } /* end of second fetch parameter, object */
  ).then(treatHTTPResponseACB);
}

function searchDishes() {
  return fetch(
    BASE_URL + endpoint + params,
    {
      // object literal
      method: "GET", // HTTP method
      headers: {
        // HTTP headers, also object literal
        "X-Mashape-Key": API_KEY,
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      }, // end of headers object
    } /* end of second fetch parameter, object */
  ).then(treatHTTPResponseACB);
}

export { getDishDetails, searchDishes };
