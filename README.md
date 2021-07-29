# Sky Journeys

This is a landing page for a fictional company called 'Sky Journeys'. They do hot air balloon tours around the world.

A live demo can be viewed [here](https://skyjourneys.netlify.app)

## Motivation

The main aim was to focus on using CSS and to demonstrate techniques with responsive design - the page is designed to be responsive down to a width of 280px (the width of Galaxy Fold, the lowest setting in Chrome dev tools).

## Technologies

This is mainly CSS, organised with Sass. A small bit of Javascript is used only for navigation and lazy loading images. As you can see from the package.json, there is no polyfilling or transpiling etc, only prefixing and compressing.

## Key Features

- Responsive design: breakpoints were decided on when the design needed it rather than choosing thresholds of the most popular devices, so there are quite a few.

- Fancy animation: postcards in the Tours section show some cool effects on hover. The mobile navigation also shows some nice tricks.

- Grids: used for the user reviews and features sections.

- Contact form: subtle effects used with basic layout.

- Lazy loading: loading time reduced as a consequence. Images are preloaded with a low resolution version, waiting for the high resolution to download if needed. Animation for the header is halted until the page is loaded.

## To Do

- Support for older browsers.

## License

Copyright © 2021 Adam Crombie.

This project is [MIT](./LICENSE.txt) licensed.
