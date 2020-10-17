

<p>
        <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>


# Decimal to Binary
## Introducción
En el caso anterior transformábamos números binarios en decimales. En este caso hay que **hacer una función que tome un numero decimal y lo devuelva en binario**

## Solución
### En palabras
1. Tomá el número y sacá su modulo en 2
2. Guardá el resultado en un string
3. Dividí el número por 2 y redondealo para abajo
4. Continúa el proceso hasta que el número sea igual a 0
5. Devuelve el string

### Primer alternativa
```javascript
const decimalToBinary = (num) => {
    let binary = '';
    while(num) {
        binary = num % 2 + binary;
        num = Math.floor(num / 2);
    }
    return binary
}
```
### Segunda alternativa
En este caso, se propone una **solución recursiva**.
```javascript
const decimalToBinaryRec = (num) => {
    if (num) {
        return decimalToBinaryRec(Math.floor(num / 2)) + num % 2
    }
    return '';
}
```
## Código
Pueden encontrar las soluciones recién mencionadas en el siguiente [link](https://repl.it/KDLz/1).
