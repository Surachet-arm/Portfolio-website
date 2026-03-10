// src/App.jsx
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="select-none caret-transparent">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;