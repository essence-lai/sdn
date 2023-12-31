<h1 align="center"> Specially Designated Nationals Lookup </h1>
<div align="center">
This Next.js project efficiently verifies user entry eligibility through the publicly available OFAC API, optimizing backend API calls using Redis cache for enhanced speed.

<br/>

[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/9coiYMfcHu1ERt5ztmp4sB/9yfCKidfgjt4isH3ALyDU3/tree/main.svg?style=svg&circle-token=5251542d9ca63de57af1e4ddd651fdbb57d70773)](https://dl.circleci.com/status-badge/redirect/circleci/9coiYMfcHu1ERt5ztmp4sB/9yfCKidfgjt4isH3ALyDU3/tree/main)

[![Netlify Status](https://api.netlify.com/api/v1/badges/6be7c13a-2f70-44e2-b039-50fb4fc00c97/deploy-status)](https://app.netlify.com/sites/sdn-elai/deploys)

Questions? [`@essence-lai`](https://github.com/essence-lai)
<br/>

</div>

# Table of Contents
- [Table of Contents](#table-of-contents)
- [Quick Links](#quick-links)
- [Overview](#overview)
- [Useful Resources](#useful-resources)
- [Future Upgrades](#future-upgrades)

# Quick links
| Resource | Dev-pr | Prod |
| :---: | :---: | :---: |
| Interface | :---:| [SDN Lookup](https://sdn-elai.netlify.app/)|
| CircleCi | [All branches](https://app.circleci.com/pipelines/circleci/9coiYMfcHu1ERt5ztmp4sB/9yfCKidfgjt4isH3ALyDU3)| [Main](https://app.circleci.com/pipelines/circleci/9coiYMfcHu1ERt5ztmp4sB/9yfCKidfgjt4isH3ALyDU3?branch=main)|
| Netlify cache | :---:| [Netlify](https://app.netlify.com/sites/sdn-elai/overview)|
| Runbook | :---: | [**RUNBOOK**.md](docs/RUNBOOK.md)|
| Contributing | :---: | [**CONTRIBUTING**.md](docs/CONTRIBUTING.md)|


# Overview

We require the development of a streamlined, well-designed form enabling input of a person's **A) Full Name, B) Birth Year, and C) Country** with mandatory submission via a submit button. Submission failure should occur if **any of the three fields** are incomplete.

Upon submission, the backend response should be displayed as follows:

- **'Hit / Clear'** → Indicate if the customer's information matches the SDN list. **"Hit"** signifies a match, while **"Clear"** indicates no match.
- In the case of a **"Hit"** specify which parameters match. For instance, if the customer's name matches but birth year and country do not, this partial match should be displayed accordingly, e.g., (Name: ✅ DoB: ❌ Country: ❌).


# Useful resources
* [Specially Designated Nationals And Blocked Persons List(SDN)](https://ofac.treasury.gov/specially-designated-nationals-and-blocked-persons-list-sdn-human-readable-lists)
* [OFAC API Swagger](https://ofac-api.com/swagger-ui/index.html?configUrl=/api-docs/swagger-config#/Search%20API%20v3)
* [OFAC API Documentation](https://ofac-api.com/documentation/v3/index.html)
* [Next.js](https://nextjs.org/learn-pages-router/basics/create-nextjs-app)
* [Netlify + Redis](https://www.netlify.com/integrations/redis/)
* [Circlci](https://circleci.com/docs/getting-started/)

# Future upgrades
* Full Coverage Unit Tests for both front end and back end
* Upgrade api call times with a Redis cache to store previous responses
* Add Logging with Splunk and Monitoring with Newrelic