import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeData from '../data.json'; // Import the mock recipe data

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe id from the URL
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe that matches the id from the URL
    const foundRecipe = recipeData.find((recipe) => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => navigate('/')}
        className="text-blue-500 mb-4 hover:text-blue-700"
      >
        Back to Home
      </button>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-80 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold text-blue-800 mb-4">{recipe.title}</h1>
        <p className="text-gray-600 text-base mb-4">{recipe.summary}</p>
        
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Ingredients:</h2>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">Cooking Instructions:</h2>
        <ol className="list-decimal pl-6 text-gray-600">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
