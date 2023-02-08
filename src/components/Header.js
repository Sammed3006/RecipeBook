import React from 'react'
import { NavLink } from "react-router-dom";


const Header = (props) => {
    const { search, onInputChange, onSearch } = props;
    return (
        <div className="jumbotron">
            <h1 className="display-1"><span className="material-symbols-outlined icon ">
                restaurant
            </span>Recipe Book</h1>

            <div className="input-group w-50 mx-auto ">
                <input type="text" className="form-control" placeholder="Search Recepies Here" value={search} onChange={onInputChange} />
                <button className="btn btn-dark" onClick={onSearch}>Search </button>
            </div>
            <div className="py-2 headerBottom">
                <NavLink exact to="/profile">
                    PROFILE  </NavLink>
                <NavLink exact to="/saved">SAVED</NavLink>

                <NavLink exact to="/login">LOGIN</NavLink>
                <NavLink exact to="/signin"> SIGN IN</NavLink>

            </div>
        </div>
    )
}

export default Header
