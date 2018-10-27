import React from 'react';
import loading_sun from '../../res/img/loading_sun.svg';
import './Loading.css';

function Loading(){
    return (
        <div className="loading-cont">
            <img alt="Loading..." src={loading_sun}/>
        </div>
    )
}

export default Loading;