'use strict'
// Requires de node modules
const chalk = require('chalk');
// Requires nuestros. Mejor separar los dos requires (de node y nuestros)
const getNames = require('./myModule');

const students = [
  {name: 'Anna',
  age: 28},
  {name: 'Paolo',
  age: 27}
]

console.log(chalk.blue(getNames(students)));