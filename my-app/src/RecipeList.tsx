import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Recipes = {
  name: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  cuisine: string;
  rating: number;
  id: string;
};
function RecipeList() {
  const [recipes, setRecipes] = useState<Recipes[]>([]);

  const fetchRecipes = async () => {
    const response = await fetch(
      "https://6a7db151f8b2ed99ca4ea7bf.mockapi.io/Recipes",
    );
    const data = await response.json();
    setRecipes(data);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="p-3">
      <h2 className="fw-bold">List of Recipes:</h2>

      <table className="table table-bordered table-striped table-hover">
        <thead className="table-success">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Preparation Time</th>
            <th>Cook Time</th>
            <th>Servings</th>
            <th>Cuisine</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td>{recipe.name}</td>
              <td>{recipe.prepTimeMinutes}</td>
              <td>{recipe.cookTimeMinutes}</td>
              <td>{recipe.servings}</td>
              <td>{recipe.cuisine}</td>
              <td>{recipe.rating}</td>
              <td>
                <Link to={`/recipes-edit/${recipe.id}`} className="btn btn-primary">
                Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
