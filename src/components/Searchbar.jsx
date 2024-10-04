import React from 'react'
import './Searchbar.css'
import { FaSearch } from 'react-icons/fa'

const Searchbar = ({onChange, value, onClick, onKeyDown}) => {
  return (
    <div className='search-wrapper'>
        <input onKeyDown={onKeyDown} type="search" name="search" placeholder="Search Car" onChange={onChange} value={value}/>
        <FaSearch className='search-icon' onClick={onClick} />
    </div>
  )
}

export default Searchbar