# Weather Journal Project

## Description: 
This project creates an asynchronous web app that uses Web API and user data to dynamically update the UI.
After the user enters the zipcode and the country code, a request is send to the OpenWeatherMap API. If the 
request is successful, the API returns the data and they can be viewed in the field 'Most recent entry'. 
However if the data is not correct and the status code returned by the API is NOK, then in the field 'Most recent entry'
the message 'invalid input data' will be shown. The firld 'Number of successful requests' counts the number of successful request made towards 
the OpenWeatherMap API by taking the length of the data stored for each successful post request to the server.

## Instructions: 
1. ### Installing node (required v16.13.1) and check the version:
   *check in the terminal by writing: node --version*

2. ### Install node modules by executing in the terminal the following commands:
   *- npm install express*

   *- npm install body-parser*

   *- npm install cors*

3. ### Start the server
   *In the terminal write: node server.js*

4. ### Load index.html:
   *http://localhost:3001*
 
## JS Version: 
ES2015/ES6
 
## JS Standard: 
ESlint


  