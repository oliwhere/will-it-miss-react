import React from 'react';
import { useAsync } from 'react-async-hook';
import addDays from 'date-fns/addDays';
import Orbital from './components/Orbital';

const API_KEY = 'oBI2u3JcmWxBCS1uQle8OdCNkVZJXii5zBFdYRzt';
const day = getDate(addDays(new Date(), 1));

function getDate(d = new Date()) {
  return d.toJSON().split('T')[0];
}

const fetchData = () =>
  fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${getDate()}&api_key=${API_KEY}`
  ).then((res) => res.json());

function App() {
  const data = useAsync(fetchData, []);

  if (data.loading) {
    document.title = 'Counting potential earth HAZARDS...';

    return (
      <p>
        Getting data from NASA right now to check wheter something from space
        is going to hit us. One moment...
      </p>
    );
  }

  const hazards = data.result.near_earth_objects[day].reduce((acc, curr) => {
    if (curr.is_potentially_hazardous_asteroid) {
      return acc + 1;
    }
    return acc;
  }, 0);

  document.title = `${hazards} potential HAZARDS ${hazards > 0 ? 'OMG WE GON DIE' : 'Phew we gucci'}`;

  const results = data.result.near_earth_objects[day];

  return (
    <div>
      <p>
        {new Intl.DateTimeFormat('en-GB', { weekday: 'long', month: 'short', day: 'numeric' }).format(addDays(new Date(), 1))} there will be{' '}
        <strong>{results.length}</strong> near misses
      </p>
      <hr></hr>
      {results
          .sort((a) => (a.is_potentially_hazardous_asteroid ? -1 : 1))
          .map((data) => (
            <Orbital key={data.id} {...data} />
          ))}
    </div>
  );
}

export default App;
