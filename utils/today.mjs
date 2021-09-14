import ora from 'ora';
import {my_weather} from './weather_api.mjs';


export const today = async (args) => {
    const spinner = ora().start()
  
    try {
      const location = args.location || args.l
      const weather = await my_weather(location)
  
      spinner.stop()
  
      console.log(`Current conditions in ${location}:`)
      console.log(`\t${weather.main}° ${weather.temp}`)
    } catch (err) {
      spinner.stop()
  
      console.error(err)
    }
  }