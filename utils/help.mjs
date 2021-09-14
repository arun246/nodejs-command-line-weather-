const menus = {
    main: `
      index.js [command] <options>
  
      today .............. show weather for today,
      help ............... show help menu for a command`,
  
    today: `
      outside today <options>
  
      --location, -l ..... the location to get weather`,
  }
  
  export const help = (args) => {
    const subCmd = args._[0] === 'help'
      ? args._[1]
      : args._[0]
  
    console.log(menus[subCmd] || menus["main"])
  }

  