import "./App.css";
import HookCounter from "./components/HookCounter";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookMouse from "./components/HookMouse";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}

      {/* useEffect */}

      {/* <HookCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      <IntervalHookCounter />
    </div>
  );
}

export default App;
