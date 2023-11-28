import "./App.css";
import HomePage from "./Components/HomePage/homepage.jsx";
import Playlist from "./Components/Playlist/playlist.jsx";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/playlist" component={Playlist} />
      </Switch>
    </div>
  );
}

export default App;
