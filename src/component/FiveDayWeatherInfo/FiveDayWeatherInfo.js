import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from "react-flexbox-grid";
import WeatherInfo from "../WeatherInfo/WeatherInfo";

class FiveDayWeatherInfo extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            showingDetails: false,
            detailsToShow: null,
        };

        this.showDetails = this.showDetails.bind(this);
        this.sendError = this.sendError.bind(this);
    }

    sendError(msg){
        this.props.sendError(msg);
    }

    showDetails(details){
        this.setState({
            showingDetails: true,
            detailsToShow: details
        })
    }

    render() {
        const {weatherData} = this.props;

        return (
            <div className="fdw-cont">
                {weatherData && weatherData.days &&
                    <Grid fluid>
                        <Row xs={12} center="lg">
                            {weatherData.days.map( (day, index) => {
                              return (
                                  <Col xs={12} sm={10} md={4} lg={2} key={day.dateObject.getTime()}>
                                      <WeatherInfo
                                          day={day}
                                          index={index}
                                          sendDetails={(details) => (this.showDetails)}
                                      />
                                  </Col>
                              )
                            })}
                        </Row>
                    </Grid>
                }
            </div>
        )
    }
}

FiveDayWeatherInfo.propTypes = {
    weatherData: PropTypes.shape({}).isRequired,
    /* Sends the Error to GetFiveDayWeather to Display*/
    sendError: PropTypes.func,
};


export default FiveDayWeatherInfo;
