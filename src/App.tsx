import EpisodeApp from "./components/TVEpisodes";
import episodes from "./episodes.json";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="main-content">
      {episodes.map((episode) => (
        <EpisodeApp key={episode.name} {...episode} />
      ))}
    </div>
  );
}

export default App;
