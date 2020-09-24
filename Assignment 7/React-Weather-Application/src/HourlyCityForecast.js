import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Redirect,withRouter } from 'react-router-dom';
import Hourly from './Hourly';
import { render } from '@testing-library/react';
import App from './App';
var moment = require('moment');


class HourlyForecast extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let _date = new Date();
        const weekday = this.props.data.dt * 1000;
        _date.setTime(weekday);
        const _img = `owf owf-${this.props.data.weather[0].id} owf-5x`;
        const fahrenheitMax = Math.round(this.props.data.main.temp_max);
        const celsiusMax = Math.round((fahrenheitMax - 32) * 5 / 9);
        const fahrenheitMin = Math.round(this.props.data.main.temp_min);
        const celsiusMin = Math.round((fahrenheitMin - 32) * 5 / 9);
        return (
            <div className="row">
                <div className="col-12">
                        <div className="card py-2 my-3" >
                            <div className="row">
                                <div className="col">
                                    <i className={_img}></i>
                                    <h5>{moment(_date).format('HH:mm a')}</h5>
                                </div>
                                <div className="col">
                                    <h4 className="text-muted">{moment(_date).format('MMMM Do')}</h4>
                                    <h5>{celsiusMax} °C / {celsiusMin} °C</h5>
                                    <p>{this.props.data.weather[0].description}</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    };
}



export default HourlyForecast;