# **Temenos Cloud Development Platform**

## **DevX** 


----------

### What is Temenos PaaS?

Temenos PaaS is a type of cloud service offered by Temenos Cloud; it is a *Platform as a Service (PaaS)* that provides individuals and teams with the ability to manage and configure their own instances of Temenos applications and approved 3rd party Plug & Play applications from the Temenos ecosystem.

### What is DevX?

“DevX” is a cloud based infrastructure for use during development, test, implementation, and ongoing change with configurable and scalable Temenos Suites on-demand. DevX enables you to create Environments, i.e. Temenos Suites on-demand, for non-production use in the cloud.  Environments can be requested and provisioned within minutes rather than weeks helping you accelerate your projects. Retail Suite is readily available, with all other Temenos Suites (Corporate, Wealth, Micro-Finance and Islamic Banking) available on request and allow you to develop and test your proof of concept, share development environments across dispersed teams, replicate production environments or use them for training. The speed, reliability, and agility of these environments will instantly add value to your implementation and scale your project delivery capacity.



## **Features**

----------

### What are the key features of DevX?

•	Immediate provisioning of identical environments

•	Deployment of change is fully automated; with plugins, add-ons, updates, packages, data, and configuration all being managed through a software configuration management repository

•	Metered usage and full reporting

•	Self-service data loading

•	Self-service data export

•	Self-service horizontally scalable (Scale up / down)

•	Self-service access to log data

•	Self-service job initiation

•	Point in time rebuild of database (Backup / Restore)

•	Managed OS patching


## Temenos Cloud Management of Organisations, Users and Environments 

----------


- **Organisation ID**

The Temenos Development Platform support multitenancy and Organisations are designed to be distinctive accounts.  

Upon subscription you'll receive a **unique** Organisation Id as a URL link such as: 

`http://portal.staging.temenos.cloud:4200/organisations/1cg74hgepdevio/login`

The confirmation of your Organisation activation will contain the link and access instructions to your designated Organisation administrator. The administrator is the first and only user.

![](./images/login-screen.png)

<br>

- **Users**

The Administrator can navigate to the Users section on the portal, create more users and invite them on the Development platform using the URL link. This way the administrator is in control of who receives the URL link and which users can access the Organisation.

The users of the platform can access the Organisation, view their user profile and change their password. Should the users requires access to the source code repository they need to provide their public SSH Keys on the user profile section to gain access.

![](./images/users.png)

<br>

- **Environments**

The Development platform has the capability to provision environments in a variety of different configurations. Users can initiate a new environment and select from a predefined list of templates the application, the release and stack they wish to provision. Each month we host a new template with the latest release of Temenos suite. 

The environments are customisable in terms of Name and brief description to explain their purpose. The templates follow the official Temenos configuration stack but it can be customised for Releases 2016 onwards.   


Create your own environment:

![](./images/new-environment.png)

<br>

 - Fill Name and Description fields
 - Select one of the available templates from dropdown list, based on your requirements
 - Click **Create environment**

![](./images/new-environment-create.png)

<br>

- **Templates**

Check the list with all available templates. These are latest Retail Suites versions:

![](./images/templates.png)


## **Implementation FAQs**

----------

- **How can a customer gain access to DevX?**

The client should go through the normal procurement process for a Temenos Cloud service.  Temenos regional sales. 

- **What are the minimum system requirements?**

Internet access over https.

- **How can a customer deploy DevX?**

The clients will be supplied with a URL and initial login, from there they will be able to create their own environments at their chosen release, add users for a developer or team of developers and then they can create the environments immediately. The users can create up to the maximum number of environments purchased, once the environment is destroyed, another individual or team can create a new environment up to the maximum. This means that many teams can share a single subscription, very useful to remove barriers within project and in fully automated testing.

- **Who will handle customers’ queries/issues for DevX?**

Sales queries will be handled via the Temenos Cloud (TemenosCloud@temenos.com) support team. Support is available through a dedicated online support portal for cloud infrastructure issues.  All Product issues remain through the Temenos Customer Support. 


## **Data and Security Considerations**

The most important consideration with respect to data on the Temenos PaaS platform is that it for **non-production use only**.  For clarification, no 'personally identifiable information'; 'confidential' or 'sensitive' data may be stored on any sandbox environments.

Other considerations include:

•   Data is stored in UK datacentres

•   Data is encrypted in transit

•   Access to sandbox management facilities requires username/password and/or SSH certificates

•   Environments can be deleted immediately by the user. All client-related data will be deleted by Temenos 60 days 
after the termination of the agreement











