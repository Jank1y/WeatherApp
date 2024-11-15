
let city = document.getElementById("search");
const apiKey = "d5f1e8adefdbb5baf60955e5fd92ca20";

form.addEventListener("search-btn", (e) => {
  e.preventDefault();
  getWeather(city.value);
});