# Test Applitools Repo with WebdriverIO

Run:

 `npm install`

## Running Tests

Run: `npm test`

Expected output: 3 passing tests

Actual output:
```
------------------------------------------------------------------
[safari #2-0] Session ID: B52D0535-889D-4907-8483-9075007A4B1D
[safari #2-0] Spec: test-app-wdio/test/basic.js
[safari #2-0] Running: safari
[safari #2-0]
[safari #2-0] applitools
[safari #2-0]   1) should work
[safari #2-0]
[safari #2-0]
[safari #2-0] 1 failing (4s)
[safari #2-0]
[safari #2-0] 1) applitools should work:
[safari #2-0] versionMatch.group is not a function
[safari #2-0] TypeError: versionMatch.group is not a function
[safari #2-0]     at Function.parseUserAgentString (test-app-wdio/node_modules/@applitools/eyes.sdk.core/lib/utils/UserAgent.js:178:50)
[safari #2-0]     at Eyes.open (test-app-wdio/node_modules/@applitools/eyes.webdriverio/lib/Eyes.js:138:35)
[safari #2-0]     at <anonymous>
[safari #2-0]     at process._tickDomainCallback (internal/process/next_tick.js:228:7)
[safari #2-0]

------------------------------------------------------------------
[firefox #1-0] Session ID: bf48d0d0-b4ae-3a4d-9b6e-bd0c22d70060
[firefox #1-0] Spec: test-app-wdio/test/basic.js
[firefox #1-0] Running: firefox
[firefox #1-0]
[firefox #1-0] applitools
[firefox #1-0]   ✓ should work
[firefox #1-0]
[firefox #1-0]
[firefox #1-0] 1 passing (13s)
[firefox #1-0]

------------------------------------------------------------------
[chrome #0-0] Session ID: a36c13f4d936fd362974322fdddb2a6a
[chrome #0-0] Spec: test-app-wdio/test/basic.js
[chrome #0-0] Running: chrome
[chrome #0-0]
[chrome #0-0] applitools
[chrome #0-0]   ✓ should work
[chrome #0-0]
[chrome #0-0]
[chrome #0-0] 1 passing (15s)
[chrome #0-0]



==================================================================
Number of specs: 3


2 passing (17.60s)
1 failing

1) applitools should work:
versionMatch.group is not a function
running safari
TypeError: versionMatch.group is not a function
    at Function.parseUserAgentString (test-app-wdio/node_modules/@applitools/eyes.sdk.core/lib/utils/UserAgent.js:178:50)
    at Eyes.open (test-app-wdio/node_modules/@applitools/eyes.webdriverio/lib/Eyes.js:138:35)
    at <anonymous>
    at process._tickDomainCallback (internal/process/next_tick.js:228:7)
```
