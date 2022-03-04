# Weather app

---

##Description

simple weather website using Node.js, Express, and Axios for submitting an API request to [Mapbox](https://www.mapbox.com/) and [weatherstack](https://weatherstack.com/) to retrieve location information and the current weather.

---

##Deployed
This app is deployed to [Heroku](https://kadhim-weather-app.herokuapp.com/).

---

## How to run the app locally ?

First open your terminal then clone the app from github use the code snippet below.

```shell
git clone git@github.com:Hussein-kadhim/weather-app-nodejs.git.
```

> Note: `Just make sure that you copy the .env.sample code then remove the .env.sample and make your new .env file and past your environment key `

So, you will get the app folder on your machine open the downloaded folder and make sure you are in the root level app you can yse `ls` to check that, then.

```shell
npm install
```

To install the dependencies after that you will be able to run the app locally use this script.

```shell
npm run start:dev
```

You will see this link in the terminal localhost:3000 you can right click on it to open the app.

```shell
Server is up on port http://localhost:3000
```

---

##Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express](https://expressjs.com/) - Node.js Framework
- [Axios](https://axios-http.com/) - Promise-based HTTP requests
- [Mapbox](https://www.mapbox.com/) - Latitude and longitude
- [weatherstack](https://weatherstack.com/) - Weather information
