import { useState } from "react";
import React from "react";

export default function Races() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
      setToggleState(index);
      console.log(index);
  };
  return (
    <>
    <h1>Races</h1>
    <div className="container">
      <div className="bloc-tabs">
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
          >
          tab 1
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
          >
          tab 2
        </div>
        <div
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
          >
          tab 3
        </div>
        <div
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
          >
          tab 4
        </div>
        <div
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
          >
          tab 5
        </div>

        <div className="content-tabs">

            <div className={toggleState === 1 ? "content active-content" : "content"}>
            <h2>race 1</h2>
            <hr/>
            <p>eeg</p>
            </div>

            <div className={toggleState === 2 ? "content active-content" : "content"}>
            <h2>race 2</h2>
            <hr/>
            <p>bard</p>
            </div>
            <div className={toggleState === 3 ? "content active-content" : "content"}>
            <h2>race 3</h2>
            <hr/>
            <p>rug</p>
            </div><div className={toggleState === 4 ? "content active-content" : "content"}>
            <h2>race 4</h2>
            <hr/>
            <p>fish</p>
            </div><div className={toggleState === 5 ? "content active-content" : "content"}>
            <h2>race 5</h2>
            <hr/>
            <p>bread</p>
            </div>
        </div>
      </div>
    </div>
   </>
  );
}
