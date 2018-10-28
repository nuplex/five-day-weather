import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from "react-flexbox-grid";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import './FiveDayWeatherInfo.css';

/**
 * Holds the five combined WeatherInfo's to display a forecast.
 */
function FiveDayWeatherInfo({weatherData, degConvert}){
        return (
            <div className="fdwi-cont">
                {weatherData && weatherData.days &&
                    <Grid fluid>
                        <Row xs={12} center="xs">
                            {weatherData.days.map( (day, index) => {
                              return (
                                  <Col xs={12} sm={10} md={4} lg={2} key={day.dateObject.getTime()}>
                                      <WeatherInfo
                                          day={day}
                                          index={index}
                                          degConvert={(deg) => degConvert(deg)}
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

FiveDayWeatherInfo.propTypes = {
    weatherData: PropTypes.shape({}).isRequired,
    /* converts the degrees */
    degConvert: PropTypes.func.isRequired,
};

export default FiveDayWeatherInfo;
