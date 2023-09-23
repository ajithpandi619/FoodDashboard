import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Section></Section>
    </div>
  );
}

export default App;
