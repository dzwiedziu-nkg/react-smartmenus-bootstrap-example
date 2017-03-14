# react-smartmenus-bootstrap-example
Example of using Webpack, RectJS, Bootstrap and Smartmenus.

## Motivations

Previously, I hated to code in javascript. There was no IDEs and debuggers.
Split large code to small files was difficult because there was no imports or includes.
In addition, every browser interpreted the language in their own way (especially [IE6](https://en.wikipedia.org/wiki/Internet_Explorer_6#Criticism)).

Fortunately, times have changed. Now we have:
 * [ECMAScript 6](http://es6-features.org/#Constants) with many improvements of language,
 * [Babel](https://babeljs.io/) and polyfills to make code with new features compatible with older browsers,
 * [Webpack](https://webpack.js.org/) to build large JavaScript project with styles, images and various depends (imports) to minified static assets,
 * [ReactJS](https://facebook.github.io/react/) with great manage of visual components,
 * [Bootstrap](http://getbootstrap.com/) as most powerful HTML, CSS and JS framework that looks perfect both on mobile and desktop,
 * [Yeoman](http://yeoman.io/) to init new project from generator. 

So, I started exploring modern web frontend ecosystem. I found nice menu module named [Smartmenus](https://www.smartmenus.org/).
It has integration with Bootstrap but I no found example of use it in ReactJS. So let's go.

## Getting started

```bash
# Download code
git clone https://github.com/dzwiedziu-nkg/react-smartmenus-bootstrap-example.git

# Go to project's directory
cd react-smartmenus-bootstrap-example

# Download depends
npm install

# Run for development
npm start

# Build dist version (static assets
npm run dist
```

When you start project via `npm start` then you may open [http://localhost:8000/](http://localhost:8000/) in your favourite browser.
When you make dist via `npm run dist` then you can copy whole `dist/` to your web server and open `index.html` in browser.
It is possible to run locally from file system (without web server).
It will be work when you replace `src="/assets/app.js"` to `src="assets/app.js"` in `dist/index.html`.

## How it made

Quasi-tutorial how to create this project from empty directory:
1. Init new project by Yeoman's [react-webpack](https://github.com/react-webpack-generators/generator-react-webpack) generator.
2. Add depends to `package.json`.
3. Configure Webpack from `bootstrap` and `smartmenus-bootstrap` modules.
4. Adopt HTML from original demo to react's renderer.

### Init new project

Creating new project via Yeoman is very simple:

```bash
# If you have not already done, install yeoman and react-webpack generator globally
npm install -g yo generator-react-webpack

# Create a new directory, and `cd` into it:
mkdir react-smartmenus-bootstrap-example && cd react-smartmenus-bootstrap-example

# Run the generator
yo react-webpack
```

You can open project in your favourite IDE i.e. Webstorm. If you want to run, type it in command line:
```bash
npm start
```

When you modify code, webpack recompile code in background.

If you use [http://localhost:8000/webpack-dev-server/](http://localhost:8000/webpack-dev-server/) instead [http://localhost:8000/](http://localhost:8000/)
you will get additional debug messages in your browser. After code modification, some content will be updated in browser without reload of web. 

### Add depend modules and configure

When module are published as npm package then adding it to project is trivial:
```bash
# Install npm moduels and add there to project demendency list
npm install --save jquery bootstrap smartmenus smartmenus-bootstrap
```

Unfortunetly 
