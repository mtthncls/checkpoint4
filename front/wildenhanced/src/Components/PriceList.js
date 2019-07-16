import React from 'react'
import { connect } from 'react-redux';
import './PriceList.css'

const PriceList = ({ dispatch }) => (
    <div>
        <header className="row align-items-center">
            <div className="col-xs-12 col-md-5 artists">ARTISTS</div>
            <div className="col-xs-12 col-md-2">&</div>
            <div className="col-xs-12 col-md-5 mb-2 tricks"> TRICKS</div>
        </header>
        <article className="row justify-content-around align-items-center mt-4">
            <button type="button" className="btn btn-warning col-4" onClick={() => dispatch({
                type: 'TOGGLE_BUY_TICKETS_HOME',
            })}>HOME</button>
            <button type="button" className="btn btn-warning col-4" onClick={() => dispatch({
                type: 'TOGGLE_DISCOVER_BUY_HOME',
            })}>DISCOVER</button>
        </article>
        <caption>ENTRANCE FEES</caption>
        <table>


            <tr>
                <th className="tabletitle"></th>
                <th>Adults</th>
                <th>Children &#40;&lsaquo;12 yo&#41;</th>
            </tr>

            <tr className="formatage">
                <td class="linetitle">Everyday</td>
                <td>15$</td>
                <td>7$</td>
            </tr>

        </table>
    </div>



);

export default connect()(PriceList);
