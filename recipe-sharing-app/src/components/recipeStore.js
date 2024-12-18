import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Store all recipes here
  searchTerm: '', // Search term to filter recipes
  filteredRecipes: [], // Filtered recipes will be dynamically computed
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  // Filter recipes based on the search term
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
  
  // Add a new recipe
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.filteredRecipes, newRecipe], // Also update filtered list
  })),
  
  // Update an existing recipe
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
    filteredRecipes: state.filteredRecipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ), // Update filteredRecipes if the updated recipe exists in it
  })),
  
  // Delete a recipe by its id
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
    filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== id), // Remove from filtered list as well
  })),
  
  // Set the list of recipes (e.g., when fetching from an API)
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }), // Ensure both lists are set
}));

export default useRecipeStore;
