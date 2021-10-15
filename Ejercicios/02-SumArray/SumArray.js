function SumArray(arr, n) {
  // Your code here:
  for (var i = 0; i < arr.length; i++) {
    let current = i + 1
    for (let j = current; j < arr.length; j++) {
      if (arr[i] + arr[j] == n) return true
    }
  }
  return false
}

module.exports = SumArray;
