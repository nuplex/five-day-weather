# Your Five Day Weather

## About

This is a simple **React** app that displays a five day forecast for a location. You can enter a location, or press a button and 
the app will locate you. That's all!

#### create-react-app
This app was initialized with create-react-app. While create-react-app does come with some boilerplate, it is great for 
quickly starting small applications like this where modifications to build folders (e.g. bable, webpack), are not 
necessary. If ever needed, an `npm run eject` allows access to all files and configurations.

## Get Started

#### Live Link
The app is live here:

#### Build & Run Locally
To build and run the app:
1. Clone this repo
2. Ensure you have the latest version of Node and npm installed
3. Open your terminal or shell, navigate to the project directory. In the root directory:
4. Do `npm install`
5. Then `npm run build`
6. Then `npm run start` (or `node server` to run only the `/build` folder)
7. Navigate to `localhost:3000` or `localhost:33278`
8. There's the app! 

If you ran `npm run start`, nodemon is installed and will live-update changes to the project.

To end the program, in your terminal press `CTRL + C`

#### Testing
To run the unit tests, do `npm run test`.

If testing lat/lon: [Issue with OpenWeatherMap Latitude/Longitude Query](https://github.com/nuplex/five-day-weather#other-issues)

## Thought Process

1. Carefully read over the specifications. I read over each part and thought about how
to do it with my given experience. It did not seem initially like much work.
2. Research and test the API, understand the returned data. Finding out that there is no actual purely 'five-day' data 
returned increased the amount of work considerably. (Going from just showing, to parsing then showing).
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
visual components later. Look and feel updates we're incremental, and most was saved for the end.
9. Discussed below were the in-process trade-offs. Determining when to shelve something or to keep working on it is a 
constant decision.

#### Design Process



## Trade-offs
The main trade-offs were between:
- time
- mvp-factor
- polish

##### Time
Many of the wanted enhancements started out as things I wanted in the app when I first started, however after learning more 
about what OWM's API was capable of (or not), and what type of data it returned, I realized that
for the sake of time they could not implemented. 

##### MVP-Factor
The minimum viable product factor is how important a feature is to 
the given requirements of the project. Taking it at face-value, the MVP here would have been to have a single component 
get the data for a random city, or perhaps the current location, and display it. No inputs. However this wouldn't be much
of an application.

##### Polish
Juggling those two factors results in knowing what to polish and what not to. Being able to enter a location by city,
zip code, and lat-long is an adequate feature. The application using a minimalistic design instead of barebones HTML is
enough in terms of polish.

##### All-together now
Essentially, these led to:
- Refactoring the UI only when it was clearly clunky and unappealing.
- If a feature was non-mvp and was beyond what would be considered adequate-polish, and would take more than an hour or 
two to implement and test, it got tacked onto the 'Wanted Enhancements' list.

## Features

### Location Input

Type in a city, lat-long, or zip code, press Enter or 'Look Up!', and the forecast for that location
is returned.

##### Wanted Enhancement - Support Non-US Zip Codes
OWM is capable of returning data for these (zip code + country code), however figuring out the regex is a different 
story since zip-codes in other countries can have many different formats.

### Locate Me Button

Click the 'Look Me Up' button to get the forecast for your location, without inputting a thing.

##### Wanted Enhancement - Autofill Input Bar

This a button that simply gives OWM your lat-long and gives back the weather for
the closest city to you. It would be better to have this fill into the bar. This can be done by matching lat-long with 
the OWM bulk download of cities.

### View Weather Details

By clicking 'View Details' on a day, the app can display more weather data for that day.


### F°/C° Toggle

Click either 'F°'/'C°' toggle and the app will change the temperatures to that system.

##### Note
OWM by default returns temperatures in degrees Kelvin, but can return them in F°/C° as well if added to the query. 
However it would be slow to make a new query everytime these were switched, it's better to calculate them on the fly.

##### Note
The toggle could easily have Kelvin added to it. I left it out because it's not usually displayed on similar apps.

### Custom Weather Icons!

I made the Weather Icons myself! I didn't want to use stock photos, and frankly OWM's icons are a bit dated. The loading
icon is also made by me.

##### Wanted Enhancement - More Icons

There are many different weather conditions grouped under one category or one icon, it would be good to have more 
unique icons for each condition.

##### Wanted Enhancement - SVG Minify

The SVGs could be run through a minifier like SVGOMG, they likely are larger than they need to be.

## Other Wanted Enhancements

### Auto-Complete Location
Auto-complete location input, OWM does not have a direct way to do this, as it does not resolve states (e.g MD, NJ). 
It's implementable if just resolving countries, but this is an app based in the US. One solution I found is to use the
HTML5 getLocation, which return exact lat and long (as long as you're not a vpn), then,using that, send that lat-long 
to the Google Maps API, which can return an appropriate 'guess' to City, State, Country. Another, simpler and faster 
solution would be to store city data that has the lat-long of every city, and autocomplete based off that. OWM's bulk 
has this, but without states, so the user would not be able to differentiate between, e.g. Somerville, NJ and 
Somerville, MA. 

### Preload Weather from URL
The app is in a clear state on every reload. If we saved queries to the url as parameters, then on refresh we would see 
the same page, which is ideal. It would also allow pressing 'back' and 'forward'. The skeleton to do this is somewhat 
here (the location input can be preloaded through props). A different way to do it would be to have a generated route 
for each request. To easily do this the library `react-router-dom` is necessary.

##### Addendum - F°/C° defaults

The same applies to not defaulting to Fahrenheit. A `?d={F/C}` could be added that lets the app load into one
automatically. 

### Weather Blurb

A quick blurb under the location based off the current weather. For example, 'It's cold!' if the temparature is under a 
certain amount or 'It's a nice day out!' if it is clear and warm.

### Accessibility - Icon Alts

The icon alts are very basic and take the group weather pattern, this is most noticed for the 700s (volcanic ash, fog, 
etc.), which defaults to 'fog'. It would be better to make these more distinct.

### Support N,W,E,S Coordinate Input

Currently the app expects +/- type coordinate. Supporting this would allow this format to be submitted without the user 
converting it..

### Smooth Animations

My initial idea of the app had the input bar in the center of the screen, and then when you enter a place, it moves up
and shows the weather. I scrapped this when establishing trade-offs.

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
|nodemon|Live-updates changes to code (react-scripts does this *only* for `/src`)|
|npm-run-all|Allow `npm run start` to start multiple scripts|

## Project Structure
|directory|reason|
|---|---|
|build|Generated by `npm run build` or `node server`, this is what is put on `live` since it is minified.|
|public|Generated by create-react-app, hosts public assets, e.g. `index.html`|
|routes|Keeps API routes out of `server.js`|
|routes/api|Where the APIs actually go|
|src|Contains all code
|src/component|Contains all non-view-like components
|src/component/*|Individual components, optionally bundled with local-only css, a test `spec.js` and any utility functions `util.js`
|src/res|Project resources like css and images|
|src/res/css|CSS that applies to multiple components, or global tags|
|src/res/img|Images and icons|
|src/view|Contains components that are view-like, in that they essentially function as pages. There is only one in this application.
|src/view/*|See `src/component/*`|

I structured the project like this because I find it to be the most logical. It minimizes that shock you get when you open
a directory and there are 100 unorganized files in there, or single files containing too much code. The goal is to keep
relevant parts inside their own directories, e.g. components having their util functions, tests, and CSS in their directory.
For a small project, this level of organization isn't necessary, however it's always goo to keep
scalability of organization in mind.

## Known Bugs
- The regular expression governing the location input likely does not cover all
input scenarios.
- The `Look Up!` button will jump up very slightly when resizing down past a certain breakpoint.
- `Locate Me` can fail. See: [Issue with OpenWeatherMap Latitude/Longitude Query](https://github.com/nuplex/five-day-weather#other-issues)
- Valid latitude/longitude coordinates can fail. See: [Issue with OpenWeatherMap Latitude/Longitude Query](https://github.com/nuplex/five-day-weather#other-issues)
- The loading icon will sometimes show it's `alt` spinning if the svg has not loaded yet.

## Suspected Bugs
- The OpenWeatherMap calculates the 'five days' based off of 40 three hour periods. It also only starts the periods from
 the current time (e.g. if it is 13:00, the first block of the 40 will be 13:00). It seems that there is a chance that this
 period would overlap six days instead of five.
  
## Tech Debt
- Use variables for common spacings (e.g. 4px, 8px, 16px)
- Figure out a system for color variable shades (adding more `er`'s isn't scalable)

## Other Issues
### OpenWeatherMap Latitude/Longitude Query
OWM's API is very inconsistent with what it considers a valid input for latitude and longitude, identical inputs 
can succeed or fail, namely with the error `X is not a float`. After trial and error, I found part of the issue was due to how close
the lat/lon was to one of their preset points. It returns this error **even if the number is a float** or
even if it is a **valid location**. This means more often than not `Locate Me` will not work. The only solution would be
to implement an in-between on my side that uses their bulk city data, finds which point is closest to the passed in lat/lon,
and passes that instead.

This bug is also connected to having a `+` present before a value. However it is not consistent. Sometimes it will allow
the `+` other times it will not. I could not figure out what the conditions we're, so I removed `+` from my queries.

**Examples:**

- Eiffel Tower (lat=+48.8584&lon=+2.2945)
- My Town Location (lat=+40.5687695&lon=+74.6150385)

It also seems that if a query fails, but you remove the `+` and it (maybe) works, it works after that regardless of `+` being 
there or not. When I first put Eiffel Tower in, it did not work with `+`, after removing the `+`, it did, and ~~now it works
with either.~~ still works inconsistently. 

Precision is also a contributing issue, though it is widely inconsistent, since the API can return success and errors both 
for whole numbers and high precision floats.

I verified this inconsistent behaviour with Postman, an application that lets you edit and send requests and view the 
responses.

I do not know the steps to reproduce this error. It is seemingly random. The best coordinates to test with are those right
on top of major cities.

