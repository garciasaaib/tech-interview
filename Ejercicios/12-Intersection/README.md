


<p >
        <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>


<h1 >Intersection</h1>

<div>
<p >Dado dos arreglos ordenados devuelve un
arreglo con los números que se repiten</p>

<br/>
<br/>
<h2> Ejemplos: </h2>
<pre><code>
[1,3,5,7,10], [2,3,6,8,10,20] => [3, 10]
</code></pre>
<br/>
<br/>
<h1> Solución a Fuerza Bruta </h1>
<pre><code>
function intersection(arr1, arr2) {
    const result = [];
    arr1.forEach(num1 => {
        arr2.forEach(num2 => {
            if(num1 === num2) result.push(num1);
        });
    });
    return result;
}
</code></pre>
<br/>
<div align="center">
        Complejidad de tiempo
            <p>???</p>
    </div>
    <div align="center">
        Complejidad de espacio
            <p>???</p>
    </div>
<br/>
<br/>
<h1> Solución a Fuerza Bruta </h1>
<pre><code>
function intersection(arr1, arr2) {
    const result = [];
    arr1.forEach(num1 => {
        arr2.forEach(num2 => {
            if(num1 === num2) result.push(num1);
        });
    });
    return result;
}
</code></pre>
<br/>
<div align="center">
        Complejidad de tiempo
            <p>O(n*m)</p>
    </div>
    <div align="center">
        Complejidad de espacio
            <p>O(n)</p>
    </div>
<br/>
<br/>
<h1>Solucion Optima</h1>
<pre><code>
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
</code></pre>
<br/>
<div align="center">
        Complejidad de tiempo
            <p>???</p>
    </div>
    <div align="center">
        Complejidad de espacio
            <p>???</p>
    </div>
<br/>
<br/>
<h1>Solucion Optima</h1>
<pre><code>
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
</code></pre>
<br/>
<div align="center">
        Complejidad de tiempo
            <p>O(n+m)</p>
    </div>
    <div align="center">
        Complejidad de espacio
            <p>O(n)</p>
    </div>
<br/>
<br/>
<h2>Pero... que pasaría si el arreglo no estuviese ordenado ? </h2>
<br/>
<br/>
<h3>Solucion para Arreglo desordenado</h3>
<pre><code>
function intersection3(arr1, arr2) {
    const hashMap = arr1.reduce((memo, num) => {
        memo[num] = true;
        return memo;
    }, {});
    return arr2.filter(num => hashMap[num]);
}
</code></pre>
<br/>
<div align="center">
        Complejidad de tiempo
            <p>???</p>
    </div>
    <div align="center">
        Complejidad de espacio
            <p>???</p>
    </div>
<br/>
<br/>
<br/>
<h3>Solucion para Arreglo desordenado</h3>
<pre><code>
function intersection3(arr1, arr2) {
    const hashMap = arr1.reduce((memo, num) => {
        memo[num] = true;
        return memo;
    }, {});
    return arr2.filter(num => hashMap[num]);
}
</code></pre>
<br/>
<div align="center">
        Complejidad de tiempo
            <p>O(n+m)</p>
    </div>
    <div align="center">
        Complejidad de espacio
            <p>O(n)</p>
            <p>Sigue siendo O(n) pero estamos creando n de
extra espacio por el hashmap</p>
    </div>
<br/>