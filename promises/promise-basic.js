const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const basePath = './assets/'

// ##Principio de promisees encadeadas utilizando recursividade
const readFileAsync = promisify(fs.readFile)
console.log('Begin\n')

function read (index) {
  return readFileAsync(path.resolve(basePath, `s${index}.txt`), { encoding: 'utf-8' })
}

function start (index, max) {
  if (index > max) return console.log('End')
  read(index)
    .then((data) => {
      console.log(data, '\n')
      start(index + 1, max)
    })
}

start(1, 5)