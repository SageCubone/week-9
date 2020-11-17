// var sharePizza = function() {
//     var cutPizzaSlices = 8
//     if (sharePizza) {
//         return cutPizzaSlices / sharePizza
//     }
//     console.log(`Each person gets ${sharePizza} slices of pizza`);
// }

// console.log(sharePizza(2))

var pizzaHut = function(sharePizza) {
    var cutPizzaSlices = 8
    var slices = cutPizzaSlices / sharePizza
    console.log(`Each person gets ${slices} slices of pizza`)
}

pizzaHut(2)
pizzaHut(3)