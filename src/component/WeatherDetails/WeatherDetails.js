import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class WeatherDetails extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    render(){
        const { details } = this.props;
        const { show } = this.state;

        return (
            <React.Fragment>
            {show &&
                <div>

                </div>
            }
            </React.Fragment>
        )
    }


}

WeatherDetails.propTypes = {
  details: PropTypes.shape({}).isRequired
};

export default WeatherDetails