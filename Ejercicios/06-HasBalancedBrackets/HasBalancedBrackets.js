function HasBalancedBrackets(string) {
  // Your code here:
  let response = true
  let hopedBraket = []
  string.split('').forEach(bracket => {

    switch (bracket) {
      case '{':
        hopedBraket.push('}')
        break;
      case '}':
        if(hopedBraket[hopedBraket.length - 1] === '}') {
          hopedBraket.pop()
        } else response = false
        break;
      case '(':
        hopedBraket.push(')')
        break;
      case ')':
        if(hopedBraket[hopedBraket.length - 1] === ')') {
          hopedBraket.pop()
        } else response = false
        break;
      case '[':
        hopedBraket.push(']')
        break;
      case ']':
        if(hopedBraket[hopedBraket.length - 1] === ']'){
          hopedBraket.pop()
        } else response = false
        break;

    }
    console.log(bracket, hopedBraket)
  });
  return response
}
console.log(HasBalancedBrackets("{[]()}"))
// module.exports = HasBalancedBrackets;

/*
{[]()}
to array
forEeach
var openBraquets {[]()}
var hopedBraquet

*/
/*
input: "{[]()}"
output: true

input: "{[(])}"
output: false

input: "{ [ }"
output: false

input: "{ [ ( [ { ( )[ ]{ } } ] ) ] }"
output: true
*/
