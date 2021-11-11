function mdArraySum(arr) {
  // Your code here:
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if(!Array.isArray(arr[i])) sum = sum + arr[i]
    else sum = sum + mdArraySum(arr[i])
  }
  return sum 
}

module.exports = mdArraySum;

