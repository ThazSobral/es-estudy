// #Função coin flip
// ##têm 50% de chance de resolve e 50% de reject
const coinFlip = (n) => new Promise((resolve, reject) => n > 0.5 ? resolve(true) : reject(false))


// #Promise.all
// ##é tentado executar todaos thens ao mesmo tempo.
// ##caso algum then dê erro, ele anula todo o resto e retorna apenas o primeiro catch

console.log('Begin\n')
const promiseArray = []
for (let i = 0; i <= 4; i++) promiseArray[i] = coinFlip(Math.random())

console.log(promiseArray)
// Promise.all(promiseArray).then(console.log)