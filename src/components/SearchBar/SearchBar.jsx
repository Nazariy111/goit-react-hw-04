import React from 'react'
import css from './SearchBar.module.css'
import { CiSearch } from "react-icons/ci";

const SearchBar = ({onSubmit}) => {
    
    

    return (
        <header>
            <form onSubmit={onSubmit}>
                <button type="submit" className={css.searchBtn}><CiSearch className={css.searchIcon} /></button>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="query"
                />
                
            </form>
        </header>

    )
}

export default SearchBar