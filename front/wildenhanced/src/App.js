import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import WelcomePage from './Components/WelcomePage'
import DiscoverMagic from './Components/DiscoverMagic'

const mapStateToProps = state => ({
isWelcomePageDisplayed: state.isWelcomePageDisplayed,
isDiscoverPageDisplayed: state.isDiscoverPageDisplayed,
});

function App({isWelcomePageDisplayed, isDiscoverPageDisplayed}) {
  return (
    <div className="container App">
      {isWelcomePageDisplayed && <WelcomePage />}
      {isDiscoverPageDisplayed && <DiscoverMagic />}
    </div>
  );
}

export default connect(mapStateToProps)(App);
