/**
 * This is test data for unitTests.
 *
 * For quick reference of correct values, an img of the displayed is attached in this directory.
 */

//this is data that has been run through getKeyData in GetFiveDayWeather/util.js
const testWeatherData = {
    "city": "Somerville",
    "country": "US",
    "days": [
        {
            "high": 282.85,
            "low": 282.85,
            "weatherData": {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            },
            "details": {
                "temp": 282.85,
                "temp_min": 282.85,
                "temp_max": 283.479,
                "pressure": 999.48,
                "sea_level": 1013.28,
                "grnd_level": 999.48,
                "humidity": 97,
                "temp_kf": -0.62
            },
            "windDetails": {
                "speed": 3.77,
                "deg": 21.0001
            },
            "cloudsDetails": {
                "all": 80
            },
            "dateObject": new Date("2018-10-28T03:00:00.000Z")
        },
        {
            "high": 282.56,
            "low": 279.404,
            "weatherData": {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            },
            "details": {
                "temp": 280.861,
                "temp_min": 280.861,
                "temp_max": 280.861,
                "pressure": 1006.12,
                "sea_level": 1020.2,
                "grnd_level": 1006.12,
                "humidity": 94,
                "temp_kf": 0
            },
            "windDetails": {
                "speed": 3.16,
                "deg": 257.001
            },
            "cloudsDetails": {
                "all": 56
            },
            "dateObject": new Date("2018-10-29T03:00:00.000Z")
        },
        {
            "high": 284.91,
            "low": 279.597,
            "weatherData": {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            },
            "details": {
                "temp": 283.511,
                "temp_min": 283.511,
                "temp_max": 283.511,
                "pressure": 1008.16,
                "sea_level": 1022.14,
                "grnd_level": 1008.16,
                "humidity": 92,
                "temp_kf": 0
            },
            "windDetails": {
                "speed": 3.67,
                "deg": 272.503
            },
            "cloudsDetails": {
                "all": 24
            },
            "dateObject": new Date("2018-10-30T03:00:00.000Z")
        },
        {
            "high": 286.547,
            "low": 277.303,
            "weatherData": {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            },
            "details": {
                "temp": 283.977,
                "temp_min": 283.977,
                "temp_max": 283.977,
                "pressure": 1019.41,
                "sea_level": 1033.44,
                "grnd_level": 1019.41,
                "humidity": 68,
                "temp_kf": 0
            },
            "windDetails": {
                "speed": 1.87,
                "deg": 262.003
            },
            "cloudsDetails": {
                "all": 0
            },
            "dateObject": new Date("2018-10-31T03:00:00.000Z")
        },
        {
            "high": 291.52,
            "low": 282.804,
            "weatherData": {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            },
            "details": {
                "temp": 285.296,
                "temp_min": 285.296,
                "temp_max": 285.296,
                "pressure": 1012.96,
                "sea_level": 1026.71,
                "grnd_level": 1012.96,
                "humidity": 87,
                "temp_kf": 0
            },
            "windDetails": {
                "speed": 1.41,
                "deg": 175.502
            },
            "cloudsDetails": {
                "all": 80
            },
            "dateObject": new Date("2018-11-01T03:00:00.000Z")
        }
    ]
};

//this is the json data gotten straight from the API
const testWeatherData__RAW = {
    "cod": "200",
    "message": 0.007,
    "cnt": 40,
    "list": [
        {
            "dt": 1540684800,
            "main": {
                "temp": 282.85,
                "temp_min": 282.85,
                "temp_max": 283.479,
                "pressure": 999.48,
                "sea_level": 1013.28,
                "grnd_level": 999.48,
                "humidity": 97,
                "temp_kf": -0.62
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 3.77,
                "deg": 21.0001
            },
            "rain": {
                "3h": 0.32
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-10-28 00:00:00"
        },
        {
            "dt": 1540695600,
            "main": {
                "temp": 283.13,
                "temp_min": 283.13,
                "temp_max": 283.599,
                "pressure": 1000.38,
                "sea_level": 1014.25,
                "grnd_level": 1000.38,
                "humidity": 99,
                "temp_kf": -0.47
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 2.26,
                "deg": 342.519
            },
            "rain": {
                "3h": 0.6
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-10-28 03:00:00"
        },
        {
            "dt": 1540706400,
            "main": {
                "temp": 282.56,
                "temp_min": 282.56,
                "temp_max": 282.874,
                "pressure": 1001.45,
                "sea_level": 1015.36,
                "grnd_level": 1001.45,
                "humidity": 100,
                "temp_kf": -0.31
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 2.18,
                "deg": 283.5
            },
            "rain": {
                "3h": 0.285
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-10-28 06:00:00"
        },
        {
            "dt": 1540717200,
            "main": {
                "temp": 281.34,
                "temp_min": 281.34,
                "temp_max": 281.498,
                "pressure": 1002.91,
                "sea_level": 1016.86,
                "grnd_level": 1002.91,
                "humidity": 100,
                "temp_kf": -0.16
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 2.35,
                "deg": 267.501
            },
            "rain": {
                "3h": 0.080000000000002
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-10-28 09:00:00"
        },
        {
            "dt": 1540728000,
            "main": {
                "temp": 279.404,
                "temp_min": 279.404,
                "temp_max": 279.404,
                "pressure": 1004.57,
                "sea_level": 1018.64,
                "grnd_level": 1004.57,
                "humidity": 99,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 36
            },
            "wind": {
                "speed": 2.57,
                "deg": 245.006
            },
            "rain": {
                "3h": 0.004999999999999
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-10-28 12:00:00"
        },
        {
            "dt": 1540738800,
            "main": {
                "temp": 280.861,
                "temp_min": 280.861,
                "temp_max": 280.861,
                "pressure": 1006.12,
                "sea_level": 1020.2,
                "grnd_level": 1006.12,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 56
            },
            "wind": {
                "speed": 3.16,
                "deg": 257.001
            },
            "rain": {
                "3h": 0.015000000000001
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-10-28 15:00:00"
        },
        {
            "dt": 1540749600,
            "main": {
                "temp": 282.461,
                "temp_min": 282.461,
                "temp_max": 282.461,
                "pressure": 1006.55,
                "sea_level": 1020.48,
                "grnd_level": 1006.55,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 36
            },
            "wind": {
                "speed": 3.23,
                "deg": 267.006
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-10-28 18:00:00"
        },
        {
            "dt": 1540760400,
            "main": {
                "temp": 282.477,
                "temp_min": 282.477,
                "temp_max": 282.477,
                "pressure": 1007.07,
                "sea_level": 1021,
                "grnd_level": 1007.07,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 24
            },
            "wind": {
                "speed": 2.61,
                "deg": 262.005
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-10-28 21:00:00"
        },
        {
            "dt": 1540771200,
            "main": {
                "temp": 279.424,
                "temp_min": 279.424,
                "temp_max": 279.424,
                "pressure": 1007.99,
                "sea_level": 1021.93,
                "grnd_level": 1007.99,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.24,
                "deg": 238.506
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-10-29 00:00:00"
        },
        {
            "dt": 1540782000,
            "main": {
                "temp": 279.253,
                "temp_min": 279.253,
                "temp_max": 279.253,
                "pressure": 1007.95,
                "sea_level": 1021.96,
                "grnd_level": 1007.95,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 2.06,
                "deg": 211.504
            },
            "rain": {
                "3h": 0.215
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-10-29 03:00:00"
        },
        {
            "dt": 1540792800,
            "main": {
                "temp": 280.383,
                "temp_min": 280.383,
                "temp_max": 280.383,
                "pressure": 1006.63,
                "sea_level": 1020.58,
                "grnd_level": 1006.63,
                "humidity": 98,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 2.07,
                "deg": 205.501
            },
            "rain": {
                "3h": 1.55
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-10-29 06:00:00"
        },
        {
            "dt": 1540803600,
            "main": {
                "temp": 279.597,
                "temp_min": 279.597,
                "temp_max": 279.597,
                "pressure": 1005.91,
                "sea_level": 1019.86,
                "grnd_level": 1005.91,
                "humidity": 96,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 36
            },
            "wind": {
                "speed": 2.06,
                "deg": 215.001
            },
            "rain": {
                "3h": 0.089999999999996
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-10-29 09:00:00"
        },
        {
            "dt": 1540814400,
            "main": {
                "temp": 280.441,
                "temp_min": 280.441,
                "temp_max": 280.441,
                "pressure": 1006.54,
                "sea_level": 1020.58,
                "grnd_level": 1006.54,
                "humidity": 99,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 48
            },
            "wind": {
                "speed": 2.69,
                "deg": 247.5
            },
            "rain": {
                "3h": 0.39
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-10-29 12:00:00"
        },
        {
            "dt": 1540825200,
            "main": {
                "temp": 283.511,
                "temp_min": 283.511,
                "temp_max": 283.511,
                "pressure": 1008.16,
                "sea_level": 1022.14,
                "grnd_level": 1008.16,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 24
            },
            "wind": {
                "speed": 3.67,
                "deg": 272.503
            },
            "rain": {
                "3h": 0.009999999999998
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-10-29 15:00:00"
        },
        {
            "dt": 1540836000,
            "main": {
                "temp": 284.91,
                "temp_min": 284.91,
                "temp_max": 284.91,
                "pressure": 1008.9,
                "sea_level": 1022.77,
                "grnd_level": 1008.9,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 3.87,
                "deg": 287.004
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-10-29 18:00:00"
        },
        {
            "dt": 1540846800,
            "main": {
                "temp": 283.861,
                "temp_min": 283.861,
                "temp_max": 283.861,
                "pressure": 1011.18,
                "sea_level": 1025.11,
                "grnd_level": 1011.18,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 36
            },
            "wind": {
                "speed": 4.06,
                "deg": 290
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-10-29 21:00:00"
        },
        {
            "dt": 1540857600,
            "main": {
                "temp": 280.803,
                "temp_min": 280.803,
                "temp_max": 280.803,
                "pressure": 1014.04,
                "sea_level": 1028.13,
                "grnd_level": 1014.04,
                "humidity": 62,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.01,
                "deg": 289.503
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-10-30 00:00:00"
        },
        {
            "dt": 1540868400,
            "main": {
                "temp": 279.469,
                "temp_min": 279.469,
                "temp_max": 279.469,
                "pressure": 1015.65,
                "sea_level": 1029.86,
                "grnd_level": 1015.65,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.01,
                "deg": 282.505
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-10-30 03:00:00"
        },
        {
            "dt": 1540879200,
            "main": {
                "temp": 278.789,
                "temp_min": 278.789,
                "temp_max": 278.789,
                "pressure": 1016.5,
                "sea_level": 1030.78,
                "grnd_level": 1016.5,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.82,
                "deg": 279.006
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-10-30 06:00:00"
        },
        {
            "dt": 1540890000,
            "main": {
                "temp": 278.041,
                "temp_min": 278.041,
                "temp_max": 278.041,
                "pressure": 1017.65,
                "sea_level": 1031.93,
                "grnd_level": 1017.65,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.53,
                "deg": 273.502
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-10-30 09:00:00"
        },
        {
            "dt": 1540900800,
            "main": {
                "temp": 277.303,
                "temp_min": 277.303,
                "temp_max": 277.303,
                "pressure": 1018.87,
                "sea_level": 1033.18,
                "grnd_level": 1018.87,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.17,
                "deg": 267.5
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-10-30 12:00:00"
        },
        {
            "dt": 1540911600,
            "main": {
                "temp": 283.977,
                "temp_min": 283.977,
                "temp_max": 283.977,
                "pressure": 1019.41,
                "sea_level": 1033.44,
                "grnd_level": 1019.41,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.87,
                "deg": 262.003
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-10-30 15:00:00"
        },
        {
            "dt": 1540922400,
            "main": {
                "temp": 286.547,
                "temp_min": 286.547,
                "temp_max": 286.547,
                "pressure": 1017.56,
                "sea_level": 1031.38,
                "grnd_level": 1017.56,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.42,
                "deg": 250.001
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-10-30 18:00:00"
        },
        {
            "dt": 1540933200,
            "main": {
                "temp": 285.881,
                "temp_min": 285.881,
                "temp_max": 285.881,
                "pressure": 1016.2,
                "sea_level": 1030.1,
                "grnd_level": 1016.2,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.36,
                "deg": 235
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-10-30 21:00:00"
        },
        {
            "dt": 1540944000,
            "main": {
                "temp": 283.363,
                "temp_min": 283.363,
                "temp_max": 283.363,
                "pressure": 1015.47,
                "sea_level": 1029.49,
                "grnd_level": 1015.47,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3,
                "deg": 219.001
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-10-31 00:00:00"
        },
        {
            "dt": 1540954800,
            "main": {
                "temp": 282.909,
                "temp_min": 282.909,
                "temp_max": 282.909,
                "pressure": 1015.47,
                "sea_level": 1029.36,
                "grnd_level": 1015.47,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.04,
                "deg": 227.002
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-10-31 03:00:00"
        },
        {
            "dt": 1540965600,
            "main": {
                "temp": 282.804,
                "temp_min": 282.804,
                "temp_max": 282.804,
                "pressure": 1014.51,
                "sea_level": 1028.47,
                "grnd_level": 1014.51,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 12
            },
            "wind": {
                "speed": 2.53,
                "deg": 227.007
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-10-31 06:00:00"
        },
        {
            "dt": 1540976400,
            "main": {
                "temp": 282.936,
                "temp_min": 282.936,
                "temp_max": 282.936,
                "pressure": 1013.51,
                "sea_level": 1027.55,
                "grnd_level": 1013.51,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 1.77,
                "deg": 231.5
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-10-31 09:00:00"
        },
        {
            "dt": 1540987200,
            "main": {
                "temp": 283.484,
                "temp_min": 283.484,
                "temp_max": 283.484,
                "pressure": 1013.18,
                "sea_level": 1027.15,
                "grnd_level": 1013.18,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 1.11,
                "deg": 194
            },
            "rain": {
                "3h": 0.07
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-10-31 12:00:00"
        },
        {
            "dt": 1540998000,
            "main": {
                "temp": 285.296,
                "temp_min": 285.296,
                "temp_max": 285.296,
                "pressure": 1012.96,
                "sea_level": 1026.71,
                "grnd_level": 1012.96,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 1.41,
                "deg": 175.502
            },
            "rain": {
                "3h": 0.42
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-10-31 15:00:00"
        },
        {
            "dt": 1541008800,
            "main": {
                "temp": 289.498,
                "temp_min": 289.498,
                "temp_max": 289.498,
                "pressure": 1010.79,
                "sea_level": 1024.35,
                "grnd_level": 1010.79,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 1.48,
                "deg": 198.5
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-10-31 18:00:00"
        },
        {
            "dt": 1541019600,
            "main": {
                "temp": 291.52,
                "temp_min": 291.52,
                "temp_max": 291.52,
                "pressure": 1008.94,
                "sea_level": 1022.43,
                "grnd_level": 1008.94,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.77,
                "deg": 180.005
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-10-31 21:00:00"
        },
        {
            "dt": 1541030400,
            "main": {
                "temp": 289.22,
                "temp_min": 289.22,
                "temp_max": 289.22,
                "pressure": 1008.89,
                "sea_level": 1022.48,
                "grnd_level": 1008.89,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 36
            },
            "wind": {
                "speed": 3.01,
                "deg": 208.001
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-11-01 00:00:00"
        },
        {
            "dt": 1541041200,
            "main": {
                "temp": 289.658,
                "temp_min": 289.658,
                "temp_max": 289.658,
                "pressure": 1008.4,
                "sea_level": 1021.98,
                "grnd_level": 1008.4,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 68
            },
            "wind": {
                "speed": 3.01,
                "deg": 217.002
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-11-01 03:00:00"
        },
        {
            "dt": 1541052000,
            "main": {
                "temp": 290.874,
                "temp_min": 290.874,
                "temp_max": 290.874,
                "pressure": 1007.85,
                "sea_level": 1021.44,
                "grnd_level": 1007.85,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 3.11,
                "deg": 220
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-11-01 06:00:00"
        },
        {
            "dt": 1541062800,
            "main": {
                "temp": 291.281,
                "temp_min": 291.281,
                "temp_max": 291.281,
                "pressure": 1007.19,
                "sea_level": 1020.71,
                "grnd_level": 1007.19,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 3.31,
                "deg": 211.001
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2018-11-01 09:00:00"
        },
        {
            "dt": 1541073600,
            "main": {
                "temp": 292.02,
                "temp_min": 292.02,
                "temp_max": 292.02,
                "pressure": 1007.02,
                "sea_level": 1020.61,
                "grnd_level": 1007.02,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 3.82,
                "deg": 200.006
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-11-01 12:00:00"
        },
        {
            "dt": 1541084400,
            "main": {
                "temp": 292.969,
                "temp_min": 292.969,
                "temp_max": 292.969,
                "pressure": 1006.22,
                "sea_level": 1019.71,
                "grnd_level": 1006.22,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 4.57,
                "deg": 196.501
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-11-01 15:00:00"
        },
        {
            "dt": 1541095200,
            "main": {
                "temp": 291.556,
                "temp_min": 291.556,
                "temp_max": 291.556,
                "pressure": 1004.1,
                "sea_level": 1017.52,
                "grnd_level": 1004.1,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 5.7,
                "deg": 195.501
            },
            "rain": {
                "3h": 1.41
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-11-01 18:00:00"
        },
        {
            "dt": 1541106000,
            "main": {
                "temp": 290.328,
                "temp_min": 290.328,
                "temp_max": 290.328,
                "pressure": 1003.18,
                "sea_level": 1016.61,
                "grnd_level": 1003.18,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 5.81,
                "deg": 207.501
            },
            "rain": {
                "3h": 3.68
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2018-11-01 21:00:00"
        }
    ],
    "city": {
        "id": 5104774,
        "name": "Somerville",
        "coord": {
            "lat": 40.5743,
            "lon": -74.6099
        },
        "country": "US",
        "population": 12098
    }
};

export {testWeatherData, testWeatherData__RAW};