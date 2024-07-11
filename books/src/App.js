import { useEffect } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import useBooksContext from "./hooks/use-books-context";

function App() {
  const { currentBooks } = useBooksContext();
  useEffect(() => {
    currentBooks();
  }, []);

  return (
    <div className="app">
      <h1>Books</h1>
      <BookCreate />
      <BookList />
    </div>
  );
}

export default App;
