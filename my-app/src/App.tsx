
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RecipeList from "./RecipeList";
import Home from "./Home";
import About from "./About";
import AddRecipe from "./AddRecipe";
import EditRecipe from "./EditRecipe";

function App() {
  return (
    <Router>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#f7fde3" }}
      >
        <div className="container-fluid px-4">
          <Link className="navbar-brand fw-bold" to="/">
            🍴 RecipeHub
          </Link>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/recipes">
                Recipes
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="btn btn-success fw-semibold ms-2"
                to="/recipes-add"
              >
                + Add Recipe
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/recipes-add" element={<AddRecipe />} />
            <Route path="/recipes-edit/:id" element={<EditRecipe />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
