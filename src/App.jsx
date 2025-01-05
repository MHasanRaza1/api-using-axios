import React, { useEffect, useState } from 'react'
import './App.css'
import Dropdown from './components/Dropdown'
import Searchbar from './components/Searchbar'
import Card from './components/Card'
import axios from 'axios'

const App = () => {
  const [car, setCar] = useState([]);
  const [category, setCategory] = useState([]);
  const [filterCar, setFilterCar] = useState([]);
  const [search, setSearch] = useState('');
  const [isFound, setIsFound] = useState(false)
  const getData = async () => {
    try {
      const data = await axios.get('https://www.freetestapi.com/api/v1/cars');
      const res =  data?.data;
      setCar(res)
      setFilterCar(res)
      const categories = [... new Set(res.map((item) => item.make))];
      setCategory(categories)
    }
    catch (e) {
      console.log(e)
    }
  }

  const handleSelect = (cat) => {
    if (cat === 'All') {
      setFilterCar(car)
    }
    else {
      const filteredCar = car.filter((item) => item.make === cat);
      setFilterCar(filteredCar)
    }
  }

  const handleSearch = () => {
    const filterSearch = car.filter((item) => {
      return (
        item.make.toLowerCase().includes(search.toLowerCase()) || item.model.toLowerCase().includes(search.toLowerCase())
      )
    });
    if (filterSearch.length === 0) {
      setIsFound(true);
    }
    else {
      setFilterCar(filterSearch);
      setIsFound(false);
    }
  }

  const handleEnter = (e) => {
    if(e.key == "Enter"){
      handleSearch()
    }
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className='app-wrapper'>
      <div className='top-wrapper'>
        <Searchbar value={search} onChange={(e) => setSearch(e.target.value)} onClick={handleSearch} onKeyDown = {handleEnter}/>
        <Dropdown categories={category} onChange={(e) => handleSelect(e.target.value)} />
      </div>
      <div className="card-section">
        {isFound ? <p>Not Found</p> :
          <>
            {filterCar.map((item, index) => {
              return (
                <Card key={index} carDetail={item} />
              )
            })}
          </>
        }
      </div>
    </div>
  )
}

export default App