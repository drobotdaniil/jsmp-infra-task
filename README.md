# JSMP-INFRA-TASK

JS package for mult elems in array and replace spaces in strings.

## Load

### Browser:

```html
<script src="node_modules/jsmp-infra-task/lib/index.js"></script>
```

### [Node.js](http://nodejs.org):

```powershell
$ npm i jsmp-infra-task
```

```js
var mult = require('jsmp-infra-task').mult; 
var replaceSpaces = require('jsmp-infra-task').replaceSpaces; 
```

## Example

```js
mult([1, 2, 3], 3);

replaceSpaces('Lorem ipsum', ',');
```