interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: {
    average: number;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: {
    self: {
      href: string;
    };
  };
}

function EpisodeApp(props: IEpisode): JSX.Element {
  return (
    <div className="card-border">
      <h2>{props.name}</h2>
      <img className="imgs" src={props.image.medium} alt="episodeImage"></img>
      <h3>episode season + number</h3>
      <p> description</p>
    </div>
  );
}

export default EpisodeApp;
