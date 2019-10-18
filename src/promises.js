const add = (a, b) =>{
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
          resolve(a + b)
      }, 2000)
  })
}

// //Promise chaining
//
// //bad example
// add(1,2).then((sum)=>{
//     console.log(sum)

//     add(sum, 5).then((sum2)=>{
//         console.log(sum2)
//     }).catch((e)=>{
//         console.log(e)
//     })
// }).catch((e)=>{
//     console.log(e)
// })

//Correct process
add(1, 1).then((sum)=>{
  console.log(sum)  //Should Print 2
  return add(sum, 4)
}).then((sum2)=>{
  console.log(sum2) // Should Print 6
}).catch((e)=>{
  console.log(e)
})