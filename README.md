# Playwright - Automation Framework

## Table of contents

- [Introduction](#introduction)
- [Project Setup](#project-setup)
- [Writing Tests](#writing-tests)

### 1.Introduction

#### Playwright Overview

1. 3x cross: Platform, Browser (And Devices), Language
2. Own Built-in test runner with inbuilt Assertions
3. Auto-waiting, Code-gen, Annotations,tags, Many reporters
4. Integrated API testing
5. Powerful MCP server

#### Playwright Architecture

1. Playwright uses Websocket protocol
2. Test Runner >> Client API >> Communicate Layer >> Browser Server >> Browsers

### 2.Project Setup

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
