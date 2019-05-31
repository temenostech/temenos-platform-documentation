# Enterprise View

This section provides an overview of what the TCD solution is, and how it fits in with the wider Temenos and bank enterprise.

![](./images/enterprise-view.png)

**Note:** 

***UTP*** *is the Unified Temenos Platform, an exclusively internal Temenos program and an umbrella term for work related to improving the way we develop, build, test and release software.*

The TCD solution is composed of the ***Extend*** and ***Assemble*** modules to enable the provision of development and Integration test environments. The current state allows for these two modules only. Roadmap features envisage a Deliver module to cover pre-production and production environments.


The ***TCD Extend module*** is a multi-tenanted provisioning and deployment module that provides Users and/ or other systems with self-service management of Environments and provides access to the tools for enhancing Client Licensed Temenos Software. The Extend module enables authorised Users to provision Environments from a list of Templates for non-production use during development, test, integration, implementation and ongoing changes to the Products. The Extend module is a cloud-hosted platform service and manages Environments in either the Temenos cloud or a Client’s Target Cloud account.

Each ***Environment*** is a standalone instance of one or more Products or approved third-party applications / products running on the middleware defined in the Template.

Each ***Factory*** is formed of an Environment and one or more Test Clients. The Test Clients have their own Templates, which define their infrastructure, software Components and configuration.


The ***TCD Assemble module*** performs the test pipeline automation, continuous integration (“CI”) and continuous delivery (“CD”) of Client’s changes to Client’s Licensed Temenos Software. The Assemble Module utilises the same technologies as the Extend module, and does:

- deploy Test Clients;
- execute the Clients’ tests;
- orchestrate the deployment of Environments with Factories and the promotion of Packages through a workflow;
- manage storage of test results and application logs;
- manage the lifecycle of test Environments;
- provide a dashboard of test results with links to the underlying manifests, templates and, where appropriate, running Environments.

The ***TCD test result dashboard*** is a multi-tenanted web application hosted and operated by Temenos. The dashboard shows historic test results for a Factory within a configured Release and trends through a web UI pulling data from the Assemble Modules local database and test results and application logs in Target Cloud storage.


The ***TCD Artefact Repository*** is a third-party artefact repository “Artifactory by Jfrog” . The repository holds all the built software Components that are referenced by the Templates at the relevant test and deploy Stages. The Client will push all of its Product packages to the Artefact Repository



