## Algo Implementations Project

> This is a front-end project for classic Algorithm implementations.

This project relies on the _Polymer Starter Kit_ project in order to leverage the power of Polymer components.

### Included out of the box:

* [Polymer](https://www.polymer-project.org/), [Paper](https://elements.polymer-project.org/browse?package=paper-elements), [Iron](https://elements.polymer-project.org/browse?package=iron-elements) and [Neon](https://elements.polymer-project.org/browse?package=neon-elements) elements
* [Material Design](http://www.google.com/design/spec/material-design/introduction.html) layout
* Routing with [Page.js](https://visionmedia.github.io/page.js/)
* Unit testing with [Web Component Tester](https://github.com/Polymer/web-component-tester)
* Optional offline setup through [Platinum](https://elements.polymer-project.org/browse?package=platinum-elements) Service Worker elements
* End-to-end Build Tooling (including [Vulcanize](https://github.com/Polymer/vulcanize))
* [Recipes](/docs/README.md/) for ES2015 support, Polymer performance, using Chrome Dev Editor, Deploying to GitHub Pages, Deploying to Firebase, Mobile Chrome Apps and lint tools.

### Getting Started

#### Prerequisites

The full starter kit requires the following major dependencies:

- Node.js, used to run JavaScript tools from the command line.
- npm, the node package manager, installed with Node.js and used to install Node.js packages.
- gulp, a Node.js-based build tool.
- bower, a Node.js-based package manager used to install front-end packages (like Polymer).
- The starter kit gulp build process uses platform specific tools which is handled by node-gyp which is included in node.js. See https://github.com/nodejs/node-gyp/blob/master/README.md for additional platform specific dependencies.

**To install dependencies:**

1)  Check your Node.js version.

```sh
$ node --version
```

The version should be at or above 0.12.x.

2)  If you don't have Node.js installed, or you have a lower version, go to [nodejs.org](https://nodejs.org) and click on the big green Install button.

3)  Install `gulp` and `bower` globally.

```sh
$ npm install -g gulp bower
```

This lets you run `gulp` and `bower` from the command line.

4)  Install the starter kit's local `npm` and `bower` dependencies.

```sh
$ npm install && bower install
```

This installs the element sets (Paper, Iron, Platinum) and tools the starter kit requires to build and serve apps.

### Development workflow

#### Serve / watch

```sh
$ gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

#### Run tests

```sh
$ gulp test:local
```

This runs the unit tests defined in the `app/test` directory through [web-component-tester](https://github.com/Polymer/web-component-tester).

To run tests Java 7 or higher is required. To update Java go to http://www.oracle.com/technetwork/java/javase/downloads/index.html and download ***JDK*** and install it.

#### Graphics

The various graphics used in the app are based on [D3](https://d3js.org/).

For more details on the D3 API, visit the following: [D3 API](https://github.com/d3/d3/blob/master/API.md).

#### Build & Vulcanize

```sh
$ gulp
```

Build and optimize the current project, ready for deployment. This includes vulcanization, image, script, stylesheet and HTML optimization and minification.

### Unit Testing

Web apps built with Polymer Starter Kit come configured with support for [Web Component Tester](https://github.com/Polymer/web-component-tester) - Polymer's preferred tool for authoring and running unit tests. This makes testing your element based applications a pleasant experience.

[Read more](https://github.com/Polymer/web-component-tester#html-suites) about using Web Component tester.

### Dependency Management

Polymer uses [Bower](http://bower.io) for package management. This makes it easy to keep your elements up to date and versioned. For tooling, we use npm to manage Node.js-based dependencies.

Components installed by Bower live in the `app/bower_components` directory. This location is specified by the `.bowerrc` file. Many projects which follow Yeoman conventions place the `bower_components` directory outside of the `app` directory and then mount it using a server. This causes problems for tools like [Vulcanize](https://github.com/polymer/vulcanize) and [web-component-shards](https://github.com/PolymerLabs/web-component-shards) which rely on relative paths. We've chosen to simplify things and have `bower_components` live inside of `app` to resolve these issues.

### Firebase

[See detail recipe](/docs/deploy-to-firebase-pretty-urls.md/)
