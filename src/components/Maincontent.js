import React, { useState } from 'react';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

//a GraphQL query that asks for names and codes for all countries
const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;


export default function Maincontent() {
  const [country, setCountry] = useState('KE');
  const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  const addFact = () => {
    
  }

  return (
        <div>
          <select value={country} onChange={event => setCountry(event.target.value)}>
          {data.countries.map(country => (
              <option key={country.code} value={country.code}>
              {country.name}
              </option>
          ))}
          </select>

          <br />
          <br />

          <button onClick={addFact}>Add a fact</button>

          <section id={country} className="country-details">
          </section>
        </div>
  );
}