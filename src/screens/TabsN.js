import { useState } from "react";
import "./App.css";
import Calculator from "./Calculator";
import FirstTab from "./FirstTab";
import Tab from './Tab';
import Tab4 from "./Tab4";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Tab 4
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Tab/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <FirstTab/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
         <Tab4/>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
         <Calculator/>
        </div>
      </div>
    </div>
  );
}

export default Tabs;