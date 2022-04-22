import "./App.css";
import Tab from "./components/Tab/Tab";
import Toggle from "./components/Toggle/Toggle";
import Slider from "./components/Slider/Slider";
import Input from "./components/Input/Input";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  return (
    <div id="component-container">
      <div id="toggle-component">
        <div className="title">Toggle</div>
        <div>
          <Toggle />
        </div>
      </div>

      <div id="tab-component">
        <div className="title">Tab</div>
        <div>
          <Tab />
        </div>
      </div>

      <div id="slider-component">
        <div className="title">Slider</div>
        <div>
          <Slider />
        </div>
      </div>

      <div id="input-component">
        <div className="title">Input</div>
        <div>
          <Input />
        </div>
      </div>

      <div id="dropdown-component">
        <div className="title">Dropdown</div>
        <div>
          <Dropdown />
        </div>
      </div>
    </div>
  );
}

export default App;
