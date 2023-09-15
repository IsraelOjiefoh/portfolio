import "./App.css";
import Home from "./components/home";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
    
          <Home />
        </div>
      
        <Footer />
    </>
  );
}

export default App;
