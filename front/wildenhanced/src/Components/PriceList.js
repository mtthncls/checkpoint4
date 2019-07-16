import React from 'react'
import { connect } from 'react-redux';
import './PriceList.css'

const PriceList = ({ dispatch }) => (
    <div>
        <header className="row align-items-center">
            <div className="col">ENTRANCE FEES</div>
        </header>
        <article className="row justify-content-around align-items-center mt-4">
            <button type="button" className="btn btn-warning col-4" onClick={() => dispatch({
                type: 'TOGGLE_BUY_TICKETS_HOME',
            })}>HOME</button>
            <button type="button" className="btn btn-warning col-4" onClick={() => dispatch({
                type: 'TOGGLE_DISCOVER_BUY_HOME',
            })}>DISCOVER</button>
        </article>
        <section className="row align-items-center price-table">
            <table>


                <tr>
                    <th className="tabletitle"></th>
                    <th>Adults</th>
                    <th>Children &#40;&lsaquo;12 yo&#41;</th>
                </tr>

                <tr className="formatage">
                    <td class="linetitle">Everyday</td>
                    <td>20$</td>
                    <td>10$</td>
                </tr>

            </table>
        </section>
        <div className="row justify-content-around align-items-center mt-4">
            <button type="button" className="btn btn-warning col-6" onClick={() => dispatch({
                type: 'DISPLAY_FORM',
            })}>MAKE A RESERVATION</button>
        </div>
    </div>



);

export default connect()(PriceList);
