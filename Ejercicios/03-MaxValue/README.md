

<p >
        <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Max Value
## Introducción
Se nos presenta un arreglo de enteros, estos representan el valor de una acción con el pasar del tiempo. ¿El objetivo del ejercicio? Encontrar cuál es la máxima ganancia posible de comprar a un horario y vender a otro después.


#### Ejemplo
**acciones**: [4, 3, 2, 5, 11]   
**mayor ganancia**: 9   

Esta ganancia la obtenemos comprando la acción cuando su valor es de 2 y vendiéndola cuando a 11.

## Solución
### En palabras
Para la resolución de este problema necesitamos identificar cuales son los elementos mas importantes a tener en cuenta.
1. Recorrer el arreglo de valores
2. Encontrar aquellos dos que, al restarlos, generen la mayor diferencia
3. Al terminar el recorrido, retornar la mayor diferencia obtenida

### Primer alternativa
Como todo ejercicio, existen multiples soluciones. En este primer caso evaluaremos la posibilidad de resolver el ejercicio a través de fuerza bruta.

```javascript
const maxValue = (stocks) => {
    // guardamos la primer diferencia
    let max = stocks[1] - stocks[0];
    // iteramos sobre cada posibilidad de compra
    for (let i = 0; i < stocks.length - 1; i += 1) {
        // e iteramos sobre cada posibilidad de venta
        for (let j = i + 1; j < stocks.length; j += 1){
            // sacamos ganancia potencial
            const potential = stocks[j] - stocks[i];
            // y deducimos si nos quedamos con el potencial o con el viejo máximo      
            max = potential > max ? potential : max;    
        }  
    }
    // devolvemos el máximo
    return max;
};
```

Complejidad Temporal | Complejidad Espacial
--|--
O(n^2)|O(1)


### Segunda alternativa
En esta oportunidad, haremos un único recorrido sobre el arreglo. Esto nos da la capacidad de disminuir el orden de complejidad temporal. Como ya sabemos, disminuir la complejidad nos da la capacidad de generar código mas eficiente y por lo tanto mas escalable.

```javascript
const maxValue2 = (stocks) => {
    // guardamos la primer diferencia
    let max = stocks[1] - stocks[0];
    // guardamos el precio mínimo hasta el momento
    let minPrice = stocks[0];
    // iteramos sobre las stocks
    for (let i = 1; i < stocks.length; i += 1) {
        // sacamos la ganacia potencial
        const potencial = stocks[i] - minPrice;
        // Nos quedamos con el mayor valor    
        max = Math.max(max, potencial);
        // nos quedamos con el precio mínimo    
        minPrice = Math.min(minPrice, stocks[i]);
    }
    // devolvemos el máximo
    return max;
};
```

Complejidad Temporal | Complejidad Espacial
--|--
O(n)|O(1)

## Código
Pueden encontrar las soluciones recién mencionadas en el siguiente [link](https://repl.it/JjYI).
