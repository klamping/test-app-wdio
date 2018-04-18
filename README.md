# test-app-wdio

Run:

 `npm install`

## Working example (standalone mode)

Run: `node index.js`

Expected output: none

## Broken example (testrunner mode)

Run: `npm test`

Expected output: 1 passing test

Actual output:
```
ServerConnector.stopSession - unexpected status (OK)
Error: ServerConnector.stopSession - unexpected status (OK)
    at sendLongRequest.then.response (/Users/klamping/Sites/test-app-wdio/node_modules/@applitools/eyes.sdk.core/src/server/ServerConnector.js:271:19)
    at <anonymous>
    at process._tickDomainCallback (internal/process/next_tick.js:228:7)
```
