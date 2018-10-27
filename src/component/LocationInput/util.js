const getLocation = (callback) => {
   //navigator is built in HTML5
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(callback);
    } else {
        throw new Error();
    }
};

export {getLocation};