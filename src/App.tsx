import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsMobile from "./pages/ProjectsMobile";
import ProjectsQA from "./pages/ProjectsQA";
import ProjectStar from "./pages/ProjectStar";
import './index.css';

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Home />
        <About/>
        <ProjectsMobile/>
        <ProjectsQA/>
        <ProjectStar/>
      </main>
      <Footer />
    </>
  );
}

export default App;