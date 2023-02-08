import React from 'react'
import { useDispatch } from 'react-redux'
import { saveRecipe } from '../redux/RecipeBookSlice'

const RecipeItem = (props) => {
  const { name, image, ingredientLines, onClick } = props
  const dispatch=useDispatch();

  const saveItem=(value)=>{
    console.log(value)
  }

  return (
    <div className="col-md-3">
      <div className="card py-2 text-center">
        <img src={image} className="img-fluid w-50 mx-auto" alt=''/>
        <div className="card-body">
          <h5>{name}</h5>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" value={props} onClick={onClick}>
          Click to Save</button>
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
