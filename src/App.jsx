import "./App.css";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <div className="App">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="home">
          <Home />
        </div>
      </div>
        <Footer />
    </>
  );
}

export default App;
