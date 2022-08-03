import EpisodeApp from "./components/TVEpisodes";
import episodes from "./episodes.json";
import "./App.css";
import FooterApp from "./components/AppFooter";
import HeaderApp from "./components/AppHeader";

function App(): JSX.Element {
  return (
    <div>
      <HeaderApp/>
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
