import React, {PureComponent} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import LocationInput from '../../component/LocationInput/LocationInput';
import FiveDayWeatherInfo from '../../component/FiveDayWeatherInfo/FiveDayWeatherInfo';
import Error from '../../component/Error/Error';
import DegreeToggle from '../../component/DegreeToggle/DegreeToggle'
import {getForecast} from "./util";
import {STOCK_ERRORS} from "../../component/Error/util";
import './GetFiveDayWeather.css';
import Loading from "../../component/Loading/Loding";

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
            currentDegree: 'F',
            currentDegConvert: (deg) => (Math.round(((deg-273.15)*1.8)+32)),
            usedLocateMe: false,
        };

        this.getWeatherData = this.getWeatherData.bind(this);
        this.displayError = this.displayError.bind(this);
        this.hideError = this.hideError.bind(this);
        this.setLoading = this.setLoading.bind(this);
        this.updateDegrees = this.updateDegrees.bind(this);
        this.usedLocateMe = this.usedLocateMe.bind(this);
    }

    getWeatherData(locationString) {
        if(this.state.hasError){
            this.hideError();
        }

        this.setState({
            isLoading: true,
            currentLocation: ''
        });

        //get the data
        Promise.resolve(getForecast(locationString))
            .then((data) => {
                if(data.errorCode){
                    this.setState({
                        isLoading: false
                    }, this.displayError(STOCK_ERRORS.LOCATION_SEARCH));
                } else {
                    if(this.state.usedLocateMe){
                        this.setState({
                            usedLocateMe: false,
                            currentLocation: (data && data.city && data.country ? `${data.city}, ${data.country}`:'')
                        })
                    }
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
        });
    }

    setLoading(bool){
        this.setState({
            isLoading: bool
        });
    }

    /**
     * Updates the degrees the app will show by returning the conversion function
     * @param degSystem - the system being used
     * @return the conversion function
     */
    updateDegrees(degSystem){
        /*this.setState({
            isLoading: true
        });*/

        let degConvFunc;

        //degrees  Kelvin
        if(degSystem === 'F'){
            //we don't show decimal in F
            degConvFunc = (deg) => (Math.round(((deg-273.15)*1.8)+32));
        } else if (degSystem === 'C') {
            //Normal to show a decimal point in C
            degConvFunc = (deg) => ((Math.round(deg - 273.15)));
        } else {
            //fallback to show just kelvin
            degConvFunc = (deg) => (deg);
            degSystem = 'K';
        }



        this.setState({
            currentDegree: degSystem,
            currentDegConvert: degConvFunc,
        });
    }

    usedLocateMe(){
        this.setState({
            usedLocateMe: true
        })
    }

    render(){
        const {
            weatherData,
            isLoading,
            hasError,
            errorMsg,
            currentLocation,
            currentDegree,
            currentDegConvert,
        } = this.state;

        return (
            <React.Fragment>
            <div className="gfdw-cont">
                <Grid fluid>
                    <Row center="xs">
                        <Col md={12} lg={10}>
                            <LocationInput
                                getWeatherData={(loc) => (this.getWeatherData(loc))}
                                location={currentLocation ? currentLocation:''}
                                sendError={(msg) => this.displayError(msg)}
                                usedLocateMe={() => this.usedLocateMe()}
                                sendLoadingRequest={(bool) => this.setLoading(bool)}
                            />
                        </Col>
                        {!hasError && !isLoading && weatherData && weatherData.city && weatherData.country &&
                            <Col xs={12} lg={10}>
                                <p className="gfdw-loc-title">{weatherData.city}, {weatherData.country}</p>
                            </Col>
                        }
                        <Col xs={12} lg={10}>
                            {isLoading ?
                                <Loading/>
                                :
                                <React.Fragment>
                                    {hasError &&
                                    <Error errorMsg={errorMsg}/>
                                    }
                                    {!hasError && weatherData &&
                                    <FiveDayWeatherInfo
                                        weatherData={weatherData}
                                        sendError={(msg) => this.displayError(msg)}
                                        degConvert={(deg) => currentDegConvert(deg)}
                                    />
                                    }
                                </React.Fragment>
                            }
                        </Col>
                    </Row>
                </Grid>
            </div>
            <DegreeToggle
                updateDegrees={(deg) => this.updateDegrees(deg)}
                degrees={currentDegree}
            />
            </React.Fragment>
        )
    }
}

export default GetFiveDayWeather;