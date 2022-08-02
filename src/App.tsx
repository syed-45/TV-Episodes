import EpisodeApp from "./components/TVEpisodes";
import episodes from "./episodes.json"
import "./App.css"


function App(): JSX.Element {
  return(
    <>      
      <EpisodeApp {...episodes[0]}/>
    </>
  )
}

export default App;
