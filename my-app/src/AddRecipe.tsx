import { useState } from "react";

const API_URL = "https://6a7db151f8b2ed99ca4ea7bf.mockapi.io/Recipes";

function AddRecipe() {
  const [name, setName] = useState<string>("");
  const [prepTimeMinutes, setPrepTimeMinutes] = useState<string>("");
  const [cookTimeMinutes, setCookTimeMinutes] = useState<string>("");
  const [servings, setServings] = useState<string>("");
  const [cuisine, setCuisine] = useState<string>("");
  const [rating, setRating] = useState<string>("");

  const addRecipe = async () => {
    const recipe = {
      name,
      prepTimeMinutes,
      cookTimeMinutes,
      servings,
      cuisine,
      rating,
    };

    console.log(recipe);

    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });
  };
  return (
    <div className="container">
      <form className="border rounded shadow p-4">
        <h2 className="text-warning fw-bold my-3 text-center">Add Recipe</h2>
        <div className="mb-3">
          <label htmlFor="nameTextBox" className="form-label text-warning fw-bold">
            Name:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Recipe Name"
            id="nameTextBox"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="prepTimeTextBox" className="form-label text-warning fw-bold">
            Prep Time:{" "}
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter Preparation Time in Minutes"
            id="prepTimeTextBox"
            value={prepTimeMinutes}
            onChange={(event) => setPrepTimeMinutes(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cookTimeTextBox" className="form-label text-warning fw-bold">
            Cook Time:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Cooking Time in Minutes"
            id="cookTimeTextBox"
            value={cookTimeMinutes}
            onChange={(event) => setCookTimeMinutes(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="servingsTextBox" className="form-label text-warning fw-bold">
            Servings:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Number of Servings"
            id="servingsTextBox"
            value={servings}
            onChange={(event) => setServings(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cuisineTextBox" className="form-label text-warning fw-bold">
            Cuisine:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Cuisine (Asian, Chinese, Italian, etc.)"
            id="cuisineTextBox"
            value={cuisine}
            onChange={(event) => setCuisine(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ratingTextBox" className="form-label text-warning fw-bold">
            Rating:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Level of Difficulty (Easy, Medium, Hard)"
            id="ratingTextBox"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
          />
        </div>

        {/* Control for Add Recipe button */}
        <div className="mt-5">
          <button
            type="button"
            className="btn btn-danger w-100"
            onClick={addRecipe}
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipe;
