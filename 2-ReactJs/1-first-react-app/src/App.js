import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* Component = Parts */}
      {/* Header Component */}
      {/* we are passing the btnName to children component */}
      <Header btnName="Get Started 1" valueTwo="AAAAA" />
      {/* Content Component */}
      <Content />
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
