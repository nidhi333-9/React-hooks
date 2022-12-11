import React from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";
import CounterOne from "./components/CounterOne";
import CounterThree from "./components/CounterThree";
import CounterTwo from "./components/CounterTwo";
import DataFetching from "./components/DataFetching";
import HookCounter from "./components/HookCounter";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookMouse from "./components/HookMouse";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
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
      {/* <IntervalHookCounter /> */}

      {/* Data fetching using useEffect */}
      {/* <DataFetching /> */}

      {/* useContext */}

      {/* <UserContext.Provider value={"Nidhi"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* useReducer */}

      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      <CounterThree />
    </div>
  );
}

export default App;
