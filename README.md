# formula1

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone https://github.com/kedarvijaykulkarni/formula1.git` this repository
* `cd formula1`
* `npm install`

* HTTP

### …or create a new repository on the command line

echo "# formula1" >> README.md
* `git init`
* `git add README.md`
* `git commit -m "first commit"`
* `git branch -M main`
* `git remote add origin https://github.com/kedarvijaykulkarni/formula1.git`
* `git push -u origin main`

* SSH

### …or create a new repository on the command line

* `echo "# formula1" >> README.md`
* `init`
* `add README.md`
* `commit -m "first commit"`
* `branch -M main`
* `remote add origin git@github.com:kedarvijaykulkarni/formula1.git`
* `push -u origin main`

### …or push an existing repository from the command line
* `remote add origin git@github.com:kedarvijaykulkarni/formula1.git`
* `branch -M main`
* `push -u origin main`


## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)



# Advance Configrations

## Change Project Layout Classic layout to Pods layout

* [Project Layouts](https://cli.emberjs.com/release/advanced-use/project-layouts/)

in `.ember-cli` file add usePods to the object as below

`
  {
    "disableAnalytics": false,
    "usePods": true
  }
`

add following line in `config/environment.js`
`
  podModulePrefix: 'video-games/pods',
`


## SCSS Related changes

Install some basic  repository

* `npm i ember-cli-sass --save-dev`
* `npm i sass --save-dev`
* `npm i tachyons-sass --save-dev`

Add some code in the `add default` and in the `ember-cli-build.js`

`
  sassOptions: {
    includePaths: [
      'node_modules/tachyons-sass'
    ]
  }
`

Change the file `app/styles/app.css` to `app/styles/app.scss`

add `app/styles/tachyons.scss` and import required scss from the the tachyons node_modules

then import tachyons in the app.scss

`
  // Tachyons Modules
  @import 'tachyons';
  tachyons.scss
`

## Test cases coverage checking

you need to install `ember-cli-code-coverage` package for that

in command prompt run following command

`
  COVERAGE=true ember test
`

under the coverage folder you can open the index.html file to check the report
