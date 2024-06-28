const form = document.querySelector('#form')
const card = document.querySelector('#card')
const city = document.querySelector('#city')

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    axios(`http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}&aqi=no`)
    .then((res) => {
        console.log(res.data);
        card.innerHTML = `
        <div id="container">
              <h1>${res.data.location.name}</h1> 
              <p>${res.data.location.localtime} , ${res.data.location.country} </p>
              <div>
                  <h2>${res.data.current.temp_c}°C</h2>
                  <img width="160px" src=${res.data.current.condition.icon} alt='weatherImg' />
              </div>
              <h4>${res.data.current.condition.text}</h4>
          </div>
        `;
      })
      .catch((err) => {
        console.log("error===>", err);
      });
  });


