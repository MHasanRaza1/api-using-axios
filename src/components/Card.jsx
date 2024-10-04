import React from 'react'
import './Card.css'

const Card = ({carDetail}) => {   
    const {make, model, year, color, price, horsepower} = carDetail;
  return (
    <div className='card-wrapper'>
        <div className="img">
            <img src="https://fakeimg.pl/500x500/cccccc" alt="" />
        </div>
        <div className="details">
            <h2>{make} {model}</h2>
            <p><span>Color:</span> {color}</p>
            <p><span>Year:</span> {year}</p>
            <p><span>Horsepower:</span> {horsepower}</p>
            <p><span>Price:</span> {price}</p>
        </div>
    </div>
  )
}

export default Card