


<p >
        <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>


<h1 >Min Stack</h1>

<div>
<h2>Stack</h2>
<p >Un Stack o Pila es LIFO (Last-in First-out)osea el ultimo que entro es el primero ensalir</p>
<br/>
<p>Necesitas implementar un stack que tengalos siguientes metodos:</p>

- push(value) // para añadir elementos
- pop() // para sacar un elemento
- min() // ver el elemento con el valor mínimo
<br/>
<h3 >Todas estas funciones tienen que correren O(1)</h3>
<h3 >No se puede usar ningun Array method</h3>
<br/>
<h2>Approach</h2>

- implementar un stack normal. Luego implementar un stack con requisito mas - encontrar el minimo
- NO PUEDES guardar el valor minimo y cada vez que agregas un valor nuevo compararlo
    - PORQUE?

<p>IDEA: Tener una estructura separada para guardar el mínimo por cada nodo que seagrega, y cuando sacamos el nodoremovemos ese minimo</p>
<br/>
<br/>
<h1>Solución: Primero hacemos un stack común</h1>
<pre><code>
class Node{
    constructor(value) {
        this.value = value;
        this.next = null;  
    }
}
classStack{
    constructor(value) {
        this.top = null;  
    }  push(val) {
        if(!this.top) this.top = new Node(val);
        else {
            const newTop = new Node(val);      
            newTop.next = this.top;
            this.top = newTop;    
            }  
        }  
        pop() {
            const oldTop = this.top;
            this.top = oldTop && oldTop.next;
            return oldTop && oldTop.value;  
            }  
        peek() {
            returnthis.top && this.top.value  
        }
}
</code></pre>

<hr>
<br/>
<h1>Solución: Extendemos el Stack para agregarle el minimo</h1>
<pre><code>
class MinStack extends Stack{
    constructor() {
        super();
        this.minimum = new Stack();   
        }  
    push(val) {
        if(!this.top) {
            this.top = new Node(val);
            this.minimum.push(val);    
        }
        else {
            const newTop = new Node(val);      
            newTop.next = this.top;
            this.top = newTop;
            if(this.minimum.peek() > val) this.minimum.push(val);
            else this.minimum.push(this.minimum.peek());    
        }  
    }  
    pop() {
        const oldTop = this.top;
        this.top = oldTop && oldTop.next;
        this.minimum.pop();return oldTop && oldTop.value;  
    }  
    min() {
        returnthis.minimum.peek();  
    }
}

</code></pre>

<div>
   
<p >Space Complexity deMinStack?MinStack?</p>
<p >???</p>
    
<br/>
<br/>
<br/>
<br/>
<p >Sigue siendo O(n), pero ahora estamos guardando el doble de información (2n)</p>
   
</div>