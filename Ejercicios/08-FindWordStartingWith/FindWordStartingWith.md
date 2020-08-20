


<p align='center'>
        <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>


<h1 align='center'>Find Word Starting With</h1>

<div>
<h2 align='center'>La Pregunta </h2>
<p align='center'>Dado un "libro" y un string para buscar,  devolver todos los indices donde la palabra empieza con ese string. El libro vendrá con dos cosas: un id y un texto. La busqueda tiene que ser case insensitive.</p>
<hr>
<br/>
<pre><code>
const book = {
    id: 1,
    text: 'Erase una vez un libro de palabras que era un poco aburrido pero tenia muchas'
}
findWordsStartingWith(book, 'de') // [23, 112]
findWordsStartingWith(book, 'un') // [ 6, 14, 43, 99, 115 ]
</code></pre>
<br/>
<br/>
<h1>Naive Solution</h1>
<h2>Loopear a través del texto</h2>
<br/>
<pre><code>
const findWordsStartingWithNaive = (book, query) => {
        const separators = {
            ' ': true,
            '.': true,
            ',': true,
        }
        const text = book.text.toLowerCase();
        const finds = [];
        for (let i = 0; i < text.length; i += 1) {
            if (i !== 0 && !separators[text[i-1]]) continue;
            for (let j = 0; j < query.length; j += 1) {
                if (query[j] !== text[i + j]) {
                    i += j;
                    break;
            }   
            if (j === query.length - 1){
                finds.push(i);
                i += j;
            }
        }
    }
    return finds;
}
</code></pre>
    <div align="center">
        Complejidad de tiempo
            <p>???</p>
    </div>

<hr>
<br/>
<br/>
<h1>Naive Solution</h1>
<h2>Loopear a través del texto</h2>
<br/>
<pre><code>
const findWordsStartingWithNaive = (book, query) => {
        const separators = {
            ' ': true,
            '.': true,
            ',': true,
        }
        const text = book.text.toLowerCase();
        const finds = [];
        for (let i = 0; i < text.length; i += 1) {
            if (i !== 0 && !separators[text[i-1]]) continue;
            for (let j = 0; j < query.length; j += 1) {
                if (query[j] !== text[i + j]) {
                    i += j;
                    break;
            }   
            if (j === query.length - 1){
                finds.push(i);
                i += j;
            }
        }
    }
    return finds;
}
</code></pre>
    <div align="center">
        Complejidad de tiempo
            <p>O(n)</p>

</div>
<br/>
<br/>
<h2 align='center'>O podemos intentar usar un trie</h2>
<p align='center'>um... que es un trie???</p>
<br/>
<br/>
<h1>Ejemplo de un Trie</h1>
<h2>podes encontrar el mensaje secreto?</h2>
<br/>
<pre><code>
{
    [char]: {
        data: data,
        [nextChar]: {
            data: data,
            // ...
        }
    }
}
</code></pre>
<br/>
<pre><code>
const trie = {
    t: {
        indexes: [0, 5],
        o: {
            indexes:[0, 5],
            n: {
                indexes: [0, 5],
                i: {
                    indexes: [0]
                },
                t: {
                    indexes: [5],
                    o:{
                        indexes: [5]
                    }
                }
            }
        }
    }
}
buildTrie('Toni tonto')
</code></pre>
<br/>
<br/>
<h2>Porque?</h3>
<h3>Repetir la ejecución va a ser mucho mas rápido con un árbol</h3>
<br/>
<br/>
<h2>Paso 1:</h2>
<h3>Haz el TRIE</h3>
<br/>
<pre><code>
const buildTrie = (text) => {
    const trie = {};
    const separators = {
    ' ': true,
    '.': true,
    ',': true,
    }
    for (let i = 0; i < text.length; i += 1) {
        let currentLetter = trie;
        const startingIndex = i;
        while(text[i] && !separators[text[i]]) {
            currentLetter[text[i]] = currentLetter[text[i]] || { indexes: [] }
            currentLetter = currentLetter[text[i]];
            currentLetter.indexes.push(startingIndex);
            i++;
        }
    }
    return trie;
};
</code></pre>
<br/>
<br/>
<h2>Paso 2:</h2>
<h3>Una vez que el TRIE es creado todo lo que necesitas hacer es loopear a través del largo del string y recorrer los nodos hasta que llegues al final(luego retornar el arreglo de indices en ese punto)</h3>
<br/>
<pre><code>
const tries = {};
const findOrCreateTrie = ({ id, text }) => {
    tries[id] = tries[id] || buildTrie(text);
    return tries[id];
};
const findWordsStartingWith = (book, query) => {
    const trie = findOrCreateTrie(book)
    let currentLetter = trie;
    query = query.toLowerCase();
    for (let i = 0; i < query.length && currentLetter; i++) {
        currentLetter = currentLetter[query[i]]
    }
    return currentLetter ? currentLetter.indexes: [];
}
</code></pre>
<br/>
<br/>
  <div align="center">
        Time and Space Complexity?
        <br/>
        <h3>Buscar si hay que construir el Trie:</h3>
            <p>Space: O(n)</p>
            <p>Time: O(n + m)</p>
            <br/>
        <h3>Buscar si el trie ya fue construido:</h3>
            <p>Space: O(1)</p>
            <p>Time: O(m)</p>
            <br/>
    </div>