import Console from "./components/console";
import "./style.css";
import Profile from "./components/profile";

function App(): JSX.Element {
  return (
    <div className="entireContainer">
      <Profile />
      <div className="consoleContainer">
        <Console />
      </div>
    </div>
  );
}

export default App;
