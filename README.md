<h1 align="center"> Specially Designated Nationals Lookup </h1>
<div align="center">
This Next.js project efficiently verifies user entry eligibility through the publicly available OFAC API, optimizing backend API calls using Redis cache for enhanced speed.

<br/>
[![Circleci]]()

Questions? [`@essence-lai`](https://github.com/essence-lai)
<br/>

</div>

# Table of Contents
- [Table of Contents](#table-of-contents)
- [Quick Links](#quick-links)
- [Overview](#overview)
- [Useful Resources](#useful-resources)

# Quick links
| Resource | Dev-pr | Prod |
| :---: | :---: | :---: |
| Interface | :---:| [SDN Lookup]()|
| CircleCi | [All branches]()| [Main]()|
| Netlify Redis cache | :---:| [Redis]()|
| NewRelic Monitoring | :---: | [NewRelic]()|
| Splunk Logs | :---: | [Splunk]()|
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