//App es el nombre del conjunto de pruebas que estamos definiendo
//Dentro de describe se define un bloque de pruebas
//test() solo es el nombre de la prueba individual

///AAA
describe("App", () => {
    test("First test on 3", () => {
        //1. Arrange
        const a = 1;
        const b = 2;

        //2. Act
        const sum = a + b;

        //3. Assert
        expect(sum).toBe(3);
    });
});
