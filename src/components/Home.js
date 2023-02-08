import React, {useState, useEffect} from 'react'
import Header from './Header'
import axios from 'axios'
import Recipes from './Recipes';
import { useDispatch } from 'react-redux'
import { saveRecipe } from '../redux/RecipeBookSlice';

export default function Home() {

    const [search, setSearch] = useState("jalebi")
  const [recipes, setRecipes] = useState([])

  const dispatch=useDispatch();

  const APP_ID = "df5f3f1a";
  const APP_KEY = "457c298186d9fa4cc705fafbdb5c1924";


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const result = await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    setRecipes(result.data.hits)
  }
  const onInputChange = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)

  }
  const onSearch = () => {
    fetchData();
  }
  console.log(recipes,"receipes");

  const onSaveItem = (item) =>{
    console.log(item)
    dispatch(saveRecipe(item))

  }
  return (
    <div>
        <Header search={search} onInputChange={onInputChange} onSearch={onSearch} />

        <div className="container py-2">
          <Recipes recipes={recipes} onSaveItem={onSaveItem} />
        </div>
    </div>
  )
}
