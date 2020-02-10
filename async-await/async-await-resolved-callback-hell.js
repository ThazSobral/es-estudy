const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const basePath = '../assets/poema/'

const readFileAsync = promisify(fs.readFile)

console.log('Begin\n')
// #callback Hell
// ##Ocorre quando várias funções dependem do resultado de outras, assim se torna difícil a leitura do código para leitura e manuteção
// readFileAsync(path.resolve(basePath, 's1.txt'), { encoding: 'utf-8' })
//   .then((sentence) => {
//     console.log(sentence, '\n')
//     return readFileAsync(path.resolve(basePath, 's2.txt'), { encoding: 'utf-8' })
//       .then((sentence) => {
//         console.log(sentence, '\n')
//         return readFileAsync(path.resolve(basePath, 's3.txt'), { encoding: 'utf-8' })
//           .then((sentence) => {
//             console.log(sentence, '\n')
//             return readFileAsync(path.resolve(basePath, 's4.txt'), { encoding: 'utf-8' })
//               .then((sentence) => {
//                 console.log(sentence, '\n')
//                 return readFileAsync(path.resolve(basePath, 's5.txt'), { encoding: 'utf-8' })
//                   .then(console.log)
//                   .finally(() => console.log('\nEnd'))
//               })
//           })
//       })
//   })

// #resolução das callbacks hell
// ##cascatear o código é uma ótima solução para melhor a leitura do código e facilitar o entendimendo. (Graças as promises \o/)
// readFileAsync(path.resolve(basePath, 's1.txt'), { encoding: 'utf-8' })
//   .then((sentence) => {
//     console.log(sentence, '\n')
//     return readFileAsync(path.resolve(basePath, 's2.txt'), { encoding: 'utf-8' })
//   })
//   .then((sentence) => {
//     console.log(sentence, '\n')
//     return readFileAsync(path.resolve(basePath, 's3.txt'), { encoding: 'utf-8' })
//   })
//   .then((sentence) => {
//     console.log(sentence, '\n')
//     return readFileAsync(path.resolve(basePath, 's4.txt'), { encoding: 'utf-8' })
//   })
//   .then((sentence) => {
//     console.log(sentence, '\n')
//     return readFileAsync(path.resolve(basePath, 's5.txt'), { encoding: 'utf-8' })
//   })
//   .then(console.log)

// #Aproveitando o async/await
// ##utilizando o Async e await tornamos o código mais legível e evita a extenção horizontal desnecessária, além de abrir novas possíbilidade para fácil escalabilidade e mutação no código
async function read () {
  try {
    const sentence1 = await readFileAsync(path.resolve(basePath, 's1.txt'), { encoding: 'utf-8' })
    console.log(sentence1, '\n')

    const sentence2 = await readFileAsync(path.resolve(basePath, 's2.txt'), { encoding: 'utf-8' })
    console.log(sentence2, '\n')

    const sentence3 = await readFileAsync(path.resolve(basePath, 's3.txt'), { encoding: 'utf-8' })
    console.log(sentence3, '\n')

    const sentence4 = await readFileAsync(path.resolve(basePath, 's4.txt'), { encoding: 'utf-8' })
    console.log(sentence4, '\n')

    const sentence5 = await readFileAsync(path.resolve(basePath, 's5.txt'), { encoding: 'utf-8' })
    console.log(sentence5, '\n')
  
  } catch (err) {
    console.error(err)
  }

  console.log('End')
} 

read()