# Table of Contents
- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
- [Branching Strategy](#branching-strategy)

# Getting Started
This project is build and deploy with CircleCi and NetlifyCD

First, run the development server:

```bash
yarn install
yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file

## Tests

```bash
yarn test
```

# Branching Strategy

## main workflow
* main workflow is triggered by on main branch
* execute unit tests
* deploy with redis cache

## pr workflow 
* pr workflow is triggered on feature/* branches
* lint
* execute unit tests