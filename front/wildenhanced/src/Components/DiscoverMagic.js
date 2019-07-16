import React from 'react';
import { connect } from 'react-redux';
import './DiscoverMagic.css';
import Artists from './Artists';


const DiscoverMagic = ({ dispatch }) => (
    <div>
        <header className="row align-items-center">
            <div className="col-xs-12 col-md-5 artists">ARTISTS</div>
            <div className="col-xs-12 col-md-2">&</div>
            <div className="col-xs-12 col-md-5 mb-2 tricks"> TRICKS</div>
        </header>
        <main>
            <article className="row justify-content-around align-items-center mt-4">
                <button type="button" className="btn btn-warning col-4" onClick={() => dispatch({
                    type: 'TOGGLE_DISCOVER_HOME',
                })}>HOME</button>
                <button type="button" className="btn btn-warning col-4" onClick={() => dispatch({
                    type: 'TOGGLE_DISCOVER_BUY_HOME',
                })}>BUY TICKETS</button>
            </article>
            <article className="pl-4 pr-4 pt-4 mt-3 mb-2 presentation">
                In 2017, Clément SpadeCanvas, also know as "The Circus Ninja",
                creates his bike riding show in Reims,
            with the help of his fellow companion Thomas WaterBottom<span>,
                                        touring Champagne-Ardennes in a caravan for 2 years,
                                        they earn themselves a reputation,
                                        and start training newbies to join their show as
            acrobats, clowns, and even the first coding trapeze artists in the World !</span>
                <p>Learn more about the wonderful team below !</p>
            </article>
            <div id="wilders" class="ligne1 row no-gutters justify-content-around">
                <Artists />
            </div>
        </main>
    </div>
);

export default connect()(DiscoverMagic);
