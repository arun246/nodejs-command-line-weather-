import minimist from 'minimist';
import {today} from './utils/today.mjs';
import {help} from './utils/help.mjs';


export const main = () => {
    const args = minimist(process.argv.slice(2))
    //console.log(args);
    let cmd = args._[0] || 'help' //default command

    if (args.help || args.h) {
      cmd = 'help'
    }
  
    switch (cmd) {
      case 'today':
        today(args);
        break;
      case 'help':
        
        help(args);
        break;
      default:
        console.error(`"${cmd}" is not a valid command!`);
        break;
    }
  }

