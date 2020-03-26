


Promise.resolve(6)
.then(2)
.then(Promise.resolve(3))
.then(function(res){
    console.log(res)
})








// Promise.resolve()
//     .then(function(){
//         throw new Error('err')
//     },function(err){
//         console.log('err1 =>',err)
//     })
//     .then(function() {

//     },function(err) {
//         console.log('err2 =>',err)
//     })
//     .catch(function(err){
//         console.log('err =>',err)
//     })


