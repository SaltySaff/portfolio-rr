import "./css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Quizzical from "./pages/Quizzical";
import ScrollToAnchor from "./components/ScrollToAnchor";

function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quizzical" element={<Quizzical />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
