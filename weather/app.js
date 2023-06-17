import { insertData} from "./module/insertData.js"
// import { deleteData } from "./module/deleteData.js"

let location_formContainer = document.getElementById("location_form");
let location_tableContainer = document.getElementById("location_table");
// let popup = document.getElementById("popup");




fetch('./components/location_form.html').then((response) => response.text())
    .then((html) => {
        location_formContainer.innerHTML = html
    })
fetch('./components/location_table.html').then((response) => response.text())
    .then((html) => {
        location_tableContainer.innerHTML = html
    })
fetch('./components/popup.html').then((response) => response.text())
    .then((html) => {
        popup.innerHTML = html
    })


    // let selectedRow = null;
    
    document.getElementById("my_form")
    document.addEventListener("submit", function (event) {
        event.preventDefault();
        let place = document.getElementById("get_location").value;
        console.log("place", place)
        insertData(place);
        console.log("success")
        document.getElementById("my_form").reset();
      });

      
      
           
      


