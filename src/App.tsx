import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import ProjectsMobile from "./pages/ProjectsMobile";
import ProjectsQA from "./pages/ProjectsQA";
import ProjectStar from "./pages/ProjectStar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile" element={<ProjectsMobile />} />
        <Route path="/qa" element={<ProjectsQA />} />
        <Route path="/star" element={<ProjectStar />} />
      </Routes>
    </>
  );
}

export default App;
