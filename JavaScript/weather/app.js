import { insertData,map} from "./module/insertData.js"

// import { deleteData } from "./module/deleteData.js"

let location_formContainer = document.getElementById("location_form");
let location_tableContainer = document.getElementById("location_table");
let popupcontainer = document.getElementById("popup");
let popupbg=document.getElementById("popupbg");
// let close=document.getElementById("closeIcon");


const loader = (isLoading) => {
    let loaderData = document.getElementById("loader");
    if (isLoading) {
      loaderData.style.display = "block";
    } else {
      loaderData.style.display = "none";
    }
  };





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
        popupcontainer.innerHTML = html
    })
fetch('./components/popupbg.html').then((response) => response.text())
    .then((html) => {
        popupbg.innerHTML = html
    })
fetch('./components/loader.html').then((response) => response.text())
    .then((html) => {
        loader.innerHTML = html
    })


    
    
    document.getElementById("my_form")
    document.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("yessssssssssss")
        let place = document.getElementById("get_location").value;
        if(map.includes(place)){
            alert(`Already Exist`)
        }
        else{
            map.push(place)
        try {
           
            
            const API_KEY = `c7a9299a3d8da1d910da08bcffb48a3b`

            let url = `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}`

            loader(true)
            console.log("yes")
            fetch(url).then(response => response.json()).then(response => {
                loader(false)

                 if(response.cod == 200){
                    let temperature = response.main.temp - 273.15

                    let humidity = response.main.humidity

                     let locName = response.name
                    

                  insertData(temperature,humidity,locName)

                }
                else{
                   alert(`API Error: ${error.message}`)
                }

            }).catch(error => {
                loader(false)
                alert(`API Error: ${error.message}`)
            });
          

          } catch (error) {
            alert(`getWeatherDetails Error: ${error.message}`)
          }
        console.log("place", place)
        // insertData(place);
        console.log("success")
        document.getElementById("my_form").reset();
      }});

    
// document.addEventListener("click", myFunction);

// function myFunction() {
//   popup.style.display="none";
// }


      

      
      
           
      


