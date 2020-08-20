


<p align='center'>
        <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>


<h1 align='center'>Longest Increasing
Subsequence</h1>

<div>
<p align='center'>Dado un arreglo de números, encontrá el length de la secuencia creciente mas larga posible. Esta secuencia puede saltear números en el arreglo.</p>
<p align='center'>Por ejemplo: [3,10,4,5] la secuencia es [3,4,5] entonces devuelve 3.</p>

<br/>
<br/>
<h2> Ejemplos: </h2>
<pre><code>
longestIncreasingSubsequence([3, 4, 2, 1, 10, 6]);
// debería devolver 3:
// 3, 4, 6
longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80]);
// debería devolver 6:
// 10, 22, 33, 41, 60, 80 (or 10, 22, 33, 50, 60, 80)
longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80, 21, 23, 24, 25, 26, 27, 28]);
// debería devolver 9:
// 10, 20, 21, 23, 24, 25, 26, 27, 28
</code></pre>
<br/>
<br/>
<h1> Solución a Fuerza Bruta </h1>
<h3> Recorrer todas las posibilidades de subsecuencias y quedarse con la mas grande </h3>
<br/>
<pre><code>
function IterativeLIS (nums) {
    const sequences = [[-Infinity]];
    nums.forEach(num => {
        const copySeq = [...sequences];
        copySeq.forEach(sequence => {
            if(sequence.slice(-1)[0] < num) sequences.push([...sequence, num]);
        });
    });
    return sequences.reduce((memo, seq) => {
        if (memo > seq.length) return memo;
        return seq.length;
    }, 1) -1;
}
</code></pre>

<br/>
<br/>
<h1> Solución a Fuerza Bruta Recursiva </h1>
<h3> Recorrer todas las posibilidades de subsecuencias incluyendo o no incluyendo ese numero </h3>
<br/>
<pre><code>
function longestIncreasingSubsequence (nums, index = 0, base = -Infinity) {
    // si ya recorrimos todo el arreglo devolver cero ya que termino la secuencia
    if (index === nums.length) return 0;
    // sacar la longitud de la secuencia que llego cuando le numero es excluido
    const whenExcluded = longestIncreasingSubsequence(nums, index + 1, base);
    // fijarse si el numero es menor que el numero que llega en la base
    // si es menor directamente devolver el excluido
    if (nums[index] <= base) return whenExcluded;
    // Tomar el valor cuando es incluido en la secuencia sumandole uno por si mismo
    const whenIncluded = 1 + longestIncreasingSubsequence(nums, index + 1, nums[index]);
    // devolver el mayor entre el incluido y el no incluido
    return Math.max(whenIncluded, whenExcluded);
}
</code></pre>
<br/>
<h3 align='center'> La complejidad de tiempo de esta solución es ...... </h3>
<h2 align='center'> O(2^n) </h2>
<h3 align='center'> Pero... siempre que tomamos el whenIncluded de un elemento ese valor es siempre el mismo... porque no lo guardamos?</h3>
<h2 align='center'> Memoization FTW </h2>
<br/>
<br/>
<h1>Solución con Memoization</h1>
<pre><code>
function memoLis (nums, index = 0, base = -Infinity, memo = {}) {
    if (index === nums.length) return 0;
    const whenExcluded = memoLis(nums, index + 1, base, memo);
    if (nums[index] <= base) return whenExcluded;
    let whenIncluded;
    if(memo.hasOwnProperty(index)) whenIncluded = memo[index]
    else {
        whenIncluded = 1 + memoLis(nums, index + 1, nums[index], memo);
        memo[index] = whenIncluded;
    }
    return Math.max(whenIncluded, whenExcluded);
}
</code></pre>
<br/>
<h3 align='center'> Fijense que solo guardamos el whenIncluded, ya que en el excluido la base puede ser distinta y dar distintos resultados</h3>
<br/>
<br/>
<br/>
<h3 align='center'> Time complexity ahora??</h3>
<h4 align='center'> Es dificil de ver lo acepto...</h4>
<h2 align='center'> O(n^2) </h2>
<h4 align='center'> Porque?? Porque por cada elemento recorremos solo una vez todos los otros elementos.</h4>
