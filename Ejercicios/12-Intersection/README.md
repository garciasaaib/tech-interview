


<p>
        <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>


# Intersection
## Introducción
Dado dos arreglos **ordenados** devuelve un
arreglo con los números que se repiten.

#### Ejemplos:
**input**: [1,3,5,7,10], [2,3,6,8,10,20]  
**output**: [3, 10]

## Solución
### Primer alternativa: Fuerza Bruta
```javascript
function intersection(arr1, arr2) {
    const result = [];
    arr1.forEach(num1 => {
        arr2.forEach(num2 => {
            if(num1 === num2) result.push(num1);
        });
    });
    return result;
}
```
Complejidad Temporal | Complejidad Espacial
--|--
O(n*m)|O(n)

### Segunda alternativa: Solución Optima
```javascript
function intersection2(arr1, arr2) {
    let index1 = 0;
    let index2= 0;
    const result = [];
    while(index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] === arr2[index2]) {
            result.push(arr1[index1]);
            index1 += 1;
            index2 += 1;
        }
        else if(arr1[index1] < arr2[index2]) index1 += 1;
        else index2 += 1
    }
    return result;
}
```
Complejidad Temporal | Complejidad Espacial
--|--
O(n+m)|O(n)


###### Pero... ¿Qué pasaría si el arreglo no estuviese ordenado?

### Para un arreglo desordenado
```javascript
function intersection3(arr1, arr2) {
    const hashMap = arr1.reduce((memo, num) => {
        memo[num] = true;
        return memo;
    }, {});
    return arr2.filter(num => hashMap[num]);
}
```
Complejidad Temporal | Complejidad Espacial
--|--
O(n+m)|O(n)

Como verán, la complejidad espacial sigue siendo O(n) **pero estamos creando n de espacio extra por el HashMap**.

## Código
Pueden encontrar las soluciones recién mencionadas en el siguiente [link](https://repl.it/KKep/1).
