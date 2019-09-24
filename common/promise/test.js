const foo = _ => {
    return new Promise(function(resolve){
        resolve('eee')
    })
}
const bar = foo();
bar.then(res => {
    console.log('res =>',res)
})