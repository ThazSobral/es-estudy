const fs = require('fs')
const path = require('path')

const basePath = '../assets/poema/'

function readFileAsync (path, options) {
  return new Promise ((resolve, reject) => {
    fs.readFile(path, options, (err, data) => {
      if (err) return reject(err)
      return resolve(data)
    })
  })
}

console.log('Begin')
readFileAsync(path.resolve(basePath, 'menino-azul.txt'), { encoding: 'utf-8' })
  .then(console.log)
  .catch(console.log)
console.log('End')