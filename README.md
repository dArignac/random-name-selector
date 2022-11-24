# Random Name Selector

This static website allows you to randomly select a value from a list of names (it's just strings, so it can be anything).

The name list is given with the HTTP query parameter `names`, names are separated by comma.

Example: `https://yourhost.com/?names=Alex,Peter,Jane,Maria`

## Publication

To publish the static web page, run `build/publish.sh`, it will copy all files to the folder `output` and minify CSS, JS & HTML.
