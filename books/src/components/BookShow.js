import BookEdit from "./BookEdit";
import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
  const [isEditing, setIsEditing] = useState(false);
  const { deleteBookById } = useBooksContext();
  const handleDelete = () => {
    deleteBookById(book.id);
  };
  const renderEditForm = (e) => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  let content = <h3>{book.title}</h3>;
  if (isEditing) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
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
