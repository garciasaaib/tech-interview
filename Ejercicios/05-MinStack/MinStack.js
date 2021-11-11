class Node {
  // Your code here:
  constructor(value){
    this.next = null
    this.value = value
  }
}


class Stack {
  /**
   * -> var stack = new Stack()
   * stack.top = null
   * 
   * -> stack.push(2)
   * stack.top = Node {
   *  value: 2,
   *  next: null
   * }
   * 
   * -> stack.push(10)
   * stack.top = Node {
   *  value: 10,
   *  next: Node {
   *    value: 2,
   *    next: null
   *  }
   * }
   * 
   * -> stack.push(20)
   * stack.top = Node {
   *  value: 20,
   *  next: Node {
   *    value: 10,
   *    next: Node {
   *      value: 2,
   *      next: null
   *    }
   *  }
   * }
   */
  constructor (){
    this.top = null
  }
  push(value) // : añadir el elemento, value, al stack.
  pop() //: sacar un elemento del stack.
  peek()// : obtener el elemento que está el en top del Stack
}
class MinStack  {
  // Your code here:
  //
}

module.exports = {
  Node,
  MinStack
}

