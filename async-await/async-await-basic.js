const promise = new Promise ((resolve, reject) => {
    setTimeout(() => resolve('All right'), 3000)
})

// #Resultado identico da promise
async function show () {
    console.log(await promise)
}

show()