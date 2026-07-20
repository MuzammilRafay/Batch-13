import { useState } from "react";
import "./App.css";
import DisplayCount from "./components/DisplayCount";

function App() {
  // let count = 0;
  const [count, setCount] = useState(0); // [getValue,setValue]
  const [isShowCount, setIsShowCount] = useState(true);

  return (
    <div className="App">
      {/* <p>Count: {count}</p> */}
      {/* <DisplayCount countValue={count} name="asdads" age="123123" /> */}
      <DisplayCount countValue={count} />
      {isShowCount === true && (
        <button
          onClick={function () {
            // count = count + 1;
            // count++;

            // set count behind the scene piche function ko dubara call karega

            // call hone ko kehte hein = re-render
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      )}

      <br />
      <button
        onClick={() => {
          // true ko false kardega or false ko true kardega
          setIsShowCount(!isShowCount);
        }}
      >
        Show/hide count btn
      </button>
    </div>
  );
}

export default App;
