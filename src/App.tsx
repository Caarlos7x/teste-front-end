import Home from "./pages/Home";
import Header from "./components/header/Header"; // Add this line to import the Header component
import "./styles/global.scss"

const App = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

export default App;