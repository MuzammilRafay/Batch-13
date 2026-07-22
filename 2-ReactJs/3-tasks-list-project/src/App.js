import { useState } from "react";
import "./App.css";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [allTasksArray, setAllTasksArray] = useState([]);

  console.log(allTasksArray, "allTasksArray");
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div id="main" className="card">
            <div className="card-content">
              <span className="card-title">Task List</span>
              <form
                id="task-form"
                action=""
                onSubmit={(event) => {
                  event.preventDefault();

                  // if (!taskInput) {
                  if (taskInput === "") {
                    alert("please fill the task input field");
                    return;
                  }

                  const newArrayTemp = [...allTasksArray]; //create new array with three dots
                  newArrayTemp.push(taskInput);
                  setAllTasksArray(newArrayTemp); //new array set hora hai jane do

                  setTaskInput("");
                }}
              >
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      type="text"
                      name="task"
                      id="task"
                      onChange={(event) => {
                        event.preventDefault();
                        setTaskInput(event.target.value);
                      }}
                      value={taskInput}
                    />

                    <label htmlFor="task">New Task</label>
                  </div>
                </div>
                <input type="submit" value="Add Task" className="btn" />
                {/* <!-- <button type="submit" value="Add Task" className="btn"> --> */}
              </form>
            </div>
            <div className="card-action">
              <h5 id="task-title">Tasks</h5>
              <div className="input-field col s12">
                <input type="text" name="filter" id="filter" />
                <label htmlFor="filter">Filter Task</label>
              </div>
              <ul className="collection">
                {allTasksArray.map((single, index) => {
                  return (
                    <li className="collection-item" key={index}>
                      {single}
                      <a href="#" className="delete-item secondary-content">
                        <i className="fa fa-remove"></i>
                      </a>
                    </li>
                  );
                })}
              </ul>
              <a
                className="clear-tasks btn black"
                onClick={function (e) {
                  e.preventDefault();

                  if (window.confirm("Are you sure ?")) {
                    setAllTasksArray([]);
                  }
                }}
              >
                Clear Tasks
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
