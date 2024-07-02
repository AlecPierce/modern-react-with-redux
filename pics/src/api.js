import axios from "axios";

const searchImages = async (term) => {
  const resposne = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID kCoZjFJal4IQCdiz-4hSZH5Syr6FugwzozsIKNnAYwI",
    },
    params: {
      query: term,
    },
  });

  return resposne.data.results;
};

export default searchImages;
