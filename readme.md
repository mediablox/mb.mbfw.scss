# mb.mbfw.scss
## Mediablox Framework - SCSS Module

The MBFW is the Mediablox framework for developing responsive web sites. The SCSS code is based on the awesome InuitCSS by Harry Roberts, and has been extended to include ui components and other additional features.

## Installation

To install the scss part of the framework, first download it with Git:

```
npm install --save git+https://github.com/mediablox/mb.mbfw.scss
```

## Getting Started

Once you have added scss files to your project, there are a handful of things we need to do before we’re ready to go.

Firstly, we need to identify any files whose name contain the word example. These files are scaffolding files that the framework requires, but that you are encouraged to create and define yourself. These files are:

```
example.main.scss
settings/_example.settings.theme.scss
settings/_example.settings.color.scss
```

### example.main.scss

This is your main, or manifest, file. This is the backbone of any MBFW project, and it is responsible for @importing all other files. This is the file that we compile out into a corresponding CSS file.

You need to copy this file from the directory that your package manager installed it into, and move it to the root of your css/ directory. Once there, rename it main.scss.

Next, you’ll need to update all of the @imports in that file to point at the new locations of each partial (that will depend on how your project is set up).

Once you’ve done this, you should be able to run the following command on that file and get a compiled stylesheet without any errors:

```
path/to/css/$ sass main.scss:main.css
```

### _example.settings.theme.scss

This is a configuration file that the MBFW uses to set up your project. It includes settings for breakpoints, fractions & ratios.

Copy this file into your own css/settings/ directory and rename it _settings.theme.scss.

### _example.settings.color.scss

This is where you set up the color themes for your project. It includes your main color theme, along with a set of alert colors and a set of greytones (inc. black and white).

Copy this file into your own css/settings/ directory and rename it _settings.color.scss.

## Directory Structure

The MBFW follows a specific folder structure, which you should follow as well in your own CSS directory:

- **/settings:** Global variables, site-wide settings, config switches, etc.
- **/tools:** Site-wide mixins and functions.
- **/generic:** Low-specificity, far-reaching rulesets (e.g. resets).
- **/elements:** Unclassed HTML elements (e.g. a {}, blockquote {}, address {}).
- **/objects:** Objects, abstractions, and design patterns (e.g. .o-layout {}).
- **/components:** Discrete, complete chunks of UI (e.g. .c-carousel {}).
- **/utilities:** High-specificity, very explicit selectors. Overrides and helper classes (e.g. .u-hidden {}).


## Namespaces

You may have stumbled upon the “odd” way MBFW’ classes are prefixed. There are three different namespaces directly relevant to MBFW:

- .o-: Objects
- .c-: Components
- .u-: Utilities

In short: Every class in either of these three directories gets the appropriate prefix in its classname. All the MBFW classes in one of these three layers has this kind of prefix. Be sure to follow this convention in your own code as well to keep a consistent naming convention across your code base.

If you want to dive deeper into namespacing classes and want to know why this is a great idea, have a look at [this article](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/).

## Responsive

The MBFW is built with extensibility in mind. Adding full responsive functionality for every kind of module would pretty much kill the intended generic concept behind the framework.

We made the decision to add Sass-MQ as a dependency, as a means to manage responsive queries. So if you need media-query support in your own Sass code, have a look at the Sass-MQ documentation on how to use it properly.

If you want to use another media-query library like @include-media or sass-mediaqueries, feel free to do so. But in this case you have to manage your responsive widths classes yourself.

## Prerequisites

Make sure you have at least Sass v3.3 installed.

## Dependencies

The following dependencies are required in order for the MBFW to function correctly.

- [InuitCSS:](https://github.com/inuitcss/inuitcss)
- [Font Awesome:](https://fontawesome.com/)
- [ScrollDir:](https://dollarshaveclub.github.io/scrolldir/)
- [What Input:](https://github.com/ten1seven/what-input)
