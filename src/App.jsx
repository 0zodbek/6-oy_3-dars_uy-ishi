import react, { useState } from "react";
import "./App.css";
import SocialMediaPost from "./assets/components/like/Index";
function App() {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const [counterState, setCounterState] = useState(0);
  let counter = 0;
  function handleIncrement() {
    setCounterState(counterState + 1);
  }
  function handleDecrement() {
    setCounterState(counterState - 1);
  }

  return (
    <>
      <div className="wrapper_counter">
        <h1>{counterState}</h1>

        <div className="buttons">
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>
      <div className="tab-container">
        <div className="tabs">
          <button
            className={`tab ${activeTab === "Tab1" ? "active" : ""}`}
            onClick={() => handleTabClick("Tab1")}
          >
            Tab 1
          </button>
          <button
            className={`tab ${activeTab === "Tab2" ? "active" : ""}`}
            onClick={() => handleTabClick("Tab2")}
          >
            Tab 2
          </button>
          <button
            className={`tab ${activeTab === "Tab3" ? "active" : ""}`}
            onClick={() => handleTabClick("Tab3")}
          >
            Tab 3
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "Tab1" && (
            <div id="Tab1" className="content active">
              <h2>Tab 1 Content</h2>
              <p>This is the content of Tab 1.</p>
            </div>
          )}
          {activeTab === "Tab2" && (
            <div id="Tab2" className="content active">
              <h2>Tab 2 Content</h2>
              <p>This is the content of Tab 2.</p>
            </div>
          )}
          {activeTab === "Tab3" && (
            <div id="Tab3" className="content active">
              <h2>Tab 3 Content</h2>
              <p>This is the content of Tab 3.</p>
            </div>
          )}
        </div>
      </div>
      <SocialMediaPost/>
    </>
  );
}

export default App;
