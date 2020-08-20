


<p align='center'>
        <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>


<h1 align='center'>Has Balance Brackets</h1>

<div>
<p align='center'>Crear un bracket validator, que chequee que estén balanceados correctamente. Los brackets validos son los siguientes:</p>
<hr>


<h4 align='center'>
{ [ ] ( ) }" debería devolver true
</h4>
<h4 align='center'>
{ [ ( ] ) }" debería devolver false
</h4>
<h4 align='center'>
{ [ }" debería devolver false
</h4>
<h4 align='center'>
{ [ ( [ { ( )[ ]{ } } ] ) ] }" debería devolver true
</h4>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<h1>Approach</h1>

- Tienes "opening"- ( { [ - y "closing" - ) } ] -brackets
- Cada closing bracket tiene que corresponder con la opening bracket mas cercana que empareje
- Cada opening y closing bracket tieneque estar en pareja.
<br/>
<br/>

<p align="center">Entonces tenemos que ir trackeando las opening brackets y fijarse si cuandoencontramos una closing bracket, matcheacon la opening bracket mas cercana
</p>
<p align="center">Que  estructura de datos podemos utilizarpara esto?</p>
<br/>
<br/>
<h1>Solución Posible</h1>
<br/>
<pre><code>
const hasBalancedBrackets = (string) => {
    //  Tenemos un diccionario para chequear las opening brackets con sus closing brackets 
    const validBrackets = {
        '{' : '}',
        '[' : ']',
        '(' : ')',  
    };
    // creamos un arreglo donde vamos a ir guardando los openBrackets
    const openBrackets = [];
    // iteramos sobre el string
    for (let i = 0; i < string.length; i += 1) {
        // si existe la propiedad significa q es un opening bracket entonces lo guardamos
        if (validBrackets[string[i]]) openBrackets.push(string[i]);
        // Si no nos fijamos q el closing bracket corresponda con el ultimo opening bracketelse
        if (validBrackets[openBrackets.pop()] !== string[i] ) returnfalse;
        // sino seguimos (esta linea es 100% innecesaria pero linda de leer)
        elsecontinue; 
    }
    // una vez que terminamos de recorrer 
    // chequeamos que no haya quedado nada en el arreglo
    return !openBrackets.length;
};

</code></pre>
<br/>
<br/>
<h1>Conclusión</h1>

- Las estructuras de datos pueden ser muy utilies aunque no estemos creando explicitamente una.
- Podemos usar arreglos y metodos del arreglo para crear un arreglo q se comporte como un stack/queue
