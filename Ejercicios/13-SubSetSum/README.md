


<p align='center'>
        <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>


<h1 align='center'>Subset Sum</h1>

<div>
<p align='center'>Dado una suma target y un arreglo de números positivos, devolvé true si cualquier combinación de numeros en el arreglo suma el target.</p>
<br/>
<p align='center'>Cada numero en el arreglo solo se puede usar una vez. Devolvé false si los numeros no pueden ser usados para sumar el target.</p>
<br/>
<br/>


<h2>Ejemplos:</h2>
<br/>
<pre><code>
subsetSum(9, [1,10,5,3]); // true, 1 + 5 + 3
subsetSum(19, [1,10,5,3]); // true, add all 4
subsetSum(17, [1,10,5,3]); // false
subsetSum(2, [1,10,5,3]); // false
subsetSum(10, [1,10,5,3]); // true, since 10 + 0 = 10
</code></pre>
<br/>
<br/>
<h1>Solución Iterativa</h1>
<h4>Construir un arreglo de todas las sumas posibles:</h4>

- inicializa el arreglo de sumas con 0 // [0]
- intera sobre el arreglo de numeros
- itera sobre el arreglo de sumas, chequeando si el elemento actual + la suma es igual al target
- Si la nueva suma es menor que el target
guardalo en el arreglo de sumas
<br/>
<br/>
<p>Ejemplo: </p> 
<pre><code>
subsetSum(17, [1, 10, 5, 3])
=> set de posibles sumas: [0]
=> agrega 1 a cada suma posible
=> set de posibles sumas: [0, 1]
=> agrega 10 a cada suma posible
=> set de sumas posibles: [0, 1, 10, 11]
=> agrega 5 a cada posible suma
=> set de sumas posibles: [0, 1, 10, 11, 5, 6, 15, 16]
</code></pre>
<br/>
<h4>Solucion Iterativa </h4>
<pre><code>
const subsetSum = (nums, target) => {
    const sums = [0];
    return nums.some((num) => {
        const copySums = [...sums];
        return copySums.some(sum => {
            const newSum = sum + num;
            if (target === newSum) return true;
            if (newSum < target) sums.push(newSum);
        })
    })
}
</code></pre>
<br/>
<br/>
<h1>Optimización</h1>
<h4>Podemos estar agregando valores repetidos al arreglo que nos dan el mismo resultado</h4>
<br/>
<pre><code>
=> 1,2,3,4,5,6
=> 0,1,2,3,3,4,5,6,4,5,6,7
</code></pre>
<h4>Como podemos evitar agregar elementos repetidos sin agregar complejidad?</h4>
<br/>
<br/>
<h2>UN SET!!!</h2>
<br/>
<br/>
<br/>
<h2>Solución Iterativa con Set</h2>
<pre><code>
const subsetSumSet = (nums, target) => {
    const sums = new Set([0]);
    return nums.some((num) => {
        const copySums = [...sums];
        for (let sum of copySums) {
            const newSum = sum + num;
            if (target === newSum) return true;
            if (newSum < target) sums.add(newSum);
        }
    })
}
</code></pre>
<br/>
<br/>
<h2>Solución Recursiva</h2>
<br/>
<p>También podemos encarar este problema recursivamente</p> 
<p>Por cada elemento del arreglo solo nos importa:</p> 

- Usarlo para construir la suma nos va a ayudar a llegar al target
- Saltearlo y añadir otros números va a hacernos llegar al target

<p>Entonces por cada elemento, hagamos una llamada
recursiva que chequeé estas dos cosas</p> 
<br/>
<br/>
<h3>Solución Recursiva</h3>
<br/>
<pre><code>
const subsetSumRec = (nums, target, index = 0) => {
    if (target === 0) return true;
    if (target < 0) return false;
    if (index > nums.length) return false;
    const whenExcluded = subsetSumRec(nums, target, index + 1)
    const whenIncluded = subsetSumRec(nums, target - nums[index], index + 1);
    return whenExcluded || whenIncluded
}
</code></pre>
<br/>
<h3>Pero de nuevo estamos creando muchos
caminos que se repiten...</h3>
<br/>
<br/>
<br/>
<h3>Pero de nuevo estamos creando muchos
caminos que se repiten...</h3>
<h4>Con memoization podemos guardar los números que ya tuvimos un resultado y no tener que volver a procesarlos!!</h4>
<br/>
<br/>
<h3>Optimización de la Solución Recursiva</h3>
<br/>
<pre><code>
const subsetSumRecMemo = (nums, target, index = 0, memo = {}) => {
    if(memo.hasOwnProperty(target)) return memo[target];
    if (target === 0) return true;
    if (target < 0) return false;
    if (index > nums.length) return false;
    const whenIncluded = subsetSumRec(nums, target - nums[index], index + 1);
    const whenExcluded = subsetSumRec(nums, target, index + 1);
    memo[target] = whenExcluded;
    memo[target - nums[index]] = whenIncluded;
    return whenExcluded || whenIncluded ;
}
</code></pre>
<br/>
<br/>
<br/>
<h3>Complejidad de Tiempo y Espacio</h3>
<h4>Todas las soluciones son de complejidad O(2^n) en tiempo y espacio, aunque algunas sean mas optimas que otras, en el
peor caso va a haber que recorrer todo el arreglo, y no tener ninguna suma repetida.</h4>
