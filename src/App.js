import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ToDoListPage from "./pages/toDoList";
import MemoPage from "./pages/memo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="App__nav">
          <Link to="/">Home</Link>
          <Link to="to-do">To Do List</Link>
          <Link to="memo">Memo</Link>
        </nav>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <h1>Home</h1>
                <span>This is a sample, click nav menu.</span>
              </>
            }
          ></Route>
          <Route path="/to-do" element={<ToDoListPage />}></Route>
          <Route path="/memo" element={<MemoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
