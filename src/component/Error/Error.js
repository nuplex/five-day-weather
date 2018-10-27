import React from 'react';
import PropTypes from 'prop-types';
import './Error.css';

function Error({errorMsg}){
    return (
        <div className="error-cont">
            {errorMsg && !!errorMsg ?
                <h1 className="error-text">{errorMsg}</h1>
                :
                <h1 className="error-text">There's been a problem, please try again.</h1>
            }
        </div>
    )
}

Error.propTypes = {
    errorMsg: PropTypes.string,
};

Error.defaultProps = {
    errorMsg: ''
};

export default Error;
