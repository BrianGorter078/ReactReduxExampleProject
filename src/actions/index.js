export function selectBook(book){
  //Need to return a selection
  return {
    type: "BOOK_SELECTED",
    payload: book
  }
}
