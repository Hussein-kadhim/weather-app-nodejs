
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express();
const PORT = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '/../public');
const viewsPath = path.join(__dirname, '/../templates/views');
const partialsPath = path.join(__dirname, '/../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'weather app',
    name: 'Hussein Kadhim',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Hussein Kadhim',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text.',
    title: 'Help',
    name: 'Hussein Kadhim',
  });
});

app.get('/weather', (req, res) => {
  
  if(!req.query.address){
   return res.send({
     error: 'You must to use a address'
   })
  }

  geocode(req.query.address, (error, { latitude, longitude, location }) => {
    console.log(location);
if (error) {
  return res.send({ error })
}

forecast(latitude, longitude,  (forecastInfo, error) => {
  if(error){
    return res.send({ error })
  }

  res.send({
   'forecast': forecastInfo,
    location,
   'address': req.query.address
  })
})
  })
});

app.get('/products', (req, res) => {
  if(!req.query.search){
   return res.send({
      error: 'You must provide a search term'
    })
  }

  console.log(req.query);
  res.send({
    products: []
  })
})

app.get('/help/*', (req, res) => {
  res.render('404',{
    title: '404',
    name: 'Hussein Kadhim',
    error: 'Help article not found, try again'
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Hussein Kadhim',
    errorMessage: 'Page not found, try again'
  });
});

app.listen(PORT, () => {
  console.log(`Server is up on port http://localhost:${PORT}`);
});
