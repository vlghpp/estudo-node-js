const calculadora = require("./calculadora")

test('Somar um mais um é igual a 2', () => {
    expect(calculadora.somar(1,1)).toBe(3)
});