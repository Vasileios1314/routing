import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DiscoverPage from "./pages/DiscoverPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>◓ Pokemons ◓</h1>
      <Routes>
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path=":filter" element={<DiscoverPage />} />
        <Route path="/about/:name" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
