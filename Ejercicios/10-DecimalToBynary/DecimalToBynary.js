function DecimalToBynary(num) {
  // Your code here:
  if (num == 1) return "1"
  else if (num == 0) return "0"
  return DecimalToBynary(Math.trunc(num/2))+`${num%2}`
}
console.log(DecimalToBynary(22))
console.log(DecimalToBynary(7))
console.log(DecimalToBynary(2))
// module.exports = DecimalToBynary;
