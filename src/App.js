import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const title = "App Component";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
