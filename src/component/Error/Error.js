import React from 'react';
import PropTypes from 'prop-types';
import {STOCK_ERRORS} from "./util";

function Error({errorMsg}){
    return (
        <div className="error-cont">
            <h1 className="error-text">{STOCK_ERRORS.FORECAST_FAILUE}</h1>
            {!!errorMsg && <p className="error-text">{errorMsg}</p>}
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

