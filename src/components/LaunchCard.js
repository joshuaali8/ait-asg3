import React from 'react';

function LaunchCard({ launch, rocketName }) {
  return (
    <div className="launch-card">
      <h2>{launch.name}</h2>
      <p><strong>Date:</strong> {new Date(launch.date_utc).toLocaleDateString()}</p>
      <p><strong>Rocket:</strong> {rocketName || 'Unknown Rocket'}</p>

      {launch.links?.patch?.small && (
        <img
          src={launch.links.patch.small}
          alt="Mission Patch"
          style={{ width: '100px', marginBottom: '10px' }}
        />
      )}

      {launch.details && (
        <p><strong>Mission Details:</strong> {launch.details}</p>
      )}

      <p>
        <strong>Status:</strong>{' '}
        {launch.success === true
          ? '✅ Successful'
          : launch.success === false
          ? '❌ Failed'
          : '⏳ Pending'}
      </p>

      {launch.links?.webcast && (
        <p>
          <a href={launch.links.webcast} target="_blank" rel="noopener noreferrer">
            📺 Watch Launch
          </a>
        </p>
      )}

      <hr />
    </div>
  );
}

export default LaunchCard;
