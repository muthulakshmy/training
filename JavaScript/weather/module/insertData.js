let si_no = 1;
export var map=[];

export function insertData(temperature, humidity, locName) {
  let table = document.getElementById("table");
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  cell1.innerHTML = si_no;
  si_no++;
  let cell2 = row.insertCell(1);
  cell2.innerHTML = locName;
  let cell3 = row.insertCell(2);
  cell3.innerHTML = `<input type="button" value="Show">`;
  // console.log(place);
  console.log("muthu");
  cell3.addEventListener("click", function () {
    console.log("sujiii");
    showPopup(temperature, humidity, locName);
  });

  let cell4 = row.insertCell(3);
  cell4.innerHTML = `<input type="button" value="Delete">`;
  cell4.addEventListener("click", function () {
    row.remove(cell2);
    console.log(cell2)
    let index = map.indexOf(cell2);
    console.log(index)
    map.splice(index,0);
    console.log(map)
    updateSerialNumbers();
  });
}
function updateSerialNumbers() {
  let table = document.getElementById("table");
  let rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    let row = rows[i];
    let serialCell = row.cells[0];
    serialCell.innerHTML = i;
  }

  si_no = rows.length;
}
const showPopup = (temp, hum, ln) => {
  console.log("temp");
  let locationName = document.getElementById("location");
  let temperature = document.getElementById("temperature");
  let humidity = document.getElementById("humidity");

  locationName.innerHTML = ln;
  temperature.innerHTML = `Temperature: ${temp.toFixed(2)}°C`;
  humidity.innerHTML = `Humidity: ${hum}%`;
  console.log(temperature);
  openPopup();
};
export var openPopup = () => {
  let popup = document.getElementById("pop_up");
  let popupbg = document.getElementById("popup_bg");
  popup.style.display = "block";
  popupbg.style.display = "block";
};

export var closePopup = () => {
  let popup = document.getElementById("pop_up");
  let popupbg = document.getElementById("popup_bg");

  popup.style.display = "none";
  popupbg.style.display = "none";
};
//  var loader = (isLoading) => {
//   if(isLoading) {
//       loaderData.style.display = "block";
//   }else{
//       loaderData.style.display = "none";
//   }

// }

