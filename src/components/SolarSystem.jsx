import React from 'react';

function SolarSystem(prop) {
  const { children } = prop;
  return <div data-testid="solar-system">{children}</div>;
}

export default SolarSystem;
