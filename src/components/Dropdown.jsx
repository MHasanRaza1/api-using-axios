import React from 'react'
import './Dropdown.css'

const Dropdown = ({categories, onChange}) => {
  return (
    <div className='dropdown-wrapper' onChange={onChange}>
        <select>
        <option value="All">All</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown