
      window.onscroll = function() {
        var navbar = document.getElementById('navbar');
        var links = document.querySelectorAll('#navbar-section a');
        

  
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          navbar.style.backgroundColor = '#333';
          navbar.style.color = '#fff';
          navbar.style.backgroundColor = '#002e6d';
          navbar.style.marginLeft = "28px";
          navbar.style.height = "140px";
          navbar.style.
          changeFontColor('white');
        } else {
          navbar.style.backgroundColor = 'transparent';
          navbar.style.color = '#002e6d';
          changeFontColor('inherit');
        }
      };
  
      function changeFontColor(color) {
        var links = document.querySelectorAll('#navbar-section a');
        links.forEach(function(link) {
          link.style.color = color;
        });
      }


      
    const apiKey = '2128e8d5509c93e885205d1f1f7bbacd';
    const city = 'Kigali';

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    // Make the API request
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Handle the API response and update the UI
      const weatherInfo = document.getElementById('weather-info');
      const temperatureCelsius = Math.ceil(kelvinToCelsius(data.main.temp));
  
      // Function to capitalize the first letter of each word
      const capitalizeFirstLetter = (str) => {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
      };
  
      weatherInfo.innerHTML = `
        <p>Kigali</p>
        <p>T: ${temperatureCelsius} &deg;C</p>
        <p>${capitalizeFirstLetter(data.weather[0].description)}</p>
      `;
    })
    .catch(error => console.error('Error fetching weather data:', error));
  

    
    // Function to convert temperature from Kelvin to Celsius
    function kelvinToCelsius(kelvin) {
      return kelvin - 273.15;
    }

     // Change header color on scroll
     window.addEventListener('scroll', function() {
      const header = document.getElementById('weather-info');
      const scrollPosition = window.scrollY;

     
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        header.style.color = '#fff'; 
      } else {
        header.style.color = '#002e6d';
      }
    });