import React from 'react'
import { useDispatch } from 'react-redux'
import { saveRecipe } from '../redux/RecipeBookSlice'

const RecipeItem = (props) => {
  const { name, image, ingredientLines } = props
  const dispatch=useDispatch();

  const saveItem=(value)=>{
    // dispatch(saveRecipe(item))
    console.log(value)

  }

  return (
    <div className="col-md-3">
      <div className="card py-2 text-center">
        <img src={image} className="img-fluid w-50 mx-auto" />
        <div className="card-body">
          <h5>{name}</h5>
        </div>
        <div>
          <span class="material-symbols-outlined" value={props} onClick={(value)=>saveItem(value)}>
            favorite
          </span>
        </div>
        <ul className="list-group list-group-flush">
          {
            ingredientLines.map(ingredient => (
              <li className="list-group-item">{ingredient}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default RecipeItem
