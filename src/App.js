import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
// import PlanetCard from './components/PlanetCard';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem>
          <Title headline="Planetas" />
        </SolarSystem>
        <Missions>
          <MissionCard />
        </Missions>
      </>
    );
  }
}

export default App;
