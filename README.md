# HACK

## Purpose

This repository is a hacked version of [practicalmeteor:mocha-core](https://github.com/practicalmeteor/meteor-mocha-core) which integrates the TeamCity reporter.

It has only been tested with [dispatch:mocha](https://atmospherejs.com/dispatch/mocha) as a test driver.

This hack was needed because integrating [mocha-teamcity-reporter](https://github.com/travisjeffery/mocha-teamcity-reporter) at the application level does not work with Meteor (the trick used by mocha to set the search directories and 'require' the package on demand fails for multiple reasons).

## Usage

In order to override the default [practicalmeteor:mocha-core](https://atmospherejs.com/practicalmeteor/mocha-core) used by [dispatch:mocha](https://atmospherejs.com/dispatch/mocha), you will need to install this repository as a local package ([tutorial](https://themeteorchef.com/tutorials/writing-a-package)).

In order to activate the TeamCity reporter, you will need to set the following environment variables:
````
CLIENT_TEST_REPORTER=teamcity
SERVER_TEST_REPORTER=mocha-teamcity-reporter
````
The difference between client and server side reporter name is an artefact of how it is registered in each case, unavoidable without modifying [mocha-teamcity-reporter](https://github.com/travisjeffery/mocha-teamcity-reporter) itself...

----

Original documentation follows.

----

# practicalmeteor:mocha-core

This is an internal package. Please use one of the following test driver packages:

## Meteor pre-1.3

* [practicalmeteor:mocha](https://atmospherejs.com/practicalmeteor/mocha) Runs client and server code tests and displays all results in a browser. Use [spacejam](https://www.npmjs.com/package/spacejam) for command line / CI support.

## Meteor 1.3+

Choose the one that makes sense for your app. You may depend on more than one.

* [practicalmeteor:mocha](https://atmospherejs.com/practicalmeteor/mocha) Runs client and server package or app tests and displays all results in a browser. Use [spacejam](https://www.npmjs.com/package/spacejam) for command line / CI support.
* [dispatch:mocha-browser](https://atmospherejs.com/dispatch/mocha-browser) Runs client and server package or app tests with Mocha reporting client results in a web browser and server results in the server console. Has a watch mode.
* [dispatch:mocha](https://atmospherejs.com/dispatch/mocha) Reports server AND client test results in the server console and can be used for running tests on a CI server or locally. Has a watch mode.
