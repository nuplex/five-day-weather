import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from "react-flexbox-grid";
import {getLocation} from "./util";
import './LocationInput.css';

/**
 * Simply takes in the typed in location.
 */
class LocationInput extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            value: props.location,
            /* If already checked that prop.location matches value.
            *  If we don't check it'll get stuck in a loop of updating
            *  in getDerivedStateFromProps */
            alreadyChecked: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.sendError = this.sendError.bind(this);
        this.onLocateMe = this.onLocateMe.bind(this);
    }

   static getDerivedStateFromProps(props, state){
        //only checking if location changed via 'locate me'
        if(props.location !== ''
            && (props.location !== state.value)
            && !state.alreadyChecked
        ){
            /* If parent currentLocation isn't changed back to '',
             * this component will visually always show the old prop, unless
             * 'locate me' is pressed again.
             */
            props.emptyParentLocation();

            return {
                value: props.location,
                alreadyChecked: true
            };
        }
        return state;
    }

    onChange(e){
        this.setState({
            value: e.target.value
        })
    }
    onSubmit(){
        const value = this.state.value.trim();
        if(value === ''){
            this.props.sendError('Please enter a location!');
        } else {
            this.setState({
                alreadyChecked: false
            });

            this.props.getWeatherData(value);
            //Do not clear out input!
        }
    }

    onLocateMe(){
        this.props.sendLoadingRequest(true); //will be turned off later
        this.setState({
           alreadyChecked: false
        });
        try{
            getLocation((position) => {
                if(!position || !position.coords){
                    throw new Error();
                } else {
                    let coords = position.coords;
                    let lat = coords.latitude > 0 ? `+${coords.latitude}`:coords.latitude;
                    let lon = coords.longitude > 0 ? `+${coords.longitude}`:coords.longitude;
                    this.props.usedLocateMe();
                    this.props.getWeatherData(`${lat}${lon}`);
                }
            });
        } catch {
            this.sendError('We were unable to locate you.')
        }
    }

    sendError(msg){
        this.props.sendError(msg);
    }

    render(){
        const { value } = this.state;

        return (
            <Grid fluid>
                <Row>
                    <Col xs className="location-input-cont">
                        <input
                            type="text"
                            className="location-input"
                            value={value}
                            onChange={this.onChange}
                            onKeyPress={(e) => { if(e.key === 'Enter') this.onSubmit()}}
                            placeholder='Enter a City, U.S. ZIP Code, or Coordinates'
                            autoFocus={true}
                        />
                        <button
                            className="locate-me-btn"
                            onClick={this.onLocateMe}
                        >
                            Locate Me
                        </button>
                    </Col>
                    <Col xs={12} sm={3} md={3} lg={3}>
                        <button
                            className="location-submit-btn"
                            onClick={this.onSubmit}
                        >Look Up!</button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

LocationInput.propTypes = {
    /* location can be passed in */
    location: PropTypes.string,
    getWeatherData: PropTypes.func.isRequired,
    /* Sends the Error to GetFiveDayWeather to Display*/
    sendError: PropTypes.func,
    /* Tells parent that 'locate me' was used */
    usedLocateMe: PropTypes.func,
    /* Tells the parent to load or stop loading */
    sendLoadingRequest: PropTypes.func,
    /* Clear out location in parent (means locateMe was just used) */
    emptyParentLocation: PropTypes.func,
};

LocationInput.defaultProps = {
    location: '',
    sendError: (err) => (console.log(err)),
    usedLocateMe: () => {},
};

export default LocationInput;
