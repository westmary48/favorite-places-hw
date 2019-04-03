// xhr XmlHttpREQUEST
let places = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (arrayToPrint) => {
    let domString = '';
    arrayToPrint.forEach((place) => {
        domString += `<div class = place-card">`
        domString += `<h3>${place.id}</h3>`
        domString += `<h4>${place.cityName}</h4>`
        domString += `<h4>${place.cityState}</h4>`
        domString += `<img class= "city-img" src= ${place.cityImage}>`
        domString += `<h4>${place.favoriteRestaurant}</h4>`
        domString += `<h4>${place.favoriteBar}</h4>`
        domString += `<h4>${place.favoriteHotel}</h4>`
        domString += `<h4>${place.favoriteTouristAttraction}</h4>`
        domString += `</div>`
    })

    printToDom('places-container', domString);
}

//call back function
function executeThisCodeAfterFileLoads(){
  const data = JSON.parse(this.responseText);
  places = data.places;
  domStringBuilder(data.places);

}
//call back function
function executeThisCodeIfXHRFails() {
    console.error('oh shit');
}

const getCitiesData = () => {
    // constructor XMLHttpRequest();
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
  // My request is a copy of XMLHttpRequest();
  myRequest.addEventListener('error', executeThisCodeIfXHRFails);
  myRequest.open('GET', './db/places.json');
  myRequest.send();
    console.log(myRequest);

}

// constructor - predetermined object that you can modify later


const init = () => {
    getCitiesData();
}

init();