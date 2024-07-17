import useBooksContext from "../hooks/use-books-context";
import { useState } from "react";

function BookSort() {
  const [sortAsc, setSortAsc] = useState(true);
  const { setSort } = useBooksContext();

  const handleClick = (event) => {
    event.preventDefault();
    setSortAsc(!sortAsc);
    setSort(sortAsc ? "desc" : "asc");
  };

  return (
    <div>
      <button onClick={handleClick} className="button">
        Sort {sortAsc ? "Desc" : "Asc"}
      </button>
    </div>
  );
}

export default BookSort;
