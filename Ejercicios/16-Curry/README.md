


<p >
        <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>


<h1 >Curry</h1>
<div>
<h3 >Que es currying?</h3>
<p >Consiste en transformar una función que utiliza múltiples argumentos en una secuencia de funciones que utilizan un único argumento.</p>

<br/>
<br/>
<h2> Ejemplo</h2>
<pre><code>function calcAllFour(var1, var2, var3, var4) {
    return var1 + var2 - var3 * var4;
}
const curriedDoSomething = curry(calcAllFour); //argumentos -> []
const firstReturn = curriedDoSomething(1); // argumentos -> [1]
const secondReturn = firstReturn(2); // argumentos -> [1, 2]
const thirdReturn = secondReturn(3); // argumentos -> [1, 2, 3]
const fourthReturn = thirdReturn(4); // -9 -> (1 + 2 - 3 * 4)
</code></pre>
<br/>
<br/>
<h2> Ahora haz el Curry</h2>

- Implementa la función "curry"
- Mantén en mente
    - Tenés que saber cuantos argumentos la función que estas 'curring' toma.
        - La función anterior tenía 4 parametros
    - La función que devuelvas del "curring" tiene acumuladas los argumentos anteriores.
    - La función debe determinar si los argumentos acumulados son iguales al numero de parametros que la función original requiere, y devolver lo que la función original devolvería con los argumentos acumulados.

<br/>
<br/>
<h2> Solución ES5 </h2>
<pre><code>function curry(fn) {
    return function curriedFn() {
        var args = [].slice.call(arguments);
        if (args.length >= fn.length) {
            return fn.apply(null, args);
        } else {
        return function resolver() {
          return curriedFn.apply(null, args.concat([].slice.call(arguments)));
        };
        }
    };
};
</code></pre>
<br/>
<br/>
<h1>Solución ES6</h1>
<br/>
<pre><code>
const curry = (fn) => {
    return function curriedFn(...args) {
        if (args.length >= fn.length) return fn(...args);
        else return (...nextArgs) => curriedFn(...args, ...nextArgs);
    };
};
</code></pre>
