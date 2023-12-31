import Home from "./components/Home/home";
import About from "./components/About/About";
import Projects from "./components/projects/projects";
import Services from "./components/services/services";
import NotFound from "./components/not_found/not_found";
import Layout from "./components/About/layout/layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              } // Wrap Home component in Layout
            />
            <Route
              path="/about"
              element={
                <Layout>
                  <About />
                </Layout>
              }
            />
            <Route
              path="/projects"
              element={
                <Layout>
                  <Projects />
                </Layout>
              }
            />
            <Route
              path="/services"
              element={
                <Layout>
                  <Services />
                </Layout>
              }
            />
            <Route path="*" element={<NotFound />} /> {/* Use element */}
          </Routes>
        <Footer/>
        </Router>
      </div>
    </>
  );
}

export default App;
