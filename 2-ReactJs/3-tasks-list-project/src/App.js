import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div id="main" className="card">
            <div className="card-content">
              <span className="card-title">Task List</span>
              <form id="task-form" action="">
                <div className="row">
                  <div className="input-field col s12">
                    <input type="text" name="task" id="task" />
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
                {/* <!-- <li className="collection-item">
                  List Item
                  <a href="#" className="delete-item secondary-content">
                    <i className="fa fa-remove"></i>
                  </a>
                </li> --> */}
              </ul>
              <a className="clear-tasks btn black">Clear Tasks</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
