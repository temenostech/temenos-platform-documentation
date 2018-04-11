# Architecture Overview

### **Where does Temenos Development Platform fit into the enterprise IT landscape?**

----------
The Temenos Development Platform promotes the concept of simplified and standardised change promotion through the IT landscape.

![](./images/architecture-arrows.png)

Typical organisations have a number of non-production (i.e. development/test) environments, where changes are implemented and checked prior to deployment to production systems. The Devops movement seeks to improve this QA process through means of automation, which both allows an increase in speed in change promotion, and a reduction in the risk of manual errors when promoting changes.

The Temenos DevX includes a simple and repeatable method of collating changes (both configuration and customisation) which subsequently is simple to promote from environment to environment.

In addition, the core function of the Development Platform  is to simplify the environment provisioning process, which means if extra stages in the change flow are required (e.g. for additional testing phases), it becomes far simpler to spin up temporary environments for these purposes.

It should be noted that the Development platfrom only supplies non-production environments (also known as 'sandboxes'), which means organisations will still require at least one non-production environment on representative hardware in order to sanity check changes prior to production release (see example below).


![](./images/architecture-paas-deploy.png)

Delegating platform and infrastructure responsibilities to a third party allows organisations to concentrate on what is important to them - applications and data.

![](./images/architecture-responsabilities.png)

The Development platform may be used for simple environment provisioning, or may be augmented by additional tools (such as Continuous Integration tooling) to provide a streamlined and automated development experience. The change promotion mechansim within the Development platform  is simple to plug into standard CI tooling to push code/config/data from environment to environment.  An example development flow is shown below:

![](./images/architecture-process.png)

### **What are the components of Temenos Development Platform?**

----------

Sandbox environments are managed by the Development Portal, and are comprised of distinct components as described below:

![](./images/architecture-customer-facing-systems.png)

| Component  				| Description	| 
| :---  					| :---  	| 
| Portal			|	The Portal is the front-end component of the Development Platform which allows users to perform management functions across sandbox environments.  These functions include user management and sandbox provisioning/scaling.| 
| Configuration Repository			|	The Configuration Repository is the 'change hub' for the Development Platform.  It supports configuration and customisation (per sandbox), including T24 updates, custom config/code packages, database imports and third party plug-ins/add-ons.|
| T24 Instance		|	The T24 instance comprises the application and database for T24.  The application tier may be scaled horizontally as required (via the management facility in the Portal).|
| Exports (File Storage)			|	The T24 database may be exported via the management facility in the Portal, as may the 'environment' (file system level). These exports are stored per Sandbox environment and may be downloaded by users via SFTP.|


### **What can you do with Temenos Development Platform?**

----------

Below is a list of functions which can be performed using Temenos Development Platform.

| Function  				| Description	| 
| :---  					| :---  	| 
| Provision a new environment|	Create an environment|
| Scale an environment|	Scale a environment horizontally by adding/removing additional T24 instances for a given database instance|
| Delete a environment|	Delete a environment |
| Manage a user|	Create/ edit/ delete a user|  
| Apply configuration/ customisation	|	Apply the necessary change components to create a customised environment configuration for an organisation|
| Login to T24|	Use the resultant customised environment|
| Import a database|	Import a database into a environment|  
| Export a database	|	Export a database from a environment (e.g. to re-import into another environment)| 
| Export an environment	|	Export a copy of a environment (file system level) for offline perusal| 


### **What tools do I need to use Temenos Development Platform?**

----------

Below is a list of tools which may be used to exploit Temenos Development Platform functionality.

| Tool  				| Description and Rationale	| 
| :---  					| :---  	|
| Git|	Git (/ɡɪt/) is a version control system for tracking changes in computer files and coordinating work on those files among multiple people.  A client program for Git is required to push artefacts into the configuration repository.|
| SFTP Client|	SFTP is the protocol used to download file exports (environment or database exports) |
| Continuous Integration Tool (Optional)	|	Continuous Integration tools may be used to help automate change promotion between environments.  There is no CI tool provided as part of the Temenos DevX, but these are useful in reducing manual tasks when managing environments.| 
| Design Studio (Optional)|	Design Studio is the IDE (Integrated Development Environment) produced by Temenos for developing changes in T24 systems.  Design Studio itself does not form part of the DevX, but change outputs from this tool are supported within the Configuration Repository. | 
