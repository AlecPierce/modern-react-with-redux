import { useState } from "react";

function BookEdit({ bookToEdit, editBook }) {
  const [input, setInput] = useState(bookToEdit.title);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    editBook(bookToEdit.id, input);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const renderEditForm = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <button onClick={renderEditForm}>Edit</button>
      <form onSubmit={handleEdit}>
        {isEditing ? (
          <div>
            <input
              type="text"
              name="title"
              value={input}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default BookEdit;
