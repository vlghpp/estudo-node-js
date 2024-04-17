const tester = require("./exercicio01")

test('O total de gasolina percorrido 272km é de 17 litros', () => {
    expect(tester.retornarGasto(272,"Gasolina")).toBe(17)
});
test('O total de etanol percorrido 220km é de 20 litros', () => {
    expect(tester.retornarGasto(220,"Etanol")).toBe(20)
});