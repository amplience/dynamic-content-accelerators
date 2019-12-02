[![Amplience Dynamic Content](media/header.png)](https://amplience.com/dynamic-content)

# Dynamic Content Accelerators - Rendering Service

> Extensible content types and rendering templates for use with the Amplience Rendering Service

[![github version](https://img.shields.io/github/release/amplience/dynamic-content-accelerators.svg)](https://github.com/amplience/dynamic-content-accelerators/releases/latest) [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

This project is designed to accelerate implementing Amplience Dynamic Content. It contains a set of commonly used components implemented as handlebars templates that can be rendered by the [Content Rendering Service](https://docs.amplience.net/integration/contentrenderingservice.html#the-content-rendering-service).

[![Amplience Dynamic Content Accelerators](media/screenshot.jpeg)](https://amplience.com/dynamic-content)

## Demo

* [Working demo](https://dev-solutions.s3.amazonaws.com/dc-demo-site/dist/homepage/index.html?c=d8b929ee-214d-48f0-90c0-4e121ca55a6f&s=e6bdb253-db3c-4458-b5cc-0d90aa02e114) of the accelerator components.

* [Component explorer](http://dev-solutions.s3.amazonaws.com/dc-renders-wireframe/dist/index.html?c=ab78c8be-9f03-4a52-bde0-4ebde03b79a3) showcasing the capability of each component.

## Getting started

### Developing components

This project has a local development environment which lets you test your component templates, styles and javascript without deploying them to Dynamic Content.

Steps:

1. Check-out the project
2. Install project dependencies
```js
npm install
```
3. Run development environment
```js
npm run storybook
```

This will launch a browser displaying the components using [Storybook](https://storybook.js.org/), a popular component explorer. Any changes made to template files, styles or Javascript will reload automatically.

See the [documentation](#documentation) links below for further details.

### Exporting components

Before you can deploy the components you need to run the export process. This will compile, concatenate and minify the CSS & JavaScript as well as collect the templates, icons and content types into a folder to ease deployment.

Steps:

1. Ensure gulp-cli is installed:
```
npm install --global gulp-cli
```
2. Run gulp:
```
gulp buildAll
```

This will export the following files:

| file                | description                                                                                                                                                            |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| dist/contentTypes   | [Content Types](https://docs.amplience.net/integration/contenttypes.html) which define the content structure for each component.                                        |
| dist/templates      | [Content Rendering Service](https://docs.amplience.net/integration/contentrenderingservice.html#the-content-rendering-service) templates which render content to HTML. |
| dist/icons          | Icons for each component.                                                                                                                                              |
| dist/styles.min.css | CSS Styles for the components.                                                                                                                                         |
| dist/cardsStyles.min.css | CSS Styles for the cards.                                                                                                                                         |
| dist/utils.min.js   | JavaScript which adds functionality to the components.                                                                                                                 |
| dist/lory.min.js    | [JavaScript Library](https://github.com/loryjs/lory) required by the Slider component.                                                                                 |

### Deploying components

To make use of these components in your application you must configure them in your Amplience account in addition to including the CSS & JavaScript in your project.

#### Configure Dynamic Content

To make the components available for use they must be configured in your Dynamic Content account. This includes:

* [Content Types](https://docs.amplience.net/integration/contenttypes.html)
* [Content Rendering Templates](https://docs.amplience.net/integration/contentrenderingservice.html)
* [Image Transformation Templates](https://docs.amplience.net/contenthub/tools.html#templates)

Steps for this can be found in the [configuration guide](./docs/CONFIGURE-DYNAMIC-CONTENT.md).

#### Include CSS & JavaScript

Include a reference to the CSS & JavaScript resources in your application.

```html
<link rel="stylesheet" href="dist/styles.min.css"/>
<script src="dist/utils.js"></script>
```

If you are using the Slider component also include the [lory library](https://github.com/loryjs/lory).

```html
<script src="dist/lory.min.js"></script>
```

Interactive components will automatically attach their functionality when the DOM has loaded. If your application asynchronously renders the components you can manually activate the components with the following JavaScript:

```js
if (window.AmpCa && window.AmpCa.Utils) {
   window.AmpCa.Utils.attachComponents();
}
```

## Documentation

* [Creating new components](./docs/CREATING-COMPONENTS.md)
* [Extending Storybook](./docs/EXTENDING-STORYBOOK.md)
* [Template dependencies](./docs/TEMPLATE-DEPENDENCIES.md)
* [Hosting Content Types externally](./docs/EXTERNAL-CONTENT-TYPES.md)
* [Configuring images](./docs/CONFIGURING-IMAGES.md)

## Changes in version 5.0.0

These changes should ensure that the project is quick and easy to use, the content library has been brought to life and the content types are optimal.

1. One project – content types, CSS, rendering service and non-rendering service all in one project.
2. Beautiful cards – the cards are based on the mobile visualisation with a few edits.
3. All content types have cards – the cards render as they would in a page, with auto scroll down if the content is too large for the space.
4. All content types use the same card – one URL for all, one file to manage.
5. Content type schemas have be reviewed and updated:
    1. Modelling improved – content library only contains useful content and the user journey improved.
    2. Content types that don’t have a render now exist as partials.
    3. Content types for inline and external are exactly the same.
    4. Image content types separated to allow for easy image optimisation. Templates containing images can now pass parameters to the image template, which simplifies the template and improves reuse. 
    5. Fields have been updated to latest versions i.e. colour pickers etc..
    6. POI has been added to all except banner (we have updated our POI library with cool new features and added the latest version). If POI is added to the content form this should work out of the box.

## Getting Help

If you need help please reach out using one of the following channels:

* Ask a question on [StackOverflow](https://stackoverflow.com/) using the tag `amplience-dynamic-content`
* Contact your [Amplience Customer Success](https://amplience.com/customer-success) representative
* If you have found a bug please report it by [opening an issue](https://github.com/amplience/dynamic-content-accelerators/issues/new)

## License

This software is licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),

Copyright 2019 Amplience

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
