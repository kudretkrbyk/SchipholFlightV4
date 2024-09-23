import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MyFlights from "./Pages/MyFlights";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" element={<Home></Home>}></Route>
          <Route path="/myFlights" element={<MyFlights></MyFlights>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
