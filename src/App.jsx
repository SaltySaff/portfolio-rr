import "./css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Quizzical from "./pages/Quizzical";
import Todo from "./pages/Todo";
import MovieWatchlist from "./pages/MovieWatchlist";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToAnchor from "./components/ScrollToAnchor";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quizzical" element={<Quizzical />} />
          <Route path="todo" element={<Todo />} />
          <Route path="movie-watchlist" element={<MovieWatchlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
