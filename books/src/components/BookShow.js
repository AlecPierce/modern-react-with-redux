import BookEdit from "./BookEdit";
import { useState } from "react";
import "./BookShow.css";

function BookShow({ book, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const handleDelete = () => {
    onDelete(book.id);
  };
  const renderEditForm = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleSubmit = (id, title) => {
    onEdit(id, title);
    setIsEditing(false);
  };

  let content = <h3>{book.title}</h3>;
  if (isEditing) {
    content = <BookEdit bookToEdit={book} onSubmit={handleSubmit} />;
  }
  return (
    <div className="book-show">
      <img
        alt="books"
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      ></img>
      <div>{content}</div>
      <div className="actions">
        <button onClick={renderEditForm} className="edit">
          Edit
        </button>
        <button onClick={handleDelete} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
