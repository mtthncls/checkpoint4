import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import WelcomePage from './Components/WelcomePage'
import DiscoverMagic from './Components/DiscoverMagic'
import PriceList from './Components/PriceList';
import ReservationForm from './Components/ReservationForm';

const mapStateToProps = state => ({
  isWelcomePageDisplayed: state.isWelcomePageDisplayed,
  isDiscoverPageDisplayed: state.isDiscoverPageDisplayed,
  isPriceListDisplayed: state.isPriceListDisplayed,
  isReservationFormDisplayed: state.isReservationFormDisplayed,
});

function App({ isWelcomePageDisplayed, isDiscoverPageDisplayed, isPriceListDisplayed, isReservationFormDisplayed }) {
  return (
    <div className="container App">
      {isWelcomePageDisplayed && <WelcomePage />}
      {isDiscoverPageDisplayed && <DiscoverMagic />}
      {isPriceListDisplayed && <PriceList />}
      {isReservationFormDisplayed && <ReservationForm />}
    </div>
  );
}

export default connect(mapStateToProps)(App);
