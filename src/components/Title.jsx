import React from 'react';

function Title(prop) {
  const { headline } = prop;
  return (
    <h2 aria-level="2">{ headline }</h2>
  );
}

export default Title;
