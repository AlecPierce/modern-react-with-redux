import BookEdit from "./BookEdit";
import BookShow from "./BookShow";

function BookList({ books, onEdit }) {
  function renderBooks() {
    return books.map((book) => {
      return (
        <div key={book.id}>
          <BookEdit bookToEdit={book} editBook={onEdit} />
          <BookShow book={book} />
        </div>
      );
    });
  }
  const bookList = renderBooks(books);
  return (
    <div>
      <h1>Book List</h1>
      {bookList}
    </div>
  );
}

export default BookList;
