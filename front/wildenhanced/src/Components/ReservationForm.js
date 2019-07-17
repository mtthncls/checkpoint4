import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


const mapStateToProps = state => ({
    datesTable: state.datesTable,
    dateId: state.datesTable.find()
});


class ReservationForm extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        axios.get(`http://localhost:3001/circus/dates`)
            .then(response => dispatch({ type: 'GET_SHOW_DATES', datesTable: response.data }))
            .catch(err => console.log(err));

    }
    render() {
        const {
            datesTable,
            dispatch
        } = this.props;
        console.log(datesTable)
        return (
            <div>
                <header className="row align-items-center">
                    <div className="col-xs-12 col-md-5 artists">PREPARE</div>
                    <div className="col-xs-12 col-md-2">YOUR</div>
                    <div className="col-xs-12 col-md-5 mb-2 tricks"> WILD JOURNEY</div>
                </header>
                <section>
                    <form method="post" action="">
                        <div>
                            <label htmlFor="date-select">Choose a date:</label>
                            <select id="date-select" onChange={(e) => dispatch({ type: 'SAVE_FORM_VALUES', dateChosen: (e.target.value).slice(0, 10) })}>
                                <option value="">
                                    Pick a date...
                            </option>
                                {datesTable.map(date => (
                                    <option
                                        key={date.showdate}
                                        id={date.showdate}
                                        value={date.showdate}
                                    >
                                        {(date.showdate).slice(0, 10)}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="firstname">First name</label>
                            <input type="text" name="firstname" id="firstname" onChange={(e) => dispatch({ type: 'SAVE_FORM_VALUES', firstNameTyped: (e.target.value) })} />
                        </div>
                        <div>
                            <label htmlFor="lastname">Last name</label>
                            <input type="text" name="lastname" id="lastname" onChange={(e) => dispatch({ type: 'SAVE_FORM_VALUES', lastNameTyped: (e.target.value) })} />
                        </div>
                        <div>
                            <label htmlFor="youremail">Email</label>
                            <input type="email" name="youremail" id="youremail" onChange={(e) => dispatch({ type: 'SAVE_FORM_VALUES', emailTyped: (e.target.value) })} />
                        </div>
                        <div>
                            <label htmlFor="AdultTicket">Adults</label>
                            <input type="number" name="AdultTicket" id="AdultTicket" onChange={(e) => dispatch({ type: 'SAVE_FORM_VALUES', adultTicketsNumber: (e.target.value) })} />
                        </div>
                        <div>
                            <label htmlFor="ChildrenTicket">Children</label>
                            <input type="number" name="ChildrenTicket" id="ChildrenTicket" onChange={(e) => dispatch({ type: 'SAVE_FORM_VALUES', childTicketsNumber: (e.target.value) })} />
                        </div>
                        <input type="submit" name="submit" id="submit" value="send" />
                    </form>
                </section>
            </div>
        )
    }
};

export default connect(mapStateToProps)(ReservationForm)
