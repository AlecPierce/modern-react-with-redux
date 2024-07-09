import { useState } from "react";

function BookCreate({ onCreate }) {
  const [input, setInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(input);
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
          <input
            type="text"
            name="title"
            value={input}
            onChange={handleChange}
            className="input"
          />
        </label>
        <button type="submit" className="button">
          Create
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
