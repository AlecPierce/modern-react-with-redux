import { useState } from "react";

function BookEdit({ bookToEdit, onSubmit }) {
  const [input, setInput] = useState(bookToEdit.title);

  const handleEdit = (event) => {
    event.preventDefault();
    onSubmit(bookToEdit.id, input);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="book-edit" onSubmit={handleEdit}>
      <div>
        <input
          type="text"
          name="title"
          value={input}
          onChange={handleChange}
          className="input"
        />
        <button type="submit" className="button is-primary">
          Save
        </button>
      </div>
    </form>
  );
}

export default BookEdit;
