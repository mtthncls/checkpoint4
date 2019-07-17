import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import WelcomePage from './Components/WelcomePage'
import DiscoverMagic from './Components/DiscoverMagic'
import PriceList from './Components/PriceList';
import ReservationForm from './Components/ReservationForm';
import CongratsPage from './Components/CongratsPage'

const mapStateToProps = state => ({
  isWelcomePageDisplayed: state.isWelcomePageDisplayed,
  isDiscoverPageDisplayed: state.isDiscoverPageDisplayed,
  isPriceListDisplayed: state.isPriceListDisplayed,
  isReservationFormDisplayed: state.isReservationFormDisplayed,
  isCongratsPageDisplayed: state.isCongratsPageDisplayed,
});

function App({
  isWelcomePageDisplayed,
  isDiscoverPageDisplayed,
  isPriceListDisplayed,
  isReservationFormDisplayed,
  isCongratsPageDisplayed }) {
  return (
    <div className="container App">
      {isWelcomePageDisplayed && <WelcomePage />}
      {isDiscoverPageDisplayed && <DiscoverMagic />}
      {isPriceListDisplayed && <PriceList />}
      {isReservationFormDisplayed && <ReservationForm />}
      {isCongratsPageDisplayed && <CongratsPage />}
    </div>
  );
}

export default connect(mapStateToProps)(App);
