import React, { useState, useEffect } from 'react';
import LaunchList from '../components/LaunchList';
import FeedbackForm from '../components/FeedbackForm';

function Home() {
  const [launches, setLaunches] = useState([]);
  const [rockets, setRockets] = useState({});
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/launches')
      .then(res => res.json())
      .then(data => setLaunches(data));

    fetch('https://api.spacexdata.com/v4/rockets')
      .then(res => res.json())
      .then(data => {
        const map = {};
        data.forEach(rocket => {
          map[rocket.id] = rocket.name;
        });
        setRockets(map);
      });
  }, []);

  const filtered = launches.filter(launch =>
    launch.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>SpaceX Launch Finder</h1>
      <FeedbackForm /> 
      
      <input
        type="text"
        placeholder="Search by mission name"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <LaunchList launches={filtered} rockets={rockets} />
    </div>
  );
}

export default Home;
