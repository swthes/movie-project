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
          <link to="/shows" style={linkStyle}>Shows</link>
        </li>
        <li>
          <link to="/search" style={linkStyle}>Search</link>
        </li>
      </ul>
    </>
  );
}

export default Home;
