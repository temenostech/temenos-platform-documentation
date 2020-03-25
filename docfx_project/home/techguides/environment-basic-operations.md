# Environment Basic Operations

After creating an environment, there are several actions (operations) that can be done via the available buttons: start all environments, stop all environments, clone, edit, delete, start, stop, rebuild, export the database and deploy the repository and also using the endpoints related to T24, the database or to the repository.
<br>

![buttons](./images/buttons-all.png)

<br>

## Environment buttons ##



- **Start All User Environments** button - use this button to only start all user environments

 ![start](./images/start-all-user-env.png) 


<br>


- **Stop All User Environments** button - stops all running VMs that are part of the Environment

  ![start](./images/stop-all-user-env.png) 

<br>


- **Refresh** the page - use this button to refresh any action in progress (related to an environment but also to a factory)

 ![start](./images/button-refresh.png) 

<br>




- **Creating a new environment** - displays the fields required to create an environment. here you can give a name and a description to your environment and choose a template

 ![start](./images/button-new-environment.png) 


<br>


- **Cloning** an environment - creates an identical environment by copying the Environment and configuration repository

 ![start](./images/button-clone.png) 

<br>



- **Editing** an environment - allows you to change the name and the description of an environment

 ![start](./images/button-edit.png) 

<br>


- **Deleting** and environment - removes all resources including VMs and configuration repository that are part of an Environment
 
 ![delete](./images/button-delete.png) 





## T24 Release section - available actions ##

### <span style="color:orange;font-weight:1000;">**Endpoints**:</span>  ###

- GO TO APPLICATION - clicking this endpoint, a new tab containing the T24 BrowserWeb URL will open in a new browser window. The username and password to be used here will have been sent via email.

- MONITOR APPLICATION - clicking this endpoint, the TAFJEE Servlets page will open in a new browser tab and from here you can check the following sections:

   - Diagnostic section: provides details about your TAFJ environment, get routine compilation details, etc.
   - Execution section: run services, etc.
   - Troubleshooting section: access log files, commo files, etc.
<br>
- tcdSFTP.temenos.cloud - allows you to copy the SFTP link.
- Design Studio Kit - you can start downloading Design Studio tool (DS version is compatible to your environment). 


### <span style="color:orange;font-weight:1000;">**Buttons**</span>  ###


- **Starting** an environment:
- After creating an environment, the Start button is automatically disabled as the environment is running. It will be enabled if an environment is stopped and it will start all the instances specified in the Environment configuration.

- When the environment is stopped, start button is supposed to start the VMs where the database and the application server of a T24 environment are installed and also to start the application server (jboss, wildfly, WebSphere, etc.) so that T24 to be up and running. 
- However, please **note** that start button is not triggering also the deployment of whatever is present into the associated Git repository (such as something that was committed when the environment was stopped or a T24 update package ( L1 development) that was not yet successfully deployed to the T24 area).

 ![start](./images/button-start.png) 


<br>


- **Stopping**  an environment - stops all running VMs that are part of the Environment.

 ![stop](./images/button-stop.png) 



<br>


- **Rebuilding** an environment - it recreates the resourses into the cloud and re-installs T24 and H2 db. This is used for example when modifying the application templates (eg. changing the T24 displayed name or adding a new application).
    
 ![rebuild](./images/button-rebuild.png) 




<br>



- **Exporting** an environment  allows to export and import an environment or a database through SFTP server

 ![export](./images/button-export.png) 

<br>

Clicking the 'Export Environment' button will generate a zip file on the tcdSFTP.temenos.cloud portal containing:

   - all jar files deployed in T24 sandbox and the correspondent module.xml file;
   - the content of the default folder of T24;
   - all war files deployed in the T24 sandbox and the Jboss server log.

## Database section - available actions ##

### <span style="color:orange;font-weight:1000;">**Buttons**</span>  ###



- **Export** the database - by clicking the "Export database" button a zip file will be generated in the tcdSFTP.temenos.cloud portal which will contain the current database of the sandbox. Note: This database can be used as a backup that can be deployed later on into the sandbox as a duplicate for testing/development or for local development before deploying to the cloud.

 ![export](./images/button-export.png) 



### <span style="color:orange;font-weight:1000;">**Endpoints**</span>  ###

 - tcdSFTP.temenos.cloud - allows you to copy the SFTP link.

<br>

## Repository section - available actions ##

### <span style="color:orange;font-weight:1000;">**Buttons**</span>  ###



- **Deploy** button - used when deploying newly added plugins, endpoints, updates, web services, packages etc.

 ![deploy](./images/button-deploy.png)




### <span style="color:orange;font-weight:1000;">**Endpoints**</span>  ###

This section displays the GitLab repository correspondent to your T24 sandbox that you can copy it in order to clone the repository.

- example: git@tcdGitlab.temenos.cloud:1dyomzt4lxuyo/corebanking.git

> [!Note]
> <span style="color:RED">**IMPORTANT!**</span>
> 
> <span style="color:RED">As a good practice and in terms of reducing your costs, it is recommended that you don't keep an environment **unused**. Even if it's not used, it will still generate costs. The environment will be deleted by the Extend team (with a prior mail notification) when it is unused for more than 3 days (for internal clients), respectively for more than 7 days (for external clients).
> 
> Also to reduce costs, the environment can be put on **Stop** and started only when required. The environments that are stopped will not be deleted.</span>

## Schedule Environments ##
Users have the option to schedule environments at their convenience. To proceed:

-  go to the left-side menu
-  click on General 
-  select the 'Schedule Environments' tab

The user can either start or stop all environments on certain dates, days or at a certain hour (UTC time zone). 
![deploy](./images/environment-schedule.png)

# User Permissions Required
To be able to perform basic  environment operations the below permissions need to be enabled for your user:

- MANAGE _ ENVIRONMENTS
- CREATE _ ENVIRONMENT
- UPDATE _ ENVIRONMENT
- DELETE _ ENVIRONMENT
- BOOST _ ENVIRONMENT
- REDEPLOY _ ENVIRONMENT
- START _ ENVIRONMENT
- STOP _ ENVIRONMENT
- ALLOW -  EXPORT  - ENVIRONMENT
- START -  ALL  - ENVIRONMENT
- STOP -  ALL  - ENVIRONMENT
- SCHEDULE _ ENVIRONMENT
- ALLOW - EXPORT - ENVIRONMENT
- MANAGE _ ENVIRONMENTS

To understand what which of the permission does, hover the cursor over the variables and a short description will pop up or click [here](http://documentation.temenos.cloud/home/techguides/user-permissions) to get an overview of the permissions.

