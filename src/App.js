import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pre-app";

export default function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" index element={<Home />} />
      </Routes>
    </Router>
  );
}
