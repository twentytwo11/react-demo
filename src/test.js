setTimeout(function () {
    console.log(1)
},0)

new Promise(function executor(resolve) {
    console.log(2);
    for(var i = 0;i<1000;i++){
        i = 9999 && resolve();
    }
    console.log(3)
}).then(function () {
    console.log(4)
  //  return 8888;
})

console.log(5)

