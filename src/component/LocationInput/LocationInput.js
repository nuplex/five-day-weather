import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './LocationInput.css';
import {Grid, Row, Col} from "react-flexbox-grid";

/**
 * Simply takes in the typed in location.
 */
class LocationInput extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            value: props.location
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.sendError = this.sendError.bind(this);
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
            this.props.getWeatherData(value);
            //Do not clear out input!
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
                    <Col xs>
                        <input
                            type="text"
                            className="location-input"
                            value={value}
                            onChange={this.onChange}
                            onKeyPress={(e) => { if(e.key === 'Enter') this.onSubmit()}}
                            placeholder='Enter a City, U.S. ZIP Code, or Coordinates'
                            autoFocus={true}
                        />
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
};

LocationInput.defaultProps = {
    location: '',
    sendError: (err) => (console.log(err))
};

export default LocationInput;
