import React from 'react';
import WeatherData from './WeatherData';
import TextField from '@material-ui/core/TextField';
var moment = require('moment');

class WeatherContainer extends React.Component {

    state = {
        completeData: [],
        dailyData: [],
        cityName: "Boston",
        hasError: false
    }
    render() {
        let display;
        if (this.state.completeData.length > 0 || this.state.hasError == 'false') {
            display = this.displayData();
        } else {
            display = <h5 className="my-3">No data Found</h5>;
        }

        return (
            <div className="container">
				<hr />
                <h3>Weather Forecast</h3>
                <hr />
                <TextField id="city-name" label="City Name" value={this.state.cityName} onChange={this.changeText} />
                <input type="button" className="btn btn-secondary mt-2" value="Search" onClick={this.refreshData} disabled={this.state.cityName == 0} />
                <br />
                
                <div className=" justify-content-center">
                    {display}
                </div>
            </div>
        );
    }


    changeText = (event) => {
        this.setState(
            { cityName: event.target.value }
        );
    }

    componentDidMount = () => {
        this.refreshData();
    }

    refreshData = () => {
        const _url = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName}&units=imperial&APPID=3981c77803578cc809ae7fa0836c638e`;
        fetch(_url)
            .then(res => res.json())
            .then(data => {
                const _data = data.list.filter(reading => reading.dt_txt.includes("00:00:00"));
                data.list.map(function (name) {
                    let _date = new Date();
                    const weekday = name.dt * 1000;
                    _date.setTime(weekday);
                    name.day = moment(_date).format('dddd');
                })
                this.setState({
                    hasError: false,
                    completeData: data.list,
                    dailyData: _data
                }, () => console.log(this.state));

            }).catch(err => {
                this.setState({
                    hasError: true,
                    completeData: [],
                    dailyData: []
                });
            });
    }

    displayData = () => {
        return this.state.dailyData.map((reading, index) => <WeatherData reading={reading} key={index} completeData={this.state.completeData} cityName={this.state.cityName} />)
    }
}

export default WeatherContainer;
