import { Link } from "react-router-dom";

function Home() {
  const linkStyle = {
    color: "#1746A2"
  }
  return (
    <>
      <h1>Top TV</h1>
      <span>All about the smaller silver screen</span>
      <ul>
        <li>
          <Link to="/shows" style={linkStyle}>Shows</Link>
        </li>
        <li>
          <Link to="/search" style={linkStyle}>Search</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
