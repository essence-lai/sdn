# Table of Contents
- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
- [Branching Strategy](#branching-strategy)

# Getting Started
This project is build and deploy with CircleCi and NetlifyCD
## Dependencies
#TODO

## Tests
#TODO

# Branching Strategy

## main workflow
* main workflow is triggered by on main branch
* execute unit tests
* deploy with redis cache

## pr workflow 
* pr workflow is triggered on feature/* branches
* lint
* execute unit tests