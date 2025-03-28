/* Ejercicio 1: "Calculadora de Potencias"
Implementa una función que calcule potencias usando recursividad.
El programa debe:
- Crear una función que reciba base y exponente
- Usar recursividad para calcular la potencia
- Manejar casos especiales (exponente 0, negativo)

Ejemplo de uso:
calcularPotencia(2, 3);
*/
function calcularPotencia(base,exponente){
    console.log(base)
    console.log(exponente)
    if(exponente==0) return 1
    if(exponente > 0) return base * calcularPotencia(base,exponente-1)
    //return (1/base) * calcularPotencia(base,exponente-1)

}

/*
function calcularPotencia(base,exponente){
    let potencia = 0;
    for(let i=0; i < exponente;i++){
        potencia += base * base;
    }
    console.log("La potencia de ",base, " es:",potencia)

}*/


console.log(calcularPotencia(3,-2));



