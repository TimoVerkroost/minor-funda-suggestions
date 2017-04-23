# Funda house suggestions
Use the APIs of Funda to get your own ideas and understanding a new way of seeking homes. A list, on a map, or another way, everything is worth considering! The aim is to help the Funda user to find their perfect home quickly and easily.

* [x] Server [`express`](https://github.com/expressjs/express).
* [x] Templating [`handlebars`](https://github.com/pillarjs/hbs).
* [x] Data from [Funda API](http://www.funda.nl/).
* [x] Score 100/100 on [Lighthouse](https://github.com/GoogleChrome/lighthouse) when using HTTP/2, when using HTTP/1 the score will be 88/100.
* [x] Score 100/100 on [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ffunda.timoverkroost.nl%2F).
* [X] Works offline with ServiceWorker.
* [X] Works without JavaScript.

## Screenshots
<img src="https://github.com/TimoVerkroost/minor-funda-suggestions/blob/master/repo-images/screenshot-zoeken.png" width="250"> <img src="https://github.com/TimoVerkroost/minor-funda-suggestions/blob/master/repo-images/screenshot-bewaard.png" width="250"> <img src="https://github.com/TimoVerkroost/minor-funda-suggestions/blob/master/repo-images/screenshot-suggesties.png" width="250">

[Live demo](https://funda-suggestions.herokuapp.com/)

## Size
* HTML: 5.27 KB GZipped.
* CSS: 4.2 KB GZipped (written for modern browsers without prefixes)
* JS: 5.43 KB GZipped written in ES5.
* Custom fonts: 10.5 KB GZipped and subsetted.

## Performance
### Before
**APP loading** `/`: Loading on fresh load transfers 762 KB. Without the Saved and Suggestions API call.

| **Connection**  | **DOMContentLoaded** |
| --------------- |:--------------------:|
| GPRS            | 5.65s                |
| Good 2G         | 1.65s                | 
| Good 3G         | 329ms                |
| Regular 4G      | 180ms                |  
| WiFi            | 131ms                |

### After
**Root(start) page loading** `/`: Loading on fresh load transfers 71.9 KB. (after this the Service Worker is cached and the size is 21.6 KB).

| **Connection**  | **DOMContentLoaded** |
| --------------- |:--------------------:|
| GPRS            | 3.86s                |
| Good 2G         | 655ms                | 
| Good 3G         | 200ms                |
| Regular 4G      | 148ms                |  
| WiFi            | 111ms                |

**Saved page loading** `/bewaard`: Loading on fresh load transfers 211 KB (without lazy loaded images). (after this the Service Worker is cached and the size is 167 KB).

| **Connection**  | **DOMContentLoaded**   |
| --------------- |:----------------------:|
| GPRS            | 5.08s                  |
| Good 2G         | 839ms                  | 
| Good 3G         | 409ms                  |
| Regular 4G      | 571ms :expressionless: |  
| WiFi            | 329ms                  |

**Suggestion page loading** `/suggesties`: Loading on fresh load transfers 250 KB (after this the Service Worker is cached and the size is 198 KB).

| **Connection**  | **DOMContentLoaded** |
| --------------- |:--------------------:|
| GPRS            | 4.60s                |
| Good 2G         | 797ms                | 
| Good 3G         | 387ms                |
| Regular 4G      | 353ms                |  
| WiFi            | 292ms                |

## Build / Install and start project 

### Clone this repo

```
  git clone https://github.com/TimoVerkroost/minor-performance-matters-funda
  cd minor-performance-matters-funda
```

### Install the dependencies
```
npm install
```

### Initialize .env file with your API key
Because we are working with a secret API key we have to hide it in an .env file, after you cloned the repo create in your root a file named .env after this fill in the example code below and change the API key.
```
FUNDA_KEY=ThisIsThePlaceWhereYourApiKeyShouldBe1337
```

### Build CSS and JS
This will build the minified and cleaned CSS and JavaScript files.
```
npm run build
```

### Start server
```
npm start
```

## Optimalisations

### With help of node modules
* Gzip compressed the website with [`compression`](https://github.com/expressjs/compression).
* Save and use form data with [`body-parser`](https://github.com/expressjs/body-parser).
* API calls server-side with [`request`](https://github.com/request/request).
* Combine and compress JS with [`browserify`](https://github.com/substack/node-browserify) and [`esmangle`](https://github.com/estools/esmangle).
* Compress CSS with [`uglifycss`](https://github.com/fmarcia/UglifyCSS).
* Lazy load images with [`lazysizes`](https://github.com/aFarkas/lazysizes).
* Async font loading with [`fontfaceobserver`](https://github.com/bramstein/fontfaceobserver).

### External tools and code refactor
* Client side JS are only enchantments for better UX.
  * LocalStorage to store the user data so he/she doesn't have to fill it in twice.
  * When in offline modes the external Funda images won't load they will be replace with blurred dummy images.
  * Lazy loaded images.
  * Async loading fonts.
* Critical CSS loaded before stylesheet.
* Caching used.
* Picture element to show right image on right size of screen.
* Optimized the SVG images with [ImageOptim](https://imageoptim.com/mac).
* Font subsetting to load only the needed characters with [Fontie](https://fontie.pixelsvsbytes.com/webfont-generator).
* Async loading CSS with rel="preload" and added fallback with [loadCSS](https://github.com/filamentgroup/loadCSS/).
* ServiceWorker added to cache pages.

## To do
* [ ] Use promises for API calls in Expressjs
* [ ] Database to save "saved" houses so we don't have to do a request every time the page (re)loads.
  * [ ] Login to manage saved houses.
* [ ] Saved houses images offline available.

## Licence
MIT © Timo Verkroost
