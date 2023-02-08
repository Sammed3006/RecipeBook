
import React from 'react'
import RecipeItem from './RecipeItem'

const Recipes = (props) => {
  const { recipes } = props
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {recipes.map(item => (
        <RecipeItem name={item.recipe.label} image={item.recipe.image} ingredientLines={item.recipe.ingredientLines}/>
      ))}
    </div>
  )
}

export default Recipes

