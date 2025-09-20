import React, { use, useState } from "react";
import Country from "../country/Country";
import "./countries.css";
const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    console.log("Handle visited country is clicked!", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <h2>Total Country Visited: {visitedCountries.length}</h2>
      <div className="countries">
        {countries.map((country, index) => (
          <Country
            key={index}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
