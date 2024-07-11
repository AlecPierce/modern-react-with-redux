import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
  const [input, setInput] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleEdit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, input);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="book-edit" onSubmit={handleEdit}>
      <div>
        <input value={input} onChange={handleChange} className="input" />
        <button className="button is-primary">Save</button>
      </div>
    </form>
  );
}

export default BookEdit;
