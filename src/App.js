import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Home Page</h1>
            </div>
          }
        ></Route>
        <Route
          path="/info"
          element={
            <div>
              <h1>Info Page</h1>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
