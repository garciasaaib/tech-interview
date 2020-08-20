


<p >
        <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>


<h1 >Decimal To Bynary</h1>

<div>
<p >Hacé una función que tome un número decimal y lo devuelva en binario</p>

<br/>
<br/>
<h1>Approach</h1>

- Toma el numero y saca su modulo en 2
- Guarda el resultado en un string
- Divide el numero por dos y redondealo para abajo
- Continua el proceso hasta que el numero sea cero
- Devuelve el string

<br/>
<br/>
<h1> Solución </h1>
<pre><code>
const decimalToBinary = (num) => {
    let binary = '';
    while(num) {
        binary = num % 2 + binary;
        num = Math.floor(num / 2);
    }
    return binary
}
</code></pre>
<br/>
<br/>
<h1> Solución Recursiva </h1>
<pre><code>
const decimalToBinaryRec = (num) => {
    if (num) {
        return decimalToBinaryRec(Math.floor(num / 2)) + num % 2
    }
    return '';
}
</code></pre>