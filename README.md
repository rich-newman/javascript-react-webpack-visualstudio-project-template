# React HTML Application Template (JavaScript)

**What It Is**

A template for new projects in Visual Studio 2017 and Visual Studio 2019 that creates an HTML application with the latest JavaScript that can use React and other Node modules.

The project contains an HTML file, a CSS file and a JavaScript file with some basic sample code.  The JavaScript file can contain React code.

**What It Does**

When started with F5 a project created with this template will start a web server and show a ticking time in the selected web browser, which can be Internet Explorer.  The code to show the time is in a JavaScript class which creates and renders a React component.

**Installation**

At the time of writing this template has not been released to Visual Studio Marketplace, and thus is not available in the extensions dialog in Visual Studio.  To install it, clone the Github project, load the solution file in Visual Studio, do a release build, and then doubleclick the .vsix file that is created as a result.  The usual extension install process will run and let you install to Visual Studio 2017 and/or Visual Studio 2019 if they are installed.  The extension can then be uninstalled from the Manage Extensions dialog as usual.

**Debugging in Visual Studio**

As with the [HTML Application with TypeScript template](https://marketplace.visualstudio.com/items?itemName=Rich-Newman.TypeScriptHTMLApplicationTemplate) and the [TypeScript with React HTML Application Template](https://github.com/rich-newman/typescript-react-webpack-visualstudio-project-template), this template allows debugging from Visual Studio in Chrome, Edge and Internet Explorer. Just create a project with the template, wait for the Node modules to auto-install, set a breakpoint in Visual Studio, and hit F5. There is no need to use the browser development tools. This makes the template useful as an HTML plus JavaScript playground.

**Relationship to TypeScript Version**

The project created by this template is identical to the project created by the [TypeScript with React Application Template](https://github.com/rich-newman/typescript-react-webpack-visualstudio-project-template), except that the code is in JavaScript not TypeScript and it uses Babel to transpile rather than the TypeScript compiler (see below).

**Node Modules, Babel and Webpack**

This template is set up to use React installed as a Node module.  For this it uses a module bundler, Webpack.  Webpack is also configured to use [Babel](https://babeljs.io/) to compile next-generation JavaScript to a version that can run in older browsers such as Internet Explorer.

Set-up for this kind of project in an IDE like Visual Studio can be difficult.  A motivation for this template was to create something that will do it for you with a minimal configuration.

You can use other third-party node modules than React if necessary.  Just add them to package.json under 'dependencies', and install them (rightclick package.json in Solution Explorer/Restore Packages).  Now you should be able to import them in your codefiles.

**Babel and Polyfills**

Babel isn't completely magical: there are some complex JavaScript language features, such as promises and reflection, that it can't compile back to earlier versions of JavaScript without a polyfill.  These polyfills are available in a package called [core-js](https://github.com/zloirock/core-js).  To use them install the package and then change the [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env.html) section in webpack.config.js as below, where 3.9 is the package version you installed:

`['@babel/preset-env', {
	"targets": "defaults",
	"useBuiltIns": "usage",
	"corejs": "3.10"
}]`

**Where the Template Appears**

In Visual Studio 2017 this template will appear under 'JavaScript' under 'Other Languages' in the New Project dialog.  This needs the correct dependencies installed, see below. In Visual Studio 2019's 'Create a new project' dialog the easiest way to find it is to filter by Language = JavaScript. In both cases it appears as 'HTML Application with React'.

Please be aware that *this template is based on ASP<span>.</span>NET*, so you will need the ASP<span>.</span>NET workload installed in Visual Studio 2017 or Visual Studio 2019.  If the workload is not there the template will not appear.  It does not need Node.js development or .Net desktop development workloads.

**Adding More Code Files**

One advantage of using a module bundler is that we can use [JavaScript modules](https://2ality.com/2014/09/es6-modules-final.html) without the need for any additional set-up.  That is, we can add a new JavaScript file to the project, write code in it and then export the parts we want to use elsewhere in the project.  We can then import into our existing code where we want the new code to be used.  When we build Webpack will deal with linking the code files together and creating one combined JavaScript file that works.