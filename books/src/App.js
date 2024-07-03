import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Road to React" },
    { id: 2, title: "The Road to GraphQL" },
  ]);

  const createBook = (title) => {
    const newBook = {
      id: books.length + 1,
      title,
    };
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleEdit = (id, title) => {
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          book.title = title;
        }
        return book;
      })
    );
  };

  return (
    <div>
      <BookCreate createBook={createBook} />
      <BookList books={books} onEdit={handleEdit} />
    </div>
  );
}

export default App;
