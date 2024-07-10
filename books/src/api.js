import axios from "axios";

const apiUrl = "http://localhost:3001/api/books";

async function postBook(bookData) {
  try {
    const response = await axios.post(`${apiUrl}`, {
      title: "digimon",
    });

    if (!response.ok) {
      throw new Error("Failed to create book");
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
//     const response = await axios.post(`${apiUrl}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ title: "digimon" }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to create book");
//     }

//     return response.books;
//   } catch (error) {
//     console.error(error);
//   }
// }

async function readBooks() {
  try {
    const response = await fetch(`${apiUrl}`);

    if (!response.ok) {
      throw new Error("Failed to read books");
    }

    return response.books;
  } catch (error) {
    console.error(error);
  }
}

async function updateBook(id, bookData) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    });

    if (!response.ok) {
      throw new Error("Failed to update book");
    }

    return response.books;
  } catch (error) {
    console.error(error);
  }
}

async function deleteBook(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete book");
    }

    return response.ok;
  } catch (error) {
    console.error(error);
  }
}

export { postBook, readBooks, updateBook, deleteBook };
