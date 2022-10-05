// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// one Dollar is:
let oneDollarIs = {
    "JPY": 144.74, // japan yen
    "GBP": 0.89, // british pound
    "EUR": 1.01, // Euro
}
// one Yen is:
let oneYenIs = {
    "USD": 0.0069, // Dolar
    "GBP": 0.0061, // british pound
    "EUR": 0.0070, // Euro
}

const fromDollarToYen = (dol) =>{
    return(parseFloat((dol * oneDollarIs.JPY).toFixed(2)));
    // return(dol * oneDollarIs.JPY);
}
const fromEuroToDollar = (eur) =>{
    return(eur * oneEuroIs.USD);
}
const fromYenToPound = (yen) =>{
    return(yen * oneYenIs.GBP);
}

// solo un registro en consola para nosotros.
console.log(fromDollarToYen(1))
console.log(fromEuroToDollar(3.5))
console.log(fromYenToPound(1))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };
