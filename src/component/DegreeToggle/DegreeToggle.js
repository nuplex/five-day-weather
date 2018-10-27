import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './DegreeToggle.css';

/**
 * Toggles the Degree System (F/C) weather will display in.
 */
class DegreeToggle extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            currentDegree: this.props.degrees
        };

        this.toggleDegree = this.toggleDegree.bind(this);
    }

    toggleDegree(){
        if(this.state.currentDegree === 'F'){
            this.props.updateDegrees('C');
            this.setState({
                currentDegree: 'C'
            })
        } else {
            this.props.updateDegrees('F');
            this.setState({
                currentDegree: 'F'
            })
        }
    }

    render(){
        const { currentDegree } = this.state;
        return (
            <button
                className="degree-toggle"
                onClick={() => this.toggleDegree()}
            >
                °{currentDegree}
            </button>
        )
    }
}

DegreeToggle.propTypes = {
    updateDegrees: PropTypes.func.isRequired,
    degrees: PropTypes.string,
};

DegreeToggle.defaultProps = {
    degrees: 'F',
};

export default DegreeToggle;
