import React from 'react';

function About() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', background: '#1f2a38', padding: '20px', borderRadius: '12px', boxShadow: '0px 4px 10px rgba(0,0,0,0.3)' }}>
      <h1 style={{ color: '#ffffff' }}>About This App</h1>
      <p>
        The <strong>SpaceX Launch Finder</strong> is a React web application that allows users to search and view past SpaceX launches. It fetches live data from the public{' '}
        <a href="https://github.com/r-spacex/SpaceX-API" target="_blank" rel="noreferrer">SpaceX API</a>.
      </p>

      <h3>What Information is Displayed?</h3>
      <ul>
        <li><strong>Mission Name:</strong> The official name of the launch mission.</li>
        <li><strong>Date:</strong> The UTC date the mission was launched.</li>
        <li><strong>Rocket:</strong> The name of the rocket used for the mission (e.g., Falcon 9).</li>
        <li><strong>Mission Patch:</strong> A visual icon representing the mission's branding.</li>
        <li><strong>Mission Details:</strong> A brief description of the mission objective or outcome.</li>
        <li><strong>Status:</strong> Whether the launch was a success, failure, or still pending.</li>
        <li><strong>Watch Link:</strong> Link to a YouTube or SpaceX webcast of the launch (if available).</li>
      </ul>

      <p>
        The app was developed using <strong>React</strong> with a component-based architecture and includes routing, real-time API data fetching, and custom CSS styling.
      </p>
    </div>
  );
}

export default About;
