
export default function ShowCard({ show }) {

  return (
    <div className="show-card">
          <div>
              <img src={(show.image)?`${show.image.medium}`:""}></img>
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
