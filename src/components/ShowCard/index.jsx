export default function ShowCard({ Show }) {
const [show, setShow] = useState({})
    setShow(Show)
  return (
    <div className="show-card">
          <div>
              <img src={(show.image)?`${show.image.meduim}`:""}></img>
          </div>
      <div>
              <div>{show.rating.average}</div>
              <h2>{show.name}</h2>
              <em>{show.language}, { show.premiered}</em>
              <div dangerouslySetInnerHTML={{__html:show.summary}}></div>
      </div>
    </div>
  );
}
