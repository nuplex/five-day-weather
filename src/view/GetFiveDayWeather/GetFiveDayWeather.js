import React, {PureComponent} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import LocationInput from '../../component/LocationInput/LocationInput';
import FiveDayWeatherInfo from '../../component/FiveDayWeatherInfo/FiveDayWeatherInfo';
import Error from '../../component/Error/Error';
import {getForecast} from "./util";
import {STOCK_ERRORS} from "../../component/Error/util";
import './GetFiveDayWeather.css';

/**
 * Main (and only) view for the application. Handles input of location and displaying the weather.
 */
class GetFiveDayWeather extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            weatherData: {},
            isLoading: false,
            hasError: false,
            errorMsg: '',
            currentLocation: '',
        };

        this.getWeatherData = this.getWeatherData.bind(this);
        this.displayError = this.displayError.bind(this);
        this.hideError = this.hideError.bind(this);
    }

    getWeatherData(locationString) {
        if(this.state.hasError){
            this.hideError();
        }

        this.setState({
            isLoading: true
        });

        //get the data
        Promise.resolve(getForecast(locationString))
            .then((data) => {
                if(data.errorCode){
                    this.setState({
                        isLoading: false
                    }, this.displayError(STOCK_ERRORS.LOCATION_SEARCH));
                } else {
                    this.setState({
                        weatherData: data,
                        isLoading: false
                    });
                }
            })
            .catch((err) => {
                ///if it fails show an error
                console.log(err);
                this.setState({
                    isLoading: false
                }, this.displayError(STOCK_ERRORS.FORECAST_FAILUE));
            })
    }

    displayError(msg){
        this.setState({
            hasError: true,
            errorMsg: msg
        });
    }

    hideError(){
        this.setState({
            hasError: false,
            errorMsg: ''
        })
    }

    render(){
        const {
            weatherData,
            isLoading,
            hasError,
            errorMsg,
            currentLocation
        } = this.state;

        return (
            <div className="gfdw-cont">
                <Grid fluid>
                    <Row center="xs">
                        <Col xs={12} md={8} lg={8}>
                            <LocationInput
                                getWeatherData={this.getWeatherData}
                                location={currentLocation ? currentLocation:''}
                            />
                        </Col>
                        <Col xs={12}>
                            {hasError &&
                                <Error errorMsg={errorMsg}/>
                            }
                            {!hasError && weatherData &&
                                <FiveDayWeatherInfo weatherData={weatherData} sendError={this.displayError}/>
                            }
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default GetFiveDayWeather;