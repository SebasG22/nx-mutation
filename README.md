<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="100"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

# Nx Mutation Testing

It is very common that when a project grows rapidly, it is sought to minimize the amount of errors that can be injected into production code.

### Context
The development team or the rockstar developer always seeks to have a very good result in the coverage of tests but this does not mean that this does not mean that it is 100% free of bugs or that the tests are strong to changes.


To address that, you opt for techniques such as mutation testing which seeks to generate different variations (mutations) of our tests and check how fragile the project changes.

### What is mutation testing ?

Mutation testing is a fault-based testing technique where variations of a software program are subjected to the test dataset. This is done to determine the effectiveness of the test set in isolating the deviations.[1]

### What variations does apply ?
The most common are: 

- Arithmetic operator replacement (+,-,/,*,%)
- Logical connector replacement (&&, ||, ===,===)
- Statement removal
- Relational operator replacement (<=, >=)
- Absolute value insertion, etc. ( value)

[See Complete List](https://github.com/stryker-mutator/stryker-handbook/blob/master/mutator-types.md)

If the test survives a variation we say that the generated mutant survived.

## Which tools are available ?

One of the most common tools it's stryker, It support many programming languages:

- Javascript
- .NET
-

Notes:

- Mutation testing does not replace unit tests, rather they prove how resistent they are to changes.

- Mutation testing checks the effectiveness of the unit tests against the different variations, this means that it is based on the unit tests.


This repository contains practical examples of using the Sticker.io tool an an angular builder to mutation testing capabilites to Nx Workspaces.

## Adding mutation testing to your workspace

Nx supports  mutation testing as part of their core packages.

You need add to your workspace:

- [Stryker](https://angular.io)
  - `ng add @nrwl/stryker`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

## Start using Stryker

There are two ways to use stryker in your project, one is with the `stryker.config.js` or use it over `angular.json`.

### Generating stryker.config.js

Run `ng g stryker my-app` to generate the stryker config for `my-app`.

### Modify angular json
You can modify the `angular.json - mutate` target to pass it the configuration without explicit use `stryker.config.js`

> It accepts most of the same parameters.

## Running mutation tests

Run `ng run my-app:mutate` to start the mutants.

## How to use on CI env ?
Run `ng affected --target=mutate`

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
