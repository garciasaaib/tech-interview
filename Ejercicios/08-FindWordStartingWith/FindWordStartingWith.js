
function FindWordStartingWith(book, query) {
  // Your code here:
  let indices = [],
    texto = book.text,
    matched,
    sliceIndex = 0,
    regex = new RegExp(`${query}`, 'i')

  while (regex.test(texto)) { // does exist matches?
    matched = texto.match(regex) // take the match 
    indices.push(matched.index) // push the match in the response
    sliceIndex = matched.index + 1 // move the index
    texto = book.text // create a new text with whitespaces till sliceIndex
      .slice(sliceIndex)
      .padStart(book.text.length) 
  }
  return indices
}

module.exports = FindWordStartingWith;

const book = {
  id: 1,
  text: 'Erase una vez un libro de palabras que era un poco aburrido pero tenia muchas'
}
console.log(FindWordStartingWith(book, 'un'))
