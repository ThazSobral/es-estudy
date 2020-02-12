const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const basePath = '../assets/poema/'

// #Promise encadeada
// ##as promisees podem ser encadeadas e se tornarem dependentes uma das outras
const readFileAsync = promisify(fs.readFile)
console.log('Begin\n')
readFileAsync(path.resolve(basePath, 's1.txt'), { encoding: 'utf-8' })
  .then((sentence) => {
    console.log(sentence, '\n')
    return readFileAsync(path.resolve(basePath, 's2.txt'), { encoding: 'utf-8' })
  })
  .then((sentence) => {
    console.log(sentence, '\n')
    return readFileAsync(path.resolve(basePath, 's3.txt'), { encoding: 'utf-8' })
  })
  .then((sentence) => {
    console.log(sentence, '\n')
    return readFileAsync(path.resolve(basePath, 's4.txt'), { encoding: 'utf-8' })
  })
  .then((sentence) => {
    console.log(sentence, '\n')
    return readFileAsync(path.resolve(basePath, 's5.txt'), { encoding: 'utf-8' })
  })
  .then(console.log('Demoro menos para executar\n'))
  .finally(() => console.log('End'))

console.log('Executo antes das promises\n')