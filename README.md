# Weather Journal App Project
12-5-2020

## Overview
This project creates an asynchronous web app that uses OpenWeatherMap Web API and user data to dynamically update the UI. 

## Instructions
server.js file has the configuration of the local server and uses express for post and get routes. It uses the main project folder "website" which contains the required files for client side. app.js sends both get and post requests and update UI dynamicaly according to data from weather api and user input. index.html shows the text areas where user inputs a valid Zip Code and feeling for the day and js files updates entry area when the user clicks on "generate" area and fetches the data from web api according to ZIP Code. styles.css contains the styling.

### Getting started
You need to run local server with node.js.
First install the required packages using npm,

```
npm install express
npm install body-parser
npm install cors
```
Then,
At the path where you installed files run the following command,

`node server.js`

and on run localhost on the specified port. You can configure server to listen to a port on your own as long as the same port is in the adress path in the browser.
The console should show this message:
`server running on port: <port-number>`

## Evironment
Server runs on node.js and uses express package to initiate an instance of an app.

## API
The app has the credentials to accessses the open weather api.
You can find more apis here https://openweathermap.org/api.

## Dependencies
- Express 
To run server and routes.
- body-parser package
Works as middleware for parsing data
- cors package 
Allows for communication across the web

## Compatibility
Runs on almost any browser that supports the async calls and fetch().

