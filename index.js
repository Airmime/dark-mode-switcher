/**
 * Run this to minify dist/dark.js script
 */

 /* Packages */
const minify = require('minify');
const fs = require('fs');

/* minify options */
const options = {
    html: {
        removeAttributeQuotes: false,
        removeOptionalTags: false
    },
};

/* Minifier */
minify('./dist/dark.js', options)
.then(result => {
    console.log(result);
    fs.writeFile('./dist/dark.min.js', '/* @dark-mode-switcher - https://github.com/Airmime/dark-mode-switcher */' + result, function (err) {
        if (err) return console.log(err);
        console.log('Done.');
    });
})
.catch(console.error);


