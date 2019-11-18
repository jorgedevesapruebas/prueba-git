console.log("inicio del programa");

setTimeout(function(){

    console.log("primer timeOut")
}, 3000)
setTimeout(function(){

    console.log("segundo timeOut")
}, 0) // esto no se imprime porque, aunque le hemos dicho que se ejecute de forma inmediata


setTimeout(function(){

    console.log("tercero timeOut")
}, 0)
console.log("fin del programa")