const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const basePath = '../assets/poema/'

// #Promise.all
// ##é tentado executar todaos thens ao mesmo tempo.
// ##caso algum then dê erro, ele anula todo o resto e retorna apenas o primeiro catch
const readFileAsync = promisify(fs.readFile)

function read (index) {
  return readFileAsync(path.resolve(basePath, `s${index}.txt`), { encoding: 'utf-8' })
}

console.log('Begin\n')
const promiseArray = []
for (let i = 1 ; i <= 4; i++) promiseArray[i - 1] = read(i)

Promise.all(promiseArray).then((arr) => console.log(arr.join('\n\n')))

console.log('Executo antes de todas as promisees\n')