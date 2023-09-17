import Home from "./components/home";
import About from "./components/About/About";
import Projects from "./components/projects";
import Services from "./components/services";
import NotFound from "./components/not_found";
import Layout from "./components/About/layout/layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
        </Router>
      </div>
    </>
  );
}

export default App;
