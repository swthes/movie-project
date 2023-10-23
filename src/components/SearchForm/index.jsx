import { useState, useEffect } from "react";
import showCard from '../ShowCard'
export default function SearchForm() {
  const [inputValue, setInputValue] = useState("");
  const [search , setSearch] = useState("arrows");
  const [showdata,setShowData]= useState();
  useEffect(() => {
    async function searchAPI() {
      const reponse = await fetch(`https://api.tvmaze.com/search/shows?q={}`)
      const data = await reponse.json();
      const showData = data.map(s=>s.show)
      setShowData(showData);
    }
    
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
      <input type="text" onChange={handleChange} value={inputValue } required />
      <input type="submit" value="Search" />
    </form>
 
  {showdata.map(s =>s.image? <showCard show={s} key={s.id}/>:"" )}
  </>
   );
}
