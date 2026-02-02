import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="app">
      <Navbar />

      <section className="hero">
        <h1>Hello Amrutha 👋</h1>
        <p>My first React app is running</p>
      </section>

      <About />
      <Skills />
    </div>
  );
}

export default App;
