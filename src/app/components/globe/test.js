
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}   

let text = '{"Circuits":[{"circuitId":"adelaide","url":"http:\/\/en.wikipedia.org\/wiki\/Adelaide_Street_Circuit","circuitName":"Adelaide Street Circuit","Location":{"lat":"-34.9272","long":"138.617","locality":"Adelaide","country":"Australia"}},{"circuitId":"ain-diab","url":"http:\/\/en.wikipedia.org\/wiki\/Ain-Diab_Circuit","circuitName":"Ain Diab","Location":{"lat":"33.5786","long":"-7.6875","locality":"Casablanca","country":"Morocco"}},{"circuitId":"aintree","url":"http:\/\/en.wikipedia.org\/wiki\/Aintree_Motor_Racing_Circuit","circuitName":"Aintree","Location":{"lat":"53.4769","long":"-2.94056","locality":"Liverpool","country":"UK"}},{"circuitId":"albert_park","url":"http:\/\/en.wikipedia.org\/wiki\/Melbourne_Grand_Prix_Circuit","circuitName":"Albert Park Grand Prix Circuit","Location":{"lat":"-37.8497","long":"144.968","locality":"Melbourne","country":"Australia"}},{"circuitId":"americas","url":"http:\/\/en.wikipedia.org\/wiki\/Circuit_of_the_Americas","circuitName":"Circuit of the Americas","Location":{"lat":"30.1328","long":"-97.6411","locality":"Austin","country":"USA"}}]}';
const obj = JSON.parse(text);
console.log(obj.Circuits);

let map = obj.Circuits;
const map1 = map.map(x => ({
  lat: x.Location.lat,
  lng: x.Location.long,
  name: x.circuitName,
  size: Math.random() / 3,
  color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
}));

//console.log(gData);



function test(point){
  console.log(point);
  console.log("lool");
}


function test2(){
    Globe()
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
  .pointsData(map1)
  .pointAltitude('size')
  .onPointClick(test)
  .pointColor('color')
(document.getElementById('globeViz'))
  }

//docReady(test2);