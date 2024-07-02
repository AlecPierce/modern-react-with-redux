import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  const handleChange = (term) => {
    console.log(term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} onChange={handleChange} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
