import React from 'react';

function MissionCard(prop) {
  const { name, year, country, destination } = prop;
  return (
    <div data-testid="mission-card">
      <h1 data-testid="mission-name">{name}</h1>
      <p data-testid="mission-year">{year}</p>
      <h2 data-testid="mission-country">{country}</h2>
      <h3 data-testid="mission-destination">{destination}</h3>
    </div>
  );
}

export default MissionCard;
