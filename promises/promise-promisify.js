const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const basePath = './assets/'

// #Promisificando a função
// ##equivalente a função readFileAsync do arquivo promise-principle.js
const readFileAsync = promisify(fs.readFile)

console.log('Begin')
readFileAsync(path.resolve(basePath, 'menino-azul.txt'), { encoding: 'utf-8' })
  .then(console.log)
  .catch(console.log)
console.log('End')