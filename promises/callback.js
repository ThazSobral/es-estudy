const fs = require('fs')

const path = require('path')
const basePath = '../assets/poema/'

function cb (err, data, index, max) {
  if (err) throw err
  console.log(data)
  return start(index + 1, max)
}

console.log('Begin\n')
// ##primeira chamada da função start
// ##definido o valor inicial e máximo que está no nome dos arquivos é iniciado o ciclo de callback
start(1, 5)
// #Inicio do trecho assíncrono
// ##callback é assíncrono por default
function start (index, max) {
  if (index > max) return console.log('\nEnd')
  fs.readFile(
    path.resolve(basePath, `s${index}.txt`),
    {encoding: 'utf-8'},
    (err, data) => cb(err, data, index, max)
  )
// #Final do trecho assíncrono
// console.log('\nEnd')
}