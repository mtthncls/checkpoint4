import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import WelcomePage from './Components/WelcomePage'
import DiscoverMagic from './Components/DiscoverMagic'
import PriceList from './Components/PriceList';

const mapStateToProps = state => ({
  isWelcomePageDisplayed: state.isWelcomePageDisplayed,
  isDiscoverPageDisplayed: state.isDiscoverPageDisplayed,
  isPriceListDisplayed: state.isPriceListDisplayed,
});

function App({ isWelcomePageDisplayed, isDiscoverPageDisplayed, isPriceListDisplayed }) {
  return (
    <div className="container App">
      {isWelcomePageDisplayed && <WelcomePage />}
      {isDiscoverPageDisplayed && <DiscoverMagic />}
      {isPriceListDisplayed && <PriceList />}
    </div>
  );
}

export default connect(mapStateToProps)(App);
