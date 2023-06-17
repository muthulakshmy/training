
export function insertData(place) {
  let table = document.getElementById("table");
 
  let popup = document.getElementById("popup");
        let row = table.insertRow(-1);
      
        let cell1 = row.insertCell(0);
        cell1.innerHTML = place;
        let cell2 = row.insertCell(1);
        cell2.innerHTML = `<input type="button" value="Show">`;
        console.log(place);
        cell2.addEventListener("click",function() {
          
          try {
           
            
            const API_KEY = `c7a9299a3d8da1d910da08bcffb48a3b`

            let url = `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}`

            
            fetch(url).then(response => response.json()).then(response => {
                

                 if(response.cod == 200){
                    let temperature = response.main.temp - 273.15

                    let humidity = response.main.humidity

                     let locName = response.name
                    

                  showPopup(temperature, humidity, locName)

                }
                else{
                   alert("No Location found")
                }

            }).catch(error => {
                
                alert(`API Error: ${error.message}`)
            });
          

          } catch (error) {
            alert(`getWeatherDetails Error: ${error.message}`)
          }
          
          

         })
    
        let cell3 = row.insertCell(2);
        cell3.innerHTML =`<input type="button" value="Delete">`
        cell3.addEventListener("click", function(){
          row.remove(cell1)
        })
}
const showPopup = (temp,hum,ln) => {
  let locationName = document.getElementById("location")
  let temperature = document.getElementById("temperature")
  let humidity = document.getElementById("humidity")

  locationName.innerHTML = ln
  temperature.innerHTML = `Temperature: ${temp.toFixed(2)}°C`
  humidity.innerHTML = `Humidity: ${hum}%`

  openPopup()

}
const openPopup = () => {
  popup.style.display = "block";
  // popupbg.style.display = "block";
}
const closePopup = () => {
  popup.style.display = "none";
  // popupbg.style.display = "none";
}










