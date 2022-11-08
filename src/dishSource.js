import dishesConst from "../test/dishesConst";
import {BASE_URL, API_KEY} from "../src/apiConfig.js"

function treatHTTPResponseACB(response) {
    /*TODO throw if the HTTP response is not 200, otherwise return response.json()*/
    if (response.status !== 200)
        throw new Error("HTTP response wrong status: " + response.status);
    else
        return response.json();
}

function getDishDetails(dishesConst) {
    return fetch(BASE_URL + dishesConst.id + dishesConst, { // object literal
            "method": "GET", // HTTP method
            "headers": { // HTTP headers, also object literal
                'X-Mashape-Key': API_KEY,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            } // end of headers object
        } /* end of second fetch parameter, object */ )
        .then(treatHTTPResponseACB);
}

function searchDishes(dishesConst) {
    return fetch(BASE_URL + dishesConst.query + dishesConst.type, { // object literal
            "method": "GET", // HTTP method
            "headers": { // HTTP headers, also object literal
                'X-Mashape-Key': API_KEY,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            } // end of headers object
        } /* end of second fetch parameter, object */ )
        .then(treatHTTPResponseACB);
}

// function searchDishes(dishesConst) {
//     return { query: "pizza", type:"main course"}, {query: "strawberry pie", type:"dessert"}
// }
export {
    getDishDetails,
    searchDishes
}