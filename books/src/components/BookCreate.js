import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
  const [input, setInput] = useState("");
  const { createBook } = useBooksContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(input);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="book-create">
      <h3>Book Create</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input value={input} onChange={handleChange} className="input" />
        </label>
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
