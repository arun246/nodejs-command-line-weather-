# nodejs-command-line-weather-

## This app shows the current weather at a current location.
## I have used the community open weather map api which is available for public access as free tier.

Grab an api key and put it inside the /utils/weather_api.mjs in the headers  : {x-rapid-api-key: your key }

How to setup: 
Install nodejs > install minimist > install Axios > Install ora : Go to project folder 
How to request weather: 
> node ./index.js today --location "your place"

Get Help for commands:
>node ./index.js help

## Like if your city name is Mumbai.
> node ./index.js today --location Mumbai

