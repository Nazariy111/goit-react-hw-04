import React from 'react'
import css from './SearchBar.module.css'
import { CiSearch } from "react-icons/ci";
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({handleSearch}) => {
    
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const inputValue = form.elements.query.value;
        if (inputValue.trim() === '') {
            toast.error("The field can't be empty!");
            form.reset();
            return;
        }
        handleSearch(inputValue);
        form.reset();
    };

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <button type="submit" className={css.searchBtn}><CiSearch className={css.searchIcon} /></button>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="query"
                />
                <Toaster/>
                
            </form>
        </header>

    )
}

export default SearchBar