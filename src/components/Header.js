import React from 'react'
import { NavLink } from "react-router-dom";


const Header = (props) => {
    const { search, onInputChange, onSearch } = props;
    return (
        <div className="jumbotron">
            <h1 className="display-1"><span class="material-symbols-outlined icon ">
                restaurant
            </span>Recipe Book</h1>

            <div class="input-group w-50 mx-auto ">
                <input type="text" className="form-control" placeholder="Search Recepies Here" value={search} onChange={onInputChange} />
                <button className="btn btn-dark" onClick={onSearch}>Search </button>
            </div>
            <div className="py-2 headerBottom">
               <NavLink exact to="/profile">  
               <span class="material-symbols-outlined profile">
                    person
                </span>  </NavLink>
                <NavLink exact to="/saved"><span class="material-symbols-outlined saved"  >
                    favorite
                </span></NavLink>

                <NavLink exact to="/login"> <button>LOGIN</button></NavLink>
                <NavLink exact to="/signin"> <button>SIGN IN</button></NavLink>

            </div>
        </div>
    )
}

export default Header
