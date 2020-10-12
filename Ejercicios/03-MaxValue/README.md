


<p >
        <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Max Value

<div>
<p >Dado un arreglo de valores de acciones, encontrar la mayor ganancia posible de comprar a un horario y vender después</p>
<hr>


<h4 >
acciones: [4, 3,2,5,11]
</h4>
<h4 >
mayor ganancia: 9
</h4>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<h1>Solución a Fuerza Bruta</h1>
<br/>
<pre><code>
const maxValue = (stocks) => {
    // guardamos la primer diferencia
    let max = stocks[1] - stocks[0];
    // iteramos sobre cada posibilidad de compra
    for (let i = 0; i < stocks.length - 1; i += 1) {
        // e iteramos sobre cada posibilidad de venta
        for (let j = i + 1; j < stocks.length; j += 1){
            // sacamos ganancia potencial
            const potential = stocks[j] - stocks[i];
            // y decudimos si nos quedamos con el potencial o con el viejo maximo      
            max = potential > max ? potential : max;    
        }  
    }
    // devolvemos el maximo
    return max;
};
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
<h2>Solución a Fuerza Bruta</h2>
<pre><code>
const maxValue = (stocks) => {
    // guardamos la primer diferencia
    let max = stocks[1] - stocks[0];
    // iteramos sobre cada posibilidad de compra
    for (let i = 0; i < stocks.length - 1; i += 1) {
        // e iteramos sobre cada posibilidad de venta
        for (let j = i + 1; j < stocks.length; j += 1){
            // sacamos ganancia potencial
            const potential = stocks[j] - stocks[i];
            // y decudimos si nos quedamos con el potencial o con el viejo maximo      
            max = potential > max ? potential : max;    
        }  
    }
    // devolvemos el maximo
    return max;
};
</code></pre>

<div style="display:grid ;justify-content: space-evenly; grid-template-columns: 400px 400px ;">
    <div >
        Complejidad de tiempo
            <p>O(n^2)</p>
    </div>
    <div >
        Complejidad de espacio
            <p>O(1)</p>
    </div>
</div>

<hr>
<br/>
<h2>Solución Optima</h2>
<pre><code>
const maxValue2 = (stocks) => {
    // guardamos la primer diferencia
    let max = stocks[1] - stocks[0];
    // guardamos el precio minimo hasta el momento
    let minPrice = stocks[0];
    // iteramos sobre las stocks
    for (let i = 1; i < stocks.length; i += 1) {
        // sacamos la ganacia potencial
        const potencial = stocks[i] - minPrice;
        // Nos quedamos con el mayor valor    
        max = Math.max(max, potencial);
        // nos quedamos con el precio minimo    
        minPrice = Math.min(minPrice, stocks[i]);
    }
    // devolvemos el maximo
    return max;
};
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
<h2>Solución Optima</h2>
<pre><code>
const maxValue2 = (stocks) => {
    // guardamos la primer diferencia
    let max = stocks[1] - stocks[0];
    // guardamos el precio minimo hasta el momento
    let minPrice = stocks[0];
    // iteramos sobre las stocks
    for (let i = 1; i < stocks.length; i += 1) {
        // sacamos la ganacia potencial
        const potencial = stocks[i] - minPrice;
        // Nos quedamos con el mayor valor    
        max = Math.max(max, potencial);
        // nos quedamos con el precio minimo    
        minPrice = Math.min(minPrice, stocks[i]);
    }
    // devolvemos el maximo
    return max;
};
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
