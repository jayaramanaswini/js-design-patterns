import {Observable} from "./Observable.js";

const observable = new Observable();

function logger(data) {
    console.log("logging at ", new Date(), ": ", data);
}

observable.subscribe(logger);

document.getElementById("special-btn").addEventListener("click", () => {
    observable.notify("button is clicked");
});
