import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Saved from './components/Saved';
import Profile from './components/Profile';
import Login from './components/Login';
import SignIn from './components/SignIn';




function App() {

  const [search, setSearch] = useState("jalebi")
  const [recipes, setRecipes] = useState([])

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

  return (
    <Router>
      <div className="App">
        <Header search={search} onInputChange={onInputChange} onSearch={onSearch} />
        <Routes>
        <Route exact path="/" element={<App/>} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/saved" element={<Saved />} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signin" element={<SignIn/>} />

        </Routes>
        <div className="container py-2">
          <Recipes recipes={recipes} />
        </div>
      </div>
    </Router>
  );
}

export default App;
