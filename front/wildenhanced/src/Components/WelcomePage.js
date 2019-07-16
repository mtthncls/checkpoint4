import React from 'react';
import { connect } from 'react-redux';
import './WelcomePage.css'

const WelcomePage = ({ dispatch }) => (
    <div className="welcome-page">
        <div className="row justify-content-center align-items-center welcome">
            <div className="col-12"><p>WELCOME TO</p> <p>THE WILD CIRCUS</p></div>
        </div>
        <div className="row justify-content-around align-items-center enhanced">
            <div className="col-12">JULY 2019 ENHANCED VERSION</div>
        </div>

        <div className="row justify-content-around align-items-center mt-4">
            <button type="button" className="btn btn-warning col-4" onClick={() => dispatch({
                type: 'TOGGLE_DISCOVER_HOME',
            })}>DISCOVER THE MAGIC</button>
            <button type="button" className="btn btn-warning col-4" onClick={() => dispatch({
                type: 'TOGGLE_BUY_TICKETS_HOME',
            })}>BUY TICKETS</button>
        </div>
    </div>
);

export default connect()(WelcomePage);

