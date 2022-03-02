import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";

function App() {
  return (
    <>
      <Router>
        <Link to="/">Go Home</Link>
        <Link to="/about">about page</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:user" element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
