import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "#e3f2fd" }}
          data-bs-theme="light"
        >
          <div className="container-fluid">
            <a className="navbar-brand fw-bold" href="#">
              Ashham
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex" id="navbarNav">
              <ul className="navbar-nav d-flex w-100">
                <li className="nav-item">
                  <Link className="nav-link active fw-bold" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/contact">
                    Contact
                  </Link>
                </li>
                <li
                  className="nav-item ms-auto rounded-3 fw-bold"
                  style={{ background: "Black" }}
                >
                  <Link className="nav-link text-white" to="/contact">
                    Let's Talk
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="text-center py-3 bg-dark text-light">
          &copy; All Rights Reserved Ashham Shingeri - 2026
        </footer>
      </div>
    </Router>
  );
}

export default App;
