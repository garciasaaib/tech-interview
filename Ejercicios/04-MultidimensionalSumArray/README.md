


<p >
        <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>


<h1 >Multi-Dimensional SumArray</h1>

<div>
<p >Tenes un arreglo que consiste de sub-arreglos de longitud variada. Escribe unafunción para encontrar la suma de cadaelemento del arreglo.</p>
<hr>


<h4 >
mdArraySum([1,2,3,4]); //should return  10
</h4>
<h4 >
mdArraySum([ [2,4] , [1], [4,2,1] ]); //should return  14
</h4>
<h4 >
mdArraySum([ 2, [3,4], 5, [-3, [6 , [ 4,5 ] ] ] ]); //should return  26
</h4>
</div>
<br/>
<br/>
<h1>Aproximación</h1>

- La suma inicial es cero
- Checkea cada elemento en el arreglo
    - si no es un arreglo agregalo a la suma
    - si es un arreglo agrega la suma de todos suselementos a la suma.
- Devuelve el total

<h3  >Pero como podemos calucular la suma enlos elementos de un sub-arreglo de un sub-arreglo ?
</h3>
<br/>
<p >
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAAg6dPdk60uLBQfkGVH-G1vQbN_jP81uzPA&usqp=CAU' </img>
</p>
<p > RECURSION!! </p>
<br/>
<br/>
<br/>
<h1>Solución Posible</h1>
<pre><code>
const mdArraySum = (arr) => {
    // Iniciamos la suma en 0
    let sum = 0;
    // Iteramos sobre el arreglo
    for (let i = 0; i < arr.length; i += 1) {
        // si es un arreglo le sumamos lo que devuelve llamar otra vez la funcion sobre ese arreglo
        if (Array.isArray(arr[i])) sum += mdArraySum(arr[i])
        // si no le sumamos al total
        else sum += arr[i]  
    }
    // devolvemos el total
    return sum;
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
<h2>Solucion Posible</h2>
<pre><code>
const mdArraySum = (arr) => {
    // Iniciamos la suma en 0
    let sum = 0;
    // Iteramos sobre el arreglo
    for (let i = 0; i < arr.length; i += 1) {
        // si es un arreglo le sumamos lo que devuelve llamar otra vez la funcion sobre ese arreglo
        if (Array.isArray(arr[i])) sum += mdArraySum(arr[i])
        // si no le sumamos al total
        else sum += arr[i]  
    }
    // devolvemos el total
    return sum;
}
</code></pre>

<div style="display:grid ;justify-content: space-evenly; grid-template-columns: 400px 400px ;">
    <div >
        Complejidad de tiempo
            <p>O(n)</p><br/>
            <p>Donde n es la cantidad deelementos en todos los arreglos</p>
    </div>
    <div >
        Complejidad de espacio
            <p>O(n)</p><br/>
            <p>Donde n es el nivelmáximo de profundidad
</p>
    </div>
</div>

<hr>
<br/>
<h2>Solución One-Liner</h2>
<pre><code>
const mdArraySum2 = arr =>    
arr.reduce((total, elem) => total + (Array.isArray(elem) ? mdArraySum2(elem) : elem), 0)
</code></pre>
