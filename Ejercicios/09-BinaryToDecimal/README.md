


<p >
        <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>


<h1 >Binary To Decimal</h1>

<div>
<p >Escribe una función que pase un string en
binario a numero Decimal</p>
<hr>

<br/>
<h1> Approach </h1>

- Tenemos que iterar sobre cada numero, e ir sumando la potencia de 2 y su posición multiplicada por el numero
<br/>
<p >
<img  src='../../images/binary-decimal.png' </img>
</p>

<br/>
<br/>
<h1> Solución </h1>
<pre><code>
const binaryToDecimal = (binary) => {
    let sum = 0;
    for (let i = 0; i < binary.length; i += 1) {
        sum += Math.pow(2, binary.length - (i+1)) * binary[i];
    }
    return sum;
};
</code></pre>
<br/>
<br/>
<h1> Solución Recursiva </h1>
<pre><code>
const binaryToDecimalRec = (binary) => {
    const sum = Math.pow(2, binary.length - 1) * binary[0]
    if (binary.length !== 1) {
        return sum + binaryToDecimalRec(binary.slice(1));
    }
    return sum
}
</code></pre>
