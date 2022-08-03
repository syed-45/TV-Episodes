import EpisodeApp from "./components/TVEpisodes";
import episodes from "./episodes.json";
import "./App.css";
import FooterApp from "./AppFooter";

function App(): JSX.Element {
  return (
    <div>
      <div className="main-content">
        {episodes.map((episode) => (
          <EpisodeApp key={episode.name} {...episode} />
        ))}
      </div>
      <FooterApp />
    </div>
  );
}

export default App;
