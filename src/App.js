import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import LessonPage from "./pages/LessonPage";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/lesson/:id" element={<LessonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
