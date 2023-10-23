import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { ShowCard } from "../../components";
function showpage() {
  const { id } = useParams();
  const [show, setShow] = useState({});
  useEffect(() => {
    async function displayShow() {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setShow(data);
    }
    displayShow();
  }, []);
  return (
    <ShowCard show={ show } />
  );
}

export default showpage;
