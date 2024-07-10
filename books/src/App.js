import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Road to React" },
    { id: 2, title: "The Road to GraphQL" },
  ]);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });
    const addedBooks = [
      ...books,
      {
        id: response.data.id,
        title: response.data.title,
      },
    ];
    setBooks(addedBooks);
  };

  const handleEdit = (id, title) => {
    const editedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: title };
      }
      return book;
    });
    setBooks(editedBooks);
  };

  const deleteBookById = (id) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
  };

  return (
    <div className="app">
      <h1>Books</h1>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onEdit={handleEdit} onDelete={deleteBookById} />
    </div>
  );
}

export default App;
