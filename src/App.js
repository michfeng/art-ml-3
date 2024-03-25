import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Nostalgia from "./pages/Nostalgia";
import Whimsical from "./pages/Whimsical";
import Nature from './pages/Nature';
import Impermanence from "./pages/Impermanence";
import Feral from "./pages/Feral";

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        <Router>
          <NavBar />
            <Routes>
                <Route exact path="/art-ml-3" element={<Nostalgia />} />
                <Route path="/art-ml-3/nostalgia" element={<Nostalgia />} />
                <Route
                    path="/art-ml-3/joy-of-nature"
                    element={<Nature />}
                />
                <Route path="/art-ml-3/whimsical" element={<Whimsical />} />
                <Route
                    path="/art-ml-3/impermanence"
                    element={<Impermanence />}
                />
                <Route
                    path="/art-ml-3/wild-and-feral"
                    element={<Feral />}
                />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
