import React from 'react';
import useRecipeStore from './RecipeStore';

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipe);
    return ( 
        <>
        {recipes.map(recipe => (
            <div key= {recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
            </div>
        ))}
        </>
     );
};

export default RecipeList;
