const moment = require('moment-timezone');
const { command } = require('yargs');
const yargs = require('yargs');

moment.tz.setDefault('America/New_York');

let targetTimeZone = ('America/New_York');

const cmd = yargs.argv._[0];
const params = yargs.argv;

targetTimeZone = cmd;

if (params.format) {
  console.log(`The time here is: ${moment().tz('America/New_York').format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
  console.log(`The time in ${targetTimeZone} is: ${moment().tz(targetTimeZone).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
} else {
  console.log(`The time here is: ${moment().tz('America/New_York')}`);
  console.log(`The time in ${targetTimeZone} is: ${moment().tz(targetTimeZone)}`);
}

// if (cmd.length !== 3) { // Original tutorial
//   console.log('Usages: node <script-file> <timezone>');
//   process.exit(1);
// } else {
//  targetTimeZone = cmd[2];
// }

console.log(''); // just a spacer to make things look better
