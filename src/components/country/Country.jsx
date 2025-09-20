// import React, { use } from "react";
import { useState } from "react";
import "./country.css";
const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);
  const handleVisit = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    <div className={`country ${visited && "country-visited"} `}>
      <h2>Name: {country.name.common}</h2>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <p>Population: {country.population.population}</p>
      <button onClick={handleVisit}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
