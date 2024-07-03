import { useState } from "react";

function BookCreate({ createBook }) {
  const [input, setInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(input);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <h1>Book Create</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={input}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
