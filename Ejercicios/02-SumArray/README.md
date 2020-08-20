


<p align='center'>
        <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>


<h1 align='center'>Sum Array</h1>

<div>
<p align='center'>Dado un arreglo de números ordenados yun integro, ver si dos números suman alsegundo</p>
<hr>


<h4 align='center'>
arreglo: [2,4,5,9] / numero: 9  / return: true 
</h4>
<h4 align='center'>
arreglo: [2,4,5,9] / numero:12 / return: false
</h4>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<h1> Solución Naive </h1>
<br/>
<pre><code>
functionsumArray (arr, n) {
    // itero sobre el arreglo
    for (let i = 0; i < arr.length - 1; i += 1) {
        // itero sobre los numeros siguientes
        for (let j = i + 1; j < arr.length; j += 1) {
            // veo si son iguales a la suma y devuelvo true
            if (arr[i] + arr[j] === n) returntrue;
        }  
    }
    // si termine de recorrer el arreglo devuelvo alse
    returnfalse;
}
</code></pre>

<div style="display:grid ;justify-content: space-evenly; grid-template-columns: 400px 400px ;">
    <div >
        Complejidad de tiempo
            <p>???</p>
    </div>
    <div >
        Complejidad de espacio
            <p>???</p>
    </div>
</div>
<hr>
<br/>
<h2>Solucion Naive</h2>
<pre><code>
functionsumArray (arr, n) {
    // itero sobre el arreglo
    for (let i = 0; i < arr.length - 1; i += 1) {
        // itero sobre los numeros siguientes
        for (let j = i + 1; j < arr.length; j += 1) {
            // veo si son iguales a la suma y devuelvo true
            if (arr[i] + arr[j] === n) returntrue;
        }
    }
    // si termine de recorrer el arreglo devuelvo false
    returnfalse;
}    
</code></pre>

<div style="display:grid ;justify-content: space-evenly; grid-template-columns: 400px 400px ;">
    <div >
        Complejidad de tiempo
            <p>O(n^2)</p>
    </div>
    <div >
        Complejidad de espacio
            <p>0(1)</p>
    </div>
</div>

<hr>
<br/>
<h2>Mejor Solución</h2>
<pre><code>
function sumArray2 (arr, n) {
    // creo un puntero para el principio y el final
    let start = 0;
    let end = arr.length - 1;
    // mientras el puntero del principio sea menor al del final
    while (start < end) {
        // guardo el resultado de la suma
        const sum = arr[start] + arr[end];
        // Si son iguales devuelvo true
        if ( sum === n) return true;
        // Si es menor aumento el puntero de start 
        else if (sum < n) start += 1;
        // si es mayor decremento el puntero de end
        else end -= 1;  
        }
        // si salimos del for loop significa q no hay coincidencia
        return false;
}
</code></pre>

<div style="display:grid ;justify-content: space-evenly; grid-template-columns: 400px 400px ;">
    <div >
        Complejidad de tiempo
            <p>???</p>
    </div>
    <div >
        Complejidad de espacio
            <p>???</p>
    </div>
</div>

<hr>
<br/>
<h2>Mejor Solución</h2>
<pre><code>
function sumArray2 (arr, n) {
    // creo un puntero para el principio y el final
    let start = 0;
    let end = arr.length - 1;
    // mientras el puntero del principio sea menor al del final
    while (start < end) {
        // guardo el resultado de la suma
        const sum = arr[start] + arr[end];
        // Si son iguales devuelvo true
        if ( sum === n) returntrue;
        // Si es menor aumento el puntero de start 
        else if (sum < n) start += 1;
        // si es mayor decremento el puntero de end
        else end -= 1;  
    }
        // si salimos del for loop significa q no hay coincidencia
        returnfalse;
}
</code></pre>

<div style="display:grid ;justify-content: space-evenly; grid-template-columns: 400px 400px ;">
    <div >
        Complejidad de tiempo
            <p>O(n)</p>
    </div>
    <div >
        Complejidad de espacio
            <p>O(1)</p>
    </div>
</div>

