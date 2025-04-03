import React from 'react';
import LaunchCard from './LaunchCard';

function LaunchList({ launches, rockets }) {
  return (
    <div className="launch-grid">
      {launches.map(launch => (
        <LaunchCard
          key={launch.id}
          launch={launch}
          rocketName={rockets[launch.rocket]}
        />
      ))}
    </div>
  );
}

export default LaunchList;
