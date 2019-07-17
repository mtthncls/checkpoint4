import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = state => ({

});


class CongratsPage extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        axios.get(`http://localhost:3001/circus/dates`)
            .then(response => dispatch({ type: 'GET_SHOW_DATES', datesTable: response.data }))
            .catch(err => console.log(err));

    }
    render() {
        const {
            dispatch
        } = this.props;

        return (
            <div>
                <header className="row align-items-center">
                    <div className="col-xs-12 col-md-5 artists">THANKS</div>
                    <div className="col-xs-12 col-md-2">FOR</div>
                    <div className="col-xs-12 col-md-5 mb-2 tricks"> YOUR ORDER</div>
                </header>

                <article>
                    Please continue your visit !
            </article>
                <article className="row justify-content-around align-items-center mt-4">
                    <button type="button" className="btn btn-warning col-4" onClick={() => dispatch({
                        type: 'TOGGLE_CONGRATS_HOME',
                    })}>HOME</button>
                    <button type="button" className="btn btn-warning col-4" onClick={() => dispatch({
                        type: 'TOGGLE_CONGRATS_DISCOVER',
                    })}>DISCOVER</button>
                </article>
            </div>
        )
    }
};

export default connect(mapStateToProps)(CongratsPage)
