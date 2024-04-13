import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  
  const onSubmit = (event) => {
    event.preventDefault();
    const query = event.currentTarget.elements.query.value.trim();
    if (query === '') {
      toast.error("The field can't be empty!");
    };
    event.currentTarget.reset();
  };
  
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <Toaster/>
    </>
  )
}

export default App
