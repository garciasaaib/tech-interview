


<p >
        <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>


<h1 >Solve Graph</h1>

<div>
<p >Un Graph consiste en un set de vertices conectados entre ellos por aristas.</p>
<hr>
<br/>
<br/>
<h2 >Undirected vs. Directed graphs</h2>
<p >
<img  src='../../images/graph.png' </img>
</p>
<br/>
<br/>
<br/>
<h2 >La Pregunta</h2>
<h3  >Escribe una función que determine si un path existe entre dos vertices de un graph.</h3>
<br/>
<h3 >El graph sera representado como un objeto cada key representa un vértice y el valor todos los vertices que pueden ser alcanzados. Este sera un directed graph.</h3>
<br/>
<br/>
<p >
<img  src='../../images/graph 2.png' </img>
</p>
</div>

<br/>
<br/>
<h1>Approach</h1>

- La solución puede ser un algoritmo Breadth-First o Depth-First
- Pero los graphs pueden ser cíclicos
- Si no empieza con el mismo caracter q la needleseguir al proximo caracter
- Si empezamos recorriendo el vertice A, eventualmente vamos a llegar al vertice R que apunta devuelta al A.

<br/>
<pre><code>
{ 
    a: ['c'],
    c: ['s', 'r'],
    r: ['a'],
    s: []
}
</code></pre>

- El problema? Un algoritmo normal de BFS/DFS terminaria en un loop infinito.
- Por lo tanto tu algoritmo tiene que trackear todos los vertices que visito
- Si un vertice a sido visitado sabemos que no tenemos q ecorrer sus aristas por segunda vez
- El algoritmo se completa cuando ha encontrado el target o cuando todas las posiblidades fueron recorridas.
<br/>
<hr>
<br/>
<h2>Solución depth-first approach</h2>
<pre><code>
const graph = {
a: ['c'],
b: ['c'],
c: ['s', 'r'],
d: ['a'],
s: ['a', 'c'],
r: ['d'],
z: ['z']
};
function solveGraphDFS(graph, start, end, visited = {}) {
    // nos fijamos si ya visitamos este vertice
    if (visited[start]) return false;
    // lo agregamos a los visitados
    visited[start] = true;
    // iteramos sobre el arreglo de vertices
    for (let i = 0; i < graph[start].length; i += 1) {
        // Si encontramos el target devolvemos true
        if (end === graph[start][i]) return true;
        // si no llamamos recursivamente a la función para ver si sus aristas estan conectadas
        else if (solveGraphDFS(graph, graph[start][i], end, visited)) return true
}
// si no devolvemos false
return false;
}
solveGraphDFS(graph, 'a', 'r') // true
solveGraphDFS(graph, 's', 'b') // false
</code></pre>
<br/>
<br/>
<br/>
<h2>Solución breadth-first approach</h2>
<pre><code>
const graph = {
a: ['c'],
b: ['c'],
c: ['s', 'r'],
d: ['a'],
s: ['a', 'c'],
r: ['d'],
z: ['z']
};
function solveGraphBFS(graph, start, end, visited = {}, queue = []) {
    // nos fijamos si ya visitamos este vertice
    if (visited[start]) return false;
    // lo agregamos a los visitados
    visited[start] = true;
    // iteramos sobre el arreglo de vertices
    for (let i = 0; i < graph[start].length; i += 1) {
    // agregamos todas sus conexiones al queue
    queue.push(graph[start][i]);
}
// comparamos si el siguiente del queue es nuestro target
// sino llamamos recursivamente a la funcion con el start del siguiente del queue
return queue[0] === end || solveGraphBFS(graph, queue.shift(), end, visited, queue);
}
solveGraphBFS(graph, 'a', 'r'); // true
solveGraphBFS(graph, 's', 'b'); // false
</code></pre>
<br/>
<br/>
 <div align="center">
        Complejidad de tiempo
            <p>O(n)</p>
    </div>