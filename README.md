# react-smartmenus-bootstrap-example
Example of using Webpack, RectJS, Bootstrap and Smartmenus.

It is not tutorial. It is supplement for other great tutorials like
  modern frontend development ([en](http://frontendinsights.com/modern-front-end-development-technology-stack/), [pl](https://nafrontendzie.pl/stos-technologiczny-dla-front-endu/)),
  JavaScript ES6 ([en](http://es6-features.org/), [pl](https://nafrontendzie.pl/ecmascript-6-co-nowego/)),
  ReactJS ([en](https://facebook.github.io/react/tutorial/tutorial.html), [pl](https://nafrontendzie.pl/podstawy-reactjs-kompletny-tutorial/)),
  Webpack ([en](https://webpack.github.io/docs/tutorials/getting-started/), [pl](https://nafrontendzie.pl/podstawy-konfiguracji-webpack/)),
  Yeoman ([en](http://yeoman.io/learning/), [pl](https://nafrontendzie.pl/generator-projektow-yeoman/)) and
  Bootstrap ([en](http://getbootstrap.com/getting-started/), [pl](https://kursbootstrap.pl/)).

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

It is not complete tutorial. If you want understand follows please read tutorials listed at the top of this page.

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

Unfortunately, some modules need to special configuration in Webpack config.

The `bootstrap` module require `jquery` module but can't load it. Moreover, `jquery` module must be load to `jQuery` variable.
 So, you need to add to Webpack configuration:
 
```javascript
plugins: [
  new webpack.ProvidePlugin({
    jQuery: 'jquery'
  })
]
```

How to add, please see history of commits.

The `smartmenus-bootstrap` module have bug in import `smartmenus` module. 
This bug [was reported](https://github.com/vadikom/smartmenus/issues/66).
It want's to import `jquery.smartmenus` module but `smartmodule` is provided.
The workaround of this bug is make of alias for module name. It can be done in Webpack config:
 
```javascript
resolve: {
  extensions: ['', '.js', '.jsx'],
  alias: {
    [...]
      'jquery.smartmenus': 'smartmenus'
    }
  },
```

Now, these modules can be imported by `require` or `import` instructions in JavaScript code and `@import` instructions in CSS.
Please see [App.css](https://github.com/dzwiedziu-nkg/react-smartmenus-bootstrap-example/blob/master/src/styles/App.css) and [Main.js](https://github.com/dzwiedziu-nkg/react-smartmenus-bootstrap-example/blob/master/src/components/Main.js).
History of commits is interesting too.

### Adopt HTML from original demo to react's renderer

ReactJS can use [JSX](https://facebook.github.io/react/docs/introducing-jsx.html).
It is extensions of JavaScript and it is very helpful for using HTML constructions in JavaScript code.
 
I adopt whole HTML code from [this example](http://vadikom.github.io/smartmenus/src/demo/bootstrap-navbar.html).
So I copied all HTML code from `body` tag to [`return` of `render()` methos](https://github.com/dzwiedziu-nkg/react-smartmenus-bootstrap-example/blob/master/src/components/Main.js#L12) and made some modifications:
1. Replace all `class` HTML tag's attributes to `className`.
2. Remove all HTML comments because JSX not supports `<!-- and -->`
3. Compilation of JSX cause remove of whitespaces. Usually it is not problem because browsers ignore whitespaces anyways unless you use `pre` HTML tag.
 But you can put raw HTML to [``dangerouslySetInnerHTML={{__html: `...raw HTML...`}}``](https://github.com/dzwiedziu-nkg/react-smartmenus-bootstrap-example/blob/master/src/components/Main.js#L156).

## Summary

Nowadays, development of JavaScript applications are easy and fun. 


## TODOs

Further improvements:
* split `Main.js` to small components,
* adopt others examples (such *Static top*, *Fixed top* etc.) and implement switching via `rect-router`

Welcome to **fork** and **pull request** extensions of this example.
