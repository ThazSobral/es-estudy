const fs = require('fs')

const path = require('path')
const basePath = './assets'
// ##Apenas printa o conteúdo
function cb (err, data) {
  if (err) throw err
  console.log(data)
}

console.log('Begin\n')

// #Inicio do trecho síncrono
// ## leitura dos arquivos
const files = fs.readdirSync(path.resolve(basePath))
const sentences= files.filter((file) => /s[1-4].txt/gi.test(file))

for (const sentence of sentences) {
  // const text = fs.readFileSync(path.resolve(basePath, sentence)).toString()
  // console.log(text, '\n')
// #Trecho assíncrono
// ##irá printar a leitura do arquivo conforme o processo for finalizando
  fs.readFile(path.resolve(basePath, sentence), {encoding: 'utf-8'}, cb)
// #Final do trecho assíncrono
}
// #Final do trecho síncrono

console.log('\nEnd')