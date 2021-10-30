import React from 'react';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

function SolarSystem(prop) {
  const { children } = prop;
  return (
    <div data-testid="solar-system">
      {children}
      {planets.map((planet, index) => (
        <PlanetCard
          key={ index }
          planetName={ planet.name }
          planetImage={ planet.image }
        />
      ))}
      planetImage
    </div>
  );
}

export default SolarSystem;
