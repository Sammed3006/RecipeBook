import React from 'react'
import { useSelector } from 'react-redux'
import RecipeItem from './RecipeItem'
 

const Saved=()=> {
    const  savedRecipe=useSelector(state => state.recipebook)
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
    {savedRecipe.map(item => (
      <RecipeItem name={item.recipe.label} image={item.recipe.image} ingredientLines={item.recipe.ingredientLines}/>
    ))}
   
    <h1>saved</h1>
  </div>
  )
}

export default Saved
