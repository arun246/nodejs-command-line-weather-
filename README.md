## Simple command line weather request.

### This app shows the current weather at a particular location you choose.
### I have used the community open weather map api which is available for public access as free tier.

Grab an api key and put it inside the /utils/weather_api.mjs in the headers  : {x-rapid-api-key: your key }

How to setup: 
Runtime :Install nodejs 
Packages : install minimist > install Axios > Install ora 
cd to folder: Go to project folder 

How to request weather: 
> node ./index.js today --location "your place"

Get Help for commands:
>node ./index.js help

### Like if your city name is Mumbai.
> node ./index.js today --location Mumbai

