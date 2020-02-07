// função com 50%  de resolve e 50% de reject
const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('All right') : reject("It wasn't this time"))

coinFlip
  .then((data) => console.log(data, '1'))
  .catch((err) => console.log(err))
  .then(() => console.log('End 1'))