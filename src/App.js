import React, { useState, useEffect } from 'react';

import SearchBox from './components/SerachBox'

function App() {
  const countriesData =  [
    { label: "Singapore", value: 1 },
    { label: "Malaysia", value: 2 },
    { label: "Thailand", value: 3 },
    { label: "Indonesia", value: 4 },
    { label: "Phillippines", value: 5 },
    { label: "Russia", value: 6 },
    { label: "Mexico", value: 7 },
    { label: "Japan", value: 8 },
    { label: "Germany", value: 9 },
    { label: "India", value: 10 },
  ] ;
const [countries, setCountries] = useState(countriesData);
const [filterCountries, setFilterCountries] = useState(countriesData);
const [maxval, setMaxval] = useState(5)
const [selcountry, setSelcountry] = useState('')
const [showData, setData] = useState(false)
const [isloggedin, setIsloggedin] = useState(false)
const loadMoreOption = () => {
  setMaxval((maxval+5))
}
const filterCountriesData = data => {
  console.log("Datta==",data)
  let country = countries.filter((res) => res.label.toLowerCase().indexOf(data) !== -1)
  setFilterCountries(country)
  setSelcountry(data)
  setData(true)
}
const countrySelected = val => {
console.log(">>>>",val)
setSelcountry(val)
setData(false)
}
const checklogin = () => {
  setIsloggedin(true)
}
const checklogout = () => {
  setIsloggedin(false)
}
  return (
    <div className="App">
  
      <SearchBox countriesList={filterCountries} 
          maxValue={maxval} 
          loadMore={loadMoreOption}
          showData={showData}
          countrySelected={selcountry}
          handleCountries={filterCountriesData}
          handleSelectionData={countrySelected}
          isLoggedIn={isloggedin}
          handlelogin={checklogin}
          handlelogout={checklogout}
          />
    </div>
  );
}

export default App;
