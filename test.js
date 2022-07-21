// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One Euro should be 1.206 Dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 Dólares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});

test("One Dollar should be 106.58 Yens", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(2)).toBe(213.16); //1 Dólar equivale a  106.58 Yenes, entonces 2 Dólares deberian ser = (2 * 106.58)
});

test("One Yen should be 0.00625489 Pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(1000)).toBe (6.25489); //1 Yen equivale a 0.00625489 Pounds , entonces 1000 Yens deberian ser = (1000 * 0.00625489)
})