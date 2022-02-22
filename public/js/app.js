const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const messageThree = document.querySelector('#message-3');
const wrapper = document.querySelector('.wrapper');
const weatherIcon = document.getElementById('weather-icon');
const localtime = document.getElementById('localtime');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const location = search.value;

  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';
  messageThree.textContent = '';
  localtime.textContent = '';
  weatherIcon.innerHTML = '';

  fetch(`/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error;
        } else {
          if (data.forecast.weather_icons.length > 0) {
            const image = document.createElement('img');
            image.setAttribute('src', data.forecast.weather_icons[0]);
            weatherIcon.appendChild(image);
          }

          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast.text;
          messageThree.textContent = data.forecast.details;
          localtime.textContent = data.forecast.localtime;
        }
      });
    }
  );
});
