const moment = require('moment-timezone');

moment.tz.setDefault('America/New_York');

let targetTimeZone = ('America/New_York');

if (process.argv.length !== 3) {
  console.log('Usages: node <script-file> <timezone>');
  process.exit(1);
} else {
  targetTimeZone = process.argv[2];
}

console.log(`The time in the ${targetTimeZone} timezone is ${moment().tz(targetTimeZone).format()}`);
console.log(''); // just a spacer to make things look better
