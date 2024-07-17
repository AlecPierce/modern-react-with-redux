import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  const { books, sortBook } = useBooksContext();

  const renderedBooks = books
    .sort((a, b) => {
      return sortBook(a, b);
    })
    .map((book) => {
      return <BookShow key={book.id} book={book} />;
    });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
