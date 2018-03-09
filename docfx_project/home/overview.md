# **Temenos Cloud Development Platform**


### What is Temenos Cloud Platform?

Temenos Cloud Platform is a type of cloud service offered by Temenos Cloud; it is a *Platform as a Service (PaaS)* that provides individuals and teams with the ability to manage and configure their own instances of Temenos applications and approved 3rd party Plug & Play applications from the Temenos ecosystem.

## DevX

### What is Temenos DevX Platform?

“DevX” is a cloud based infrastructure for use during development, test, implementation, and ongoing change with configurable and scalable Temenos Suites on-demand[**... see more**](./what-is-devx.md)


## **Features**

----------

### What are the features of DevX?

**Self-service environment provisioning**

- An authenticated user, e.g. a developer or tester, has the ability to request an environment from the [catalogue of templates](./temenos-cloud-templates.md); this template will be materialised into compute, storage, and networks on the Temenos Cloud. See [architecture](./architecture.md). The platform administrator, e.g. the project manager, is in  control of number of the users and maximum number of running environments, thus having total control of the platform and its usage.

**Secure configuration and environment management**

- A developer, is able to configure a personal SSH Key on their user profile and use this key to securely push changes over SSH.  Deployment of change into the environment is fully automated for configuration, updates, plugins, add-ons and data.  These changes can be stored in a software configuration management repository and deployed to the environment via a Continuous Integration / Continuous Deployment process.

**Controlling the environment**

- A user is able to scale up, scale down, start, stop, delete, and export data from an environment.  Furthermore, a user is able to push a database into the configuration repository and rebuild the environment, thereby refreshing the database back to that point in time and re-apply transactions and configuration as required. 

- As an example, a developer or a tester can load a database and collaborate to validate changes and test cases in a shared environment. Should these users need to delete or migrate an environment, they can export the data, create a fresh environment with the latest release, upload the data and continue working all managed through the portal.  When development activity requires additional resources, the users can easily scale up the environments and equally reduce capacity or stop it entirely.

**Monitoring the environment**

- A user can export the application log data, monitor the status of the environments (started, starting, stopped, stopping, rebuilding), and see the results of any application deployments.


**Controlling the application**

- The Temenos core banking template [insert link] exposes endpoints for the user interface and TAFJEE management screens that allows a user to control COB job services.


## Managed Resources

----------

- **Users**

The users of the platform can access the Organisation, view their user profile and change their password. 

Please check [**here**](./users.md) more details about Users.

- **Organisation and Environments**

The Temenos Development Platform support multitenancy and Organisations are designed to be distinctive accounts.  Also it has the capability to provision environments in a variety of different configurations.

Please check [**here**](./techguides/environment-creation-in-paas.md) more details about Temenos cloud management of organisations and environments.

- **Templates**

The Temenos Development Platform can provision environments in a variety of different configurations through the concept of 'Templates'. Please check [**here**](./temenos-cloud-templates.md) for more details. 


## **Data and Security Considerations**

----------

The most important consideration with respect to data on the Temenos DevX platform is that it for **non-production use only**.  For clarification, no 'personally identifiable information'; 'confidential' or 'sensitive' data may be stored on any sandbox environments.

Other considerations include:

•   Data is stored in UK datacentres

•   Data is encrypted in transit

•   Access to sandbox management facilities requires username/password and/or SSH certificates

•   Environments can be deleted immediately by the user. All client-related data will be deleted by Temenos 60 days 
after the termination of the agreement











