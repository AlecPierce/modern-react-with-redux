import BookShow from "./BookShow";

function BookList({ books, onEdit, onDelete }) {
  console.log(books);
  const renderedBooks = books.map((book) => {
    return (
      <BookShow book={book} onEdit={onEdit} onDelete={onDelete} key={book.id} />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
