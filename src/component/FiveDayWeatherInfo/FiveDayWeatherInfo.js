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
                {weatherData &&
                    <Grid flud>
                        <Row xs={12}>
                            {weatherData.days.map( (day, index) => {
                              return (
                                  <Col xs={12} sm={12} md={4} lg={2}>
                                      <WeatherInfo
                                          day={day}
                                          sendDetails={this.showDetails}
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