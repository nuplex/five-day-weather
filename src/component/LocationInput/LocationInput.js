import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './LocationInput.css';

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
        if(this.state.value === ''){
            this.props.sendError('Please enter a location!');
        } else {
            this.props.getWeatherData(this.state.value);
            //Do not clear out input!
        }
    }

    sendError(msg){
        this.props.sendError(msg);
    }

    render(){
        const { value } = this.state;

        return (
            <div className="location-input-cont">
                <input
                    type="text"
                    className="location-input"
                    value={value}
                    onChange={this.onChange}
                    onKeyPress={(e) => { if(e.key === 'Enter') this.onSubmit()}}
                    placeholder='Enter "City, Country Code (e.g UK)" or "U.S. ZIP Code"'
                    autoFocus={true}
                />
                <button
                    className="location-submit-btn"
                    onClick={this.onSubmit}
                >Look Up!</button>
            </div>
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