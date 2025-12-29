# Playwright - Automation Framework

## Table of contents

- [Introduction](#introduction)
- [Project Setup](#project-setup)
- [Writing Tests](#writing-tests)
- [Codegen and Its usecases](#codegen-and-its-usecases)

### Introduction

#### Playwright Overview

1. 3x cross: Platform, Browser (And Devices), Language
2. Own Built-in test runner with inbuilt Assertions
3. Auto-waiting, Code-gen, Annotations,tags, Many reporters
4. Integrated API testing
5. Powerful MCP server

#### Playwright Architecture

1. Playwright uses Websocket protocol
2. Test Runner >> Client API >> Communicate Layer >> Browser Server >> Browsers

### Project Setup

#### Playwright Installation

1. `npm init playwright@latest` to install the _Playwright_
2. `cmd + k + 0` to minimize/collapse the entire methods/objects in JS/TS file
3. `ctrl + cmd + space` to open the emojis
4. `npx playwright test` to run the test scripts containing in test folder and configurable in `playwright.config.ts`
5. `npx playwright show-report` to look for the default report
6. `ignoreHTTPSErrors: true` to remove the HTTP issues without any problem

#### Folder Structure

```
pw-automation-framework/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── .vscode/
├── config/
├── data/
│   └── constants.json
├── debug/
├── logs/
├── node_modules/
├── resources/
├── tests/
│   ├── api/
│   ├── demo/
│   ├── devices/
│   ├── e2e/
│   ├── example.spec.ts
│   ├── functional/
│   ├── helpers/
│   └── page-objects/
├── .env
├── .gitignore
├── env.example
├── package-lock.json
├── package.json
├── playwright.config.ts
└── README.md
```

### Writing Tests

#### First Spec File Creation

- Playwright recognizes the test files with `.spec.ts` or `.test.ts` extensions by default.
- `npx playwright test --help` to get the help menu for Playwright test runner commands.
- `navigationTimeout: 30000,` to set the navigation timeout to 30 seconds in `playwright.config.ts` file in `use` block.

### Codegen and Its usecases

- `npx playwright codegen <url>` to launch the codegen tool for the specified URL.
- `cmd + shift + p` to open the command palette in VS Code.
