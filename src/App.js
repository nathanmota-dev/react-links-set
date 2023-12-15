import DarkMode from "./components/DarkMode/DarkMode";
import Header from "./components/Header/Header";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import "./App.css";

const App = () => {
  return (

    <div className="App">
      <header className="App-header">
        <Header />
        <DarkMode />
        <SocialMedia />
      </header>
    </div>

  );
}

export default App;