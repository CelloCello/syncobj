# syncobj.js

You can use syncobj.js to let your function synchronous.

Your function should be in this pattern:

```javascript
// params: {}
// sCB: success callback function
// eCB: error callback function
function foo(params, sCB, eCB) {
	// ...
}
```

## Example

```javascript
var sync = new SyncObj(doneFunc);
sync.addFunc(testFunc, {str: "aaa"});
sync.addFunc(testFunc, {str: "bbb"});
sync.addFunc(testFunc, {str: "ccc"});
sync.start();

function testFunc(params, sCb) {
  console.log(params.str);
  sCb();
}

function doneFunc() {
  console.log("all done");
}
```
