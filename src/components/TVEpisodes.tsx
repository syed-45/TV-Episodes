import { IEpisode } from "../types";
import { createEpisodeCode } from "../utils/createEpisodeCode";
import { removePelement } from "../utils/removePelement";

function EpisodeApp(props: IEpisode): JSX.Element {
  return (
    <div className="card-border">
      <h2>{props.name}</h2>
      <img className="imgs" src={props.image.medium} alt="episodeImage"></img>
      <h3>{createEpisodeCode(props.season, props.number)}</h3>
      <p> {removePelement(props.summary)}</p>
    </div>
  );
}

export default EpisodeApp;
