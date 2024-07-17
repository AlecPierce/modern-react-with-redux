import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);
  const [sort, setSort] = useState("asc");

  const currentBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });
    const addedBooks = [...books, response.data];
    setBooks(addedBooks);
  };

  const editBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: title,
    });
    const editedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(editedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
  };

  const sortBook = (a, b) => {
    if (a.title < b.title) {
      if (sort === "asc") {
        return -1;
      } else {
        return 1;
      }
    }
    if (a.title > b.title) {
      if (sort === "asc") {
        return 1;
      } else {
        return -1;
      }
    }
    return 0;
  };

  const valueToShare = {
    books,
    currentBooks,
    createBook,
    editBookById,
    deleteBookById,
    setSort,
    sortBook,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
