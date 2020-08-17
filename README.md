# dark-mode-switcher

>Pure JS allow you to switch your web interface in dark mode.

## Informations
This script has been developed in parallel with the minstyle.io project, in order to facilitate the integration of the button to change display mode.

## Version
dark-mode-switcher V0.0.1

## Get Started

To install the script, three options are available :

The first possibility is to download `dist/dark.js` file, to integrate it into a web page :

```html
<script src="../dist/dark.min.js"></script>
```

You can also upload the script with NPM or Yarn :

**npm :**

```sh
$ npm install dark-mode-switcher
```

**yarn :**

```sh
$ yarn add dark-mode-switcher
```

## How it works

First, the script will inject on your web page an HTML structure, allowing to display a fixed button. It will allow the user to change the Dark/Light display mode.

By default, the theme displayed will be the one set on the operating system. Nevertheless, if the user wishes to change the display mode, a cookie will be created in order to keep this choice.

Changing the display mode changes the data-theme attribute of the `<html>` tag like that :

```html
<html lang="en"> <!-- For light mode. same as : <html lang="en" data-theme="light"> -->
<html lang="en" data-theme="dark"> <!-- For dark mode. -->
```

## What about the CSS?

In order to develop a web page with a dark theme, the use of CSS variables is necessary, such as the following  :

```css
html{ /* same as : html[data-theme='light'] */
  --default-bg: $default-bg;
  --default-font-color: $default-font-color;
}

html[data-theme='dark'] {
  --default-bg: $default-bg-dark-lighter;
  --default-font-color: $default-font-color-dark;
}
```

A detailed example is available [here](https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8). 

You can also use the CSS framework [minstyle.io](http://minstyle.io), integrating the management of the dark mode.