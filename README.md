# WhatsUpDoc

### Author
Scott Bergler  

## Table of contents
**[Description](#description)**<br>
**[Resources](#resources)**<br>
**[Installation Instructions](#setup-and-installation)**<br>
**[Known Bugs](#known-bugs)**<br>
**[Support](#support-and-contact-details)**<br>
**[Technologies Used](#technologies-used)**<br>
**[License](#license)**<br>
**[Copyright](#copyright)**<br>

## Description
This app allow users to find doctors in Portland that deal with their specific concerns. The user can enter their concern, symptom, or worry and find a nearby doctor who may be able to help.

The user can also search for a particular doctor by first and/or last name.

## Setup and Installation
Fork the repository from [GitHub](https://github.com/skillitzimberg/WhatsUpDoc).  
Clone your forked repository.  

Use your preferred command line/terminal to navigate into the directory:
```
cd WhatsUpDoc/
```

Open the project in a text editor like Atom.

#### Setup for BetterDoctor API usage
Go to [BetterDoctor](https://developer.betterdoctor.com/).
Set up an account for yourself.  
Register your application to get an API key.  
In the project's root directory, create a .env file (the dependencies to use environment variables have already been installed via the package.json file).  
In the .env file give your API key a name, something like:
```
API_KEY = xxxxxxxxxxx
```
(The x's represent your key just for this example. Replace them with your actual key.)

To use your key precede your API key name with "process.env." in the DoctorSearch.getDoctors(malady, first_name, last_name) method in doctorSearch.js:
```
let url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${first_name}&last_name=${last_name}&query=${malady}&location=45.5122%2C-122.6587%2C100&user_location=45.5122%2C-122.6587&sort=last-name-asc&skip=0&limit=10&user_key=${process.env.API_KEY}`;
```
#### Run the application
See [ABOUT TEMPLATE JS](./ABOUTTEMPLATE.md) for details on installing Node, Node Package Manager (npm), if you don't already have them on your machine.

Once those are in place . . .

In the project root directory run the command:
```
npm install
```
Run the command:
```
npm run start
```
Your default browser should open a new window or tab with the website/app ready to use.  

## Resources
[PROJECT PLANNING](./PLANNING.md): Outlines planning criteria, use cases, specifications, notes, and errata.

[ABOUT TEMPLATE JS](./ABOUTTEMPLATE.md): This project was instantiated using a template. ABOUTTEMPLATE is a run-down on what this template includes, why it's included, and how to use it.

## Known Bugs

## Support and contact details
Scott Bergler :: commandinghands@gmail.com

## Technologies Used
(This wonderful table was lovingly pilfered from [Tanvi Garg](https://github.com/TanviCodeLife) and modestly edited for my own sensibilities.)

For versions and a full list of dependencies, plugins, and scripts see the "devDependencies" section in [package.json](./package.json).  

| Dependency | Description |
| --- | --- |
| babel-core | Babel compiler core |
| babel-loaded | Babel loader for webpack |
| babel-present-es2015 | Specifies how Babel can convert ES6 to ES5 |
| clean-webpack-plugin | Clean your build folder(s) before building |
| css-loader | Interprets `@import` and `url()` like `import/require()` and resolves them |
| dotenv-webpack | imports information like API keys from .env to src/anyfile.js |
| eslint | Identifies and reports on patterns found in Javscript code |
| eslint-loader | ESLint loader for webpack |
| html-webpack-plugin | Simplifies creation of HTML files to serve webpack bundles |
| jasmine | Allows Jasmine specs to be run |
| jasmine-core | JavaScript BDD testing framework |
| karma | Allows the execution of JavaScript code in multiple *real* browsers |
| karma-chrome-launcher | Launcher for Google Chrome, Google Chrome Canary, and Google Chromium |
| karma-cli | Use Karma from the command line |
| karma-jasmine | Plugin - adapter for Jasmine testing framework |
| karma-jasmine-html-reporter | Dynamically shows test results at debug.html page |
| karma-jquery | Plugin - adapter for jQuery framework |
| karma-webpack | Use webpack to preprocess files in Karma |
| style-loader | adds CSS to the DOM by injecting a `<style>` tag |
| uglifyjs-webpack-plugin | Minifies JavaScript |
| webpack | A module bundler used to bundle JavaScript files and additional resources   *Note - Remove carrot sign ^ in version number if webpack issues occur* |
| webpack-cli | Use webpack from command line |
| webpack-dev-server | Provides live reloading during development |
| css-loader and style-loader | renders images in DOM when `<img>` tag is used |

## License
Licensed under the MIT license.

## Copyright
Copyright (c) 2019 ** Scott Bergler **
