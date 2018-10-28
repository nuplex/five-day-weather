# Your Five Day Forecast

## About

This is a simple **React** app that displays a five day forecast for a location. You can enter a location, or press a 
button and the app will locate you. That's all!

#### create-react-app
This app was initialized with create-react-app. While create-react-app does come with some boilerplate, it is great for 
quickly starting small applications like this where modifications to build folders (e.g. babel, webpack), are not 
necessary. If ever needed, an `npm run eject` allows access to all files and configurations.

**Note:** In this project and README, 'OWM' is short for 'OpenWeatherMap'.

## Get Started

#### Live Link
The app is live here: https://nuplex-five-day-forecast.cleverapps.io/

**Note:** Make sure the link starts with `https://` or `Locate Me` will not work!

#### Build & Run Locally
To build and run the app:
1. Clone this repo
2. Ensure you have the latest version of Node and npm installed
3. Open your terminal or shell, navigate to the project directory. In the root directory:
4. Do `npm install`
5. Then `npm run build`
6. Then `npm run start` (or `node server` to run only the `/build` folder)
7. Navigate to `localhost:3000` (or `localhost:8080`, this is the server, it also serves `/build`)
8. There's the app! 

If you ran `npm run start`, nodemon is installed and will live-update changes to the project.

To end the program, in your terminal press `CTRL + C`

#### Testing
To run the unit tests, do `npm run test`. All test files are called `spec.js` in their respective directories.

If testing lat/lon: [Issue with OpenWeatherMap Latitude/Longitude Query](https://github.com/nuplex/five-day-weather#other-issues)

## Libraries

|library|reason|
|---|---|
|express| The app's server, router to handle REST APIs|
|path| Solely for __dirname which resolves the local directory |
|prop-types| Provides PropTypes to components, helpful for keeping track of props|
|react|The framework used|
|react-dom|Comes with React|
|react-flexbox-grid|Provides easy-to-implement responsiveness|
|react-scripts|Installed by create-react-app|
|request|Used to make  HTTP requests|
|url-parse|Cross-browser way to get queries from a url without writing own regexs|
|enzyme|Unit testing framework|
|enzyme-adapter-react-16|Makes enzyme work with React 16|
|nodemon|Live-update changes to code (react-scripts does this *only* for `/src`)|
|npm-run-all|Allow `npm run start` to start multiple scripts|

## Project Structure
|directory|reason|
|---|---|
|build|Generated by `npm run build`, used by `node server` and is what is shown on prod|
|public|Generated by create-react-app, hosts public assets, e.g. `index.html`|
|routes|Keeps API routes out of `server.js`|
|routes/api|Where the APIs actually go|
|src|Contains all code
|src/component|Contains all non-view-like components
|src/component/*|Individual components, optionally bundled with local-only css, a test `spec.js` and any utility functions `util.js`
|src/res|Project resources like css and images|
|src/res/css|CSS that applies to multiple components, or global tags|
|src/res/img|Images and icons|
|src/util|General scripts|
|src/view|Contains components that are view-like, in that they essentially function as pages. There is only one in this application.
|src/view/*|See `src/component/*`|

I structured the project like this because I find it to be the most logical. The goal is to keep relevant parts of a 
component inside their own directories, e.g. components having their util functions, tests, and CSS in their directory.
For a small project, this level of organization isn't necessary, however it's always good to keep project organization
scalability in mind.

## Thought Process

1. Carefully read over the specifications. I read over each part and thought about how to do it with my given 
experience. At this point I already had an idea of what the app would look 
like.
2. Research and test the API; understand the returned data. Finding out that there is no simple five data points 
returned, meant I had to develop a way to parse the data to extract the five days.
3. Determine what framework and library to use. React, to me, is best if I want to start quickly, so I chose it. I've 
explained why I used certain libraries below. A CSS-Preprocessor was not used because the estimated size of the  
application was small.
4. Determine the pure-MVP (project specification taken at face value), and my personal MVP, and resolve which features 
to implement based on how a typical forecast app would function.
5. Think and plan out the UI. I decided to make my own icons at this stage since it would be fairly quick.
6. Initialize the project, create directories. Create empty component folders so I know what components I will want.
7. Think of fail-states for each component. What would be considered 'passing'?
8. Start coding! Code, view, test, code, repeat. I focused on essential components first  (e.g. `LocationInput`, 
`GetFiveDayWeather`), ensuring I was getting data correctly back from the API, then worked more on 
visual components later. Functionality came first, then design later for each component. Each component and 
feature was added iteratively, starting from the basic MVP of an input field that returns data, and ending with the all
the pieces put together to form a full application

#### Design Process

My goal was to give the app a minimalist feel, while making it easy to navigate (some minimalist designs, ironically, 
are not). I placed emphasis on keeping it clean and responsive, though de-emphasized smooth transition animations, 
for the sake of time. 

I iterated through a few designs for multiple components. Usually I'd have something in mind, write up the CSS and then
see the draft live. Then later, when that component is implemented and relatively bug free, I'd come back to it and 
clean it up and make sure it integrated well into the overall design.

**Example**

On the smallest of screens, the app will stack all days on top of each other. While it does some stacking at various widths,
they are still in rows, as opposed to a single column. When in rows, it visually looks better if only `Today` has a background.
When they are all stacked, it very quickly becomes confusing which day you're looking at. So, I added a media query that
adds a background (and margins) to all individual days, so they are easily distinguishable on smaller screens.

## Trade-offs
The main trade-offs were between:
- time
- mvp-factor
- polish

##### Time
Many of the wanted enhancements started out as things I wanted in the app when I first started, however after learning more 
about what OWM's API capabilities and limitations were, and what type of data it returned, I shelved them for the sake of time.

##### MVP-Factor
The minimum viable product factor is how important a feature is to the given requirements of a project. Taking it at 
face-value, the MVP here would have been to have a single component get the data for a random city, or perhaps the 
current location, and display it. No inputs, no images, just five days of weather. However this MVP would be more like an 
API-call visualizer, than an application. My personal MVP has a higher threshold for this factor, allowing a more 
functional MVP.

##### Polish
Juggling those two factors results in knowing what to polish and what not to. Being able to enter a location by city,
zip code, and lat-long is good polish. Having an auto-complete input, would be high polish. The application using 
bare-bones HTML would be poor polish. The key, for a project of this type, is to land on good.

##### All Three
Essentially, these led to:
- Refactoring the UI when it was clearly clunky and unappealing.
- If a feature was non-mvp, was beyond what would be considered good-polish, and would take more than an hour or 
two to implement and test, it got tacked onto the 'Wanted Enhancements' list.

## Features

### Location Input

Type in a city ([City] or [City],[Country]), coordinates [+/-00(.00)+/-00(.00)], or a U.S. zip code [00000], then press 
Enter or the 'Look Up!' button, and the forecast for that location is returned.

##### Wanted Enhancement - Support Non-US Zip Codes
OWM is capable of returning data for non-US zip codes (zip code + country code), however figuring out the regex is a 
different story since zip codes in other countries can have many different formats.

### Locate Me

Click the 'Locate Me' button and the forecast for your location will be shown.

### F°/C° Toggle

Click the 'F°'/'C°' toggle and the app will show temperatures in the selected system.

##### Note
OWM by default returns temperatures in degrees Kelvin, but can return them in F°/C° as well if added to the query. 
However it would be slow to make a new query every time these were toggled, it's better to calculate them on the fly.

##### Note
The toggle could easily have Kelvin added to it. I left it out because it's not usually displayed on similar apps.

### Custom Weather Icons!

I made the Weather Icons myself! I didn't want to use stock photos, and frankly OWM's icons are a bit dated. The loading
icon and favicon are also made by me.

##### Wanted Enhancement - More Icons

There are many different weather conditions grouped under one category or one icon, it would be good to have more 
unique icons for each condition.

## Other Wanted Enhancements

### Auto-Complete/Suggest Locations
When typing, it would be nice for potential cities to be shown. OWM does not have a direct way to do this, as it does 
not resolve states or provinces (e.g MD, NJ). Thus the feature would be unhelpful if implemented using just OWM. 
One solution I found is to use the HTML5 geoLocation, which returns exact coordinates, 
then, using that, send those coordinates to the Google Maps API, which can return an appropriate 'guess' to your 
City, State, Country. Another solution would be to directly reference city data that has the coordinates of 
every city coupled with state and country information, and auto-complete based off that. OWM's bulk city list has this, 
but without states, so the user would not be able to differentiate between, e.g. Somerville, NJ and Somerville, MA. 

### Preload Weather from URL
The app is reset on every reload. If it saved queries to the url as parameters, then on refresh we would see 
the same page, which is ideal. It would also allow 'back' and 'forward' to function properly. 
The skeleton to do this is somewhat here (the location input can be pre-loaded through props). A different way to do it 
would be to have a generated route for each request. This can be done with the [react-router](https://github.com/ReactTraining/react-router).

##### Addendum - F°/C° defaults

The same applies to not defaulting to Fahrenheit. A `?d={F/C}` query could be added to the url, to let the app load into
a system.

### Next 12/18/24 Hours View
Since the API returns data in 3 hour chunks, the app could display future weather on an tri-hourly basis from the current
time. Many weather apps have this feature. Implementation could vary from a simple list to a graph.

### Weather Blurb

A quick blurb under the location based off the current weather. For example, 'It's cold!' if the temperature is under a 
certain amount or 'It's a nice day out!' if it is clear and warm.

### Accessibility - Icon Alts

The icon alts are very basic and just take the group weather pattern. This is most noticed for the 700s (volcanic ash, 
fog, etc.), which defaults to 'fog'. It would be better to make these more distinct.

### Support N,W,E,S Coordinate Input

Currently the app expects +/- type coordinate. Supporting this would allow this format to be submitted without the user 
converting it.

### Smooth Animations

My initial idea of the app had the input bar in the center of the screen, and then when the app gets the data, it moves 
up and shows the weather. I scrapped this when establishing trade-offs.

### Better Formatting Help

Formatting help could show up in a modal to be more easily readable. I scrapped modals (since they can be very finicky, 
especially when dealing with responsiveness) as a trade-off.

### Wind in kph

Wind is always in mph, to convert to kph would require a switch.

## Wanted Enhancements due to API Limitations
### Local Time for Passed In Location
The days of the week and dates do not update based off the city you searched. They are always based off the user's 
timezone. OWM does not return the timezone for the location requested, nor is it's `dt` or `dt_txt` timezone-adjusted, 
they are always UTC.

The only way to get the timezone would be to use a different API that can determine it based off of the location.

## Known Bugs
- The `Look Up!` button will jump up very slightly when resizing down past a certain breakpoint.
- `Locate Me` can fail. 
See: [Issue with OpenWeatherMap Latitude/Longitude Query](https://github.com/nuplex/five-day-weather#other-issues)
- Valid latitude/longitude coordinates can fail. 
See: [Issue with OpenWeatherMap Latitude/Longitude Query](https://github.com/nuplex/five-day-weather#other-issues)
- The loading icon will sometimes show it's `alt` `Loading...` spinning if the svg has not loaded yet.

## Suspected Bugs
- The high and low temperature calculation may be off in certain situations. 
See: [Tech Debt](https://github.com/nuplex/five-day-weather#tech-debt)
- The regular expression governing the location input likely does not cover all input scenarios.
    
## Quirks
- The closer you get to the end of the day, the closer the highs and lows get for `Today`, until they are the same. 
This is due to less data being available for the current day. Some apps, like The Weather Channel, do not display highs 
after a certain time.
- If you press `Locate Me` and the city name it gets back is not one on OWM's list, and you press `Look Up!` without
modifying the input field (which should have that city), you may get back an entirely different forecast for a different
city of the same name. This is because `Locate Me` is based off the unique lat/long, whereas city search is based off the 
city name and country code, which is not unique.
- The HTML5 geolocation API only works in local and `https://`, this intended by the API.
  
## Tech Debt
- Use CSS variables for common spacings (e.g. 4px, 8px, 16px).
- Figure out a system for color variable shades (adding more `er`'s isn't scalable).
- Determine if current uses of `!important` can be handled with alternative CSS.
- Find a way to tell the user that they can input [City],[Country Code] without overloading the placeholder, and without 
it being initially hidden by `Formatting Help`.
- `currHigh` and `currLow` in `GetFiveDayWeather/util.js` `getKeyData()` should not need to be checked against 
`Number.MIN_VALUE` and `Number.MAX_VALUE` before being set into a `day` object. But they are these values sometimes if 
there is only one data point for a day. The app sets these to `temp_min` and `temp_max` if this happens, which while 
adequate is not ideal.
- May need to improve error-handling. Messages may be too generic.

## Other Issues
### OpenWeatherMap Latitude/Longitude Query
OWM's API is sometimes inconsistent with what it considers a valid input for latitude and longitude, identical inputs 
can succeed or fail, namely with the error `X is not a float`. I don't know the steps to consistently reproduce this 
error. It's seemingly random when it occurs. Precision of the float seems to have some impact, or the location of the 
actual coordinates. The best coordinates to test with are those right on top of major cities.

I verified this inconsistent behaviour with [Postman](https://www.getpostman.com/), an application that lets you quickly 
edit and send requests to APIs and view the responses.

