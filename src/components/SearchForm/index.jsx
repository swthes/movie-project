import { useState, useEffect } from "react";
import ShowCard from "../ShowCard";
export default function SearchForm() {
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("Flash");
  const [showData, setShowData] = useState([]);
  useEffect(() => {
    async function searchAPI() {
      const reponse = await fetch(
        `https://api.tvmaze.com/search/shows?q=${search}`
      );
      const data = await reponse.json();
      const showData = data.map((s) => s.show);

      setShowData(showData);
    }
    searchAPI();
  }, [search]);
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSearch(inputValue);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={inputValue}
          required
        />
        <input type="submit" value="Search" />
      </form>
      {showData.map((show) =>
        show.image ? <ShowCard show={show} key={show.id} /> : ""
      )}
    </>
  );
}
