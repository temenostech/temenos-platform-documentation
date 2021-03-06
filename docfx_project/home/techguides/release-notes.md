> [!Note]
>  With the 202103 release, the TCD user guide will move to the [Temenos Customer Support Portal (TCSP)](https://tcsp.temenos.com/TCD/Modules/TemenosContinuousDeployment/Overview/Overview.htm). We recommend you to log in to TCSP and check if your credentials are available. Raise a ticket at [CloudPlatformSupport@temenos.com](CloudPlatformSupport@temenos.com) if you encounter any issues.


## Release Notes
 
This page provides information about the monthly Temenos Continuous Deployment Platform features and improvements in each release. 


# **202102**
**InfraBuild**: 39  &nbsp;**|**&nbsp; **PortalTag**: 202011.RC3
&nbsp;**|**&nbsp; **ControllerBuild**: 335  &nbsp;**|**&nbsp;  **ReleaseNumber**: TCD202011 &nbsp; 
    
## Technical enhancements

&nbsp;&nbsp;&nbsp;&nbsp;**1. Users can connect to multiple Organizations**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Users can now use a single account to login to multiple organisation. While logging in, the user needs to select the organization he/ she wants to access and can switch from one organization to another at any point. Read more [here](http://documentation.temenos.cloud/home/user-creation-in-paas.html).
<br>  
</br> 

&nbsp;&nbsp;&nbsp;&nbsp;**2. Delete user created template** 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - The templates created using the **Save as New template** feature can be deleted using the **Delete** button action. Read more [here](http://documentation.temenos.cloud/home/techguides/save-as-new-template.html).
<br>
</br> 

&nbsp;&nbsp;&nbsp;&nbsp;**3. Deploy non-mandatory components via GIT post upgrade to speed up the upgrade**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- As part of this change, the AppServer will be created with only minimal & mandatory components so that the upgrade process will be faster. You can deploy non-mandatory components via GIT post upgrade (i.e. after exceptions are authorized and the DB is validated post the technical upgrade).
<br>
</br> 

&nbsp;&nbsp;&nbsp;&nbsp;**4. Fix - Logs can be exported for failed environments resulted from factory runs too**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Any available logs can be exported even while aborting the factory runs.
<br>
</br> 

&nbsp;&nbsp;&nbsp;&nbsp;**5. Component types are added to each organization when the template is assigned.**


<br>
</br> 

# **202101**
**InfraBuild**: 39   &nbsp;**|**&nbsp; **PortalTag**: 202101.RC6&nbsp; | **PortalBuild**: 2279**&nbsp;**|&nbsp; **ControllerBuild**: 416  &nbsp;**|**&nbsp;  **ReleaseNumber**: TCD202101 &nbsp;   

     
## Technical enhancements
 
&nbsp;&nbsp;&nbsp;&nbsp;**1. TCD202101 is now upgraded to Angular 11 which only supports IE11 as an opt-in feature (support for IE9 and IE10 is already removed). Release highlights:** 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Limit the errors we encounter for WhiteSource scans
<br>
</br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - The current release enables to migrate to ESLint from the current TSLint (which is also deprecated) – Required for better code quality.
<br>
</br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Benefit from TypeScript’s latest type checking.
<br>
</br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Avoid any known bugs and improve the accessibility of the portal
<br>
</br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -  Bootstrap 5 will also be dropping support for IE in coming months after which other libraries will follow. And it might not be possible to support it thereafter.
<br>
</br>

## UI enhancements

&nbsp;&nbsp;&nbsp;&nbsp;**1. Environment enhancements**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - The environment screen displays the Template version & Component list of the associated environment template. Also by clicking the template name in the Environment details page, you are directed to the selected template in the Templates catalog screen (see more [here](http://documentation.temenos.cloud/home/manage-environments.html)).
<br>
</br> 


&nbsp;&nbsp;&nbsp;&nbsp;**2. Factories run enhancements**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - The Factory run page displays the started timestamp for each stage and the duration between previous and current stage (read more [here](http://documentation.temenos.cloud/home/techguides/run-factory.html)).
<br>
</br> 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - You can run a factory run based on a custom template created from either a factory run or an Extend environment. A factory created using a custom template is not associated with any product and promotion configuration. This enhancement helps you run the test cases on a newly created template based on upgrades.
<br>
</br> 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - The factory run logs can be exported even if the environment repository deployment is failed during the factory run.
<br>
</br> 

&nbsp;&nbsp;&nbsp;&nbsp;**2. Org Admin enhancements**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - If you are an org admin, after logging in you can select the 'show permission' toggle inside the username menu. By enabling this feature, you can see the *Required Permissions* on hover of menus and buttons inside the tooltip in the portal (read more [here](http://documentation.temenos.cloud/home/user-creation-in-paas.html)).
<br>
</br> 

&nbsp;&nbsp;&nbsp;&nbsp;**2. Template enhancements**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Only Templates which are created successfully using *Save as New Template* option will be shown in the drop-down while creating Environments or Factories.
<br>
</br> 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -  The Artifactory URL is displayed in the components list table in the templates catalogue screen **only for client created/custom templates**. During the *Save as New Template* action if the template name already exists then error will be shown and allow the user to change the template name for resubmit.
<br>
</br> 

# **202012.01**
**InfraBuild**: 39   &nbsp;**|**&nbsp; **PortalBuild**: 2245
&nbsp;**|**&nbsp; **ControllerBuild**: 202012_HF1  &nbsp;**|**&nbsp;  **ReleaseNumber**: TCD202012.1 &nbsp; 
    
## Technical enhancements
 
&nbsp;&nbsp;&nbsp;&nbsp;**1. The number of environment validation not working as expected**
 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Now only the Extend environments are taken into consideration by the MAX _ ENV _ COUNT metadata. 
<br>  
</br>   

&nbsp;&nbsp;&nbsp;&nbsp;**2. Environments provisioned with the FCM, Infinity and Wealth templates have a similar dynamic structure as the ones provisioned with Transact templates** 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - As part of the GIT Folder Standardization changes, Temenos Continuous Deployment provides a separate folder structure for environments provisitioned with FCM, Wealth and Infinity Templates under the parent folder. Read more [**here**](http://documentation.temenos.cloud/home/techguides/deploy-an-update-to-an-existing-environment.html#the-environment-folder-structure-after-the-clone).
<br>
</br>

&nbsp;&nbsp;&nbsp;&nbsp;**3. The *Save as New Template* feature is not deploying the non-mandatory components**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Non-mandatory components are now getting deployed with the template created via the *Save as New Template* functionality.
<br>
</br> 

# **202012**
**InfraBuild**: 39    &nbsp;**|**&nbsp; **PortalTag**: 202012.RC5
&nbsp;**|**&nbsp; **ControllerBuild**: 364    &nbsp;**|**&nbsp;  **ReleaseNumber**: TCD202012   &nbsp; 
    
## Technical enhancements

&nbsp;&nbsp;&nbsp;&nbsp;**1. Removed references to T24**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - **T24** is renamed to **Transact** across the Temenos Continuous Deployment Portal.
</br> 

&nbsp;&nbsp;&nbsp;&nbsp;**2. Display the list of components that will be deployed** 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - After clicking Deploy a notification appears which shows the list of components that will be deployed during the repository deployment. You need to confirm the action to proceed.
<br>
</br>


# **202011**
**InfraBuild**: 39  &nbsp;**|**&nbsp; **PortalTag**: 202011.RC3
&nbsp;**|**&nbsp; **ControllerBuild**: 335  &nbsp;**|**&nbsp;  **ReleaseNumber**: TCD202011 &nbsp; 
    
## Technical enhancements

&nbsp;&nbsp;&nbsp;&nbsp;**1. Factory:  Product Configuration and Promotion Configuration changes**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Product and Promotion Configuration screens were enhanced for a better user experience. Read more [here](http://documentation.temenos.cloud/home/techguides/automated-factories.html).
<br>  
</br> 

&nbsp;&nbsp;&nbsp;&nbsp;**2. Factory Run: Added validation that checks for the correct file naming format** 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - File naming conventions are validated immediately after the factory run is triggered. If the naming convention is not compliant, the factory run fails. 
<br>
</br> 

&nbsp;&nbsp;&nbsp;&nbsp;**3. Environment Events tab improvements**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Error messages  in the environment **Events** tab are enhanced to provide meaningful information.

<br>
</br> 

# **202010**
**InfraBuild**: 39  &nbsp;**|**&nbsp; **PortalTag**: 202010.RC8
&nbsp;**|**&nbsp; **ControllerBuild**: 320  &nbsp;**|**&nbsp;  **ReleaseNumber**: TCD202010 &nbsp; 

## Technical enhancements

&nbsp;&nbsp;&nbsp;&nbsp;**1. Service Virtualization/ GIT folder standardization**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This feature provides a self-service template editing mechanism that creates custom template from a model bank template. All the component binaries used in the environment can be changed once the environment is created. Read more [here](http://documentation.temenos.cloud/home/techguides/git-folder-standardisation.html?q=git%20fol).
<br>
<br/>

&nbsp;&nbsp;&nbsp;&nbsp;**2. User Password Reset Option**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Organization Admins can now reset other user's password. (read more [here](http://documentation.temenos.cloud/home/user-creation-in-paas.html#recover-password)). 
<br>
</br>


&nbsp;&nbsp;&nbsp;&nbsp;**3. Change in the naming convention of the downloaded test results**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Now the tests results file name downloaded from the Factory Dashboard has a unique name containing the factory name and the time stamp (i.e.: factoryname_timestamp_testresults.zip).
<br>
</br> 

&nbsp;&nbsp;&nbsp;&nbsp;**4. Factory run manifest file**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- The factory run manifest now displays the test cases and the platform always picks up the latest file from the test cases component in artifactory.
<br> 
</br>  
 
&nbsp;&nbsp;&nbsp;&nbsp;**5. Factory edit issues**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- To improve the user experience, UI changes have been applied to the **Edit Factory** feature (read more [here](http://documentation.temenos.cloud/home/techguides/automated-factories.html)).
<br>
</br> 

# **202009**
**InfraBuild**: 39  &nbsp;**|**&nbsp; **PortalTag**: 202009.RC4
&nbsp;**|**&nbsp; **ControllerBuild**: 273  &nbsp;**|**&nbsp;  **ReleaseNumber**: TCD202009 |&nbsp; **WorkflowServiceTag**: 202009.RC5

## Technical enhancements
&nbsp;&nbsp;&nbsp;&nbsp;**1. The SFTP servers can now be accessed over HTTPS**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- This enhancement directs the user to reset the password if required to enable HTTPS based access (read more [here](http://documentation.temenos.cloud/home/techguides/https-in-front-of-sftp.html?q=https)).
<br>
</br> 



&nbsp;&nbsp;&nbsp;&nbsp;**2. Provide ability to skip target environment creation for an already executed factory run.**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Temenos Continuous Deployment Platform enables users to reuse existing environments on factory runs to rerun the tests. User guide available [here](http://documentation.temenos.cloud/home/techguides/run-factory.html).
<br>
</br> 

&nbsp;&nbsp;&nbsp;&nbsp;**3. Forgot password documentation**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- To recover a forgotten password please refer to the documentation available at [this](http://documentation.temenos.cloud/home/user-creation-in-paas.html#recover-password) link.
<br>
</br> 

&nbsp;&nbsp;&nbsp;&nbsp;**4. Reduce session timeout for inactive users on the Temenos Continuous Deployment Platform**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- For security purposes, if you are inactive for more than 5 minutes on the Temenos Continuous Deployment Platform a dialog box pop up prompts on the screen in the last minute of your inactive session which asks to choose whether you want to extend the session or logout. Read more [here](http://documentation.temenos.cloud/home/user-creation-in-paas.html).
<br>
</br> 

<br>
</br> 


# **202008**
**InfraBuild**: 33  &nbsp;**|**&nbsp; **PortalTag**: 202008.RC9
&nbsp;**|**&nbsp; **ControllerBuild**: 233  &nbsp;**|**&nbsp;  **ReleaseNumber**: TCD202008 |&nbsp; **WorkflowServiceTag**: 202008.RC7

## Technical enhancements
&nbsp;&nbsp;&nbsp;&nbsp;**1. The SFTP servers can now be accessed over HTTPS**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Access to SFTP server is now available through HTTPs (read more [here](http://documentation.temenos.cloud/home/techguides/https-in-front-of-sftp.html))



# **202007**
**InfraBuild**: 28  &nbsp;**|**&nbsp; **PortalTag**: 202007.RC9
&nbsp;**|**&nbsp; **ControllerBuild**: 209 &nbsp;**|**&nbsp;  **ReleaseNumber**: TCD202007 |&nbsp; **WorkflowServiceTag**: 202007.RC8 

## Technical enhancements
&nbsp;&nbsp;&nbsp;&nbsp;**1. Automate enablement of HTTPS for external access to Gitlab environment repos**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Gitlab will be now accessible through HTTPS as well (on top of SSH) for external accesses. 
<br>
</br> 

&nbsp;&nbsp;&nbsp;&nbsp;**2. Enhancements to the factory definition**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- users are not able to edit existing factories with a scheduler having start date set in the past 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- users are able to Enable/ Disable the factory Scheduler 
<br>
</br> 

## General enhancements
&nbsp;&nbsp;&nbsp;&nbsp; **1. UI has been reviewed in order to provide more information in single screen.**
<br>
</br> 
<br>
</br> 
 
# **202006.1** 
**InfraBuild**: 28  &nbsp;**|**&nbsp; **PortalTag**: 202006.1.RC2
&nbsp;**|**&nbsp; **PortalBuild**: 1876 &nbsp;**|**&nbsp;**ControllerBuild**: 187 &nbsp;**|**&nbsp;  **ReleaseNumber**: TCD202006.1 &nbsp;**|**&nbsp; **WorkflowServiceTag**: 202006.1.RC2

## Technical enhancements
&nbsp;&nbsp;&nbsp;&nbsp;**1. Environment enhancements**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- for security reasons, all application environments now communicate with the Temenos Continuous Deployment infrastructure VMs only through private IPs 
<br>
</br> 

&nbsp;&nbsp;&nbsp;&nbsp;**2. Artifactory access**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- the JFrog Artifactory access through private IP is now done on HTTPs and not TLS
<br>
</br> 
<br>
</br> 

# **202006** 
**InfraBuild**: 28  &nbsp;**|**&nbsp; **PortalBuild**: 202006.RC6
&nbsp;**|**&nbsp; **ControllerBuild**: 176  &nbsp;**|**&nbsp;  **ReleaseNumber**: TCD202006

## Technical enhancements
&nbsp;&nbsp;&nbsp;&nbsp;**1. Dashboard enhancements**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- dashboards now show the Test Workflow name for easy correlation
<br>
</br> 

&nbsp;&nbsp;&nbsp;&nbsp;**2. Customizable workflows**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- users have the ability to create new test workflows that can be assigned to the  factories



<br>
</br>

# **202005.01** 
**InfraBuild**: 28 &nbsp;**|**&nbsp; **PortalBuild**: 202005.HF1
&nbsp;**|**&nbsp; **ControllerBuild**: 2020051 &nbsp;**|**&nbsp;  **ReleaseNumber**: TCD202005.1

## Technical enhancements
&nbsp;&nbsp;&nbsp;&nbsp;**1. Key vault not assigned to the correct subscription**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- the Platform has been enhanced to automate the assignment of  the key vault for client dedicated subscription 
<br>
</br> 

&nbsp;&nbsp;&nbsp;&nbsp;**2. 'Update Factory' not working properly**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- the product configurations on the factory runs are fixed

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- the user can select all products as Principle Products

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- it is not mandatory to have 1 product in the "Select other products" field when setting up a factory 
<br>
</br>

&nbsp;&nbsp;&nbsp;&nbsp;**3. Wrong manifest file for Template created from a Factory configured with 2 different stages for the Base and Principle products.**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- the Artifactory URLs are now correctly set for all components in the manifest of a template created from a factory which is configured with different stages for the Other/ Principle products.
<br>
</br>
&nbsp;&nbsp;&nbsp;&nbsp;**4. Inconsistent factory run scheduling pattern**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- the factory run scheduler behaviour follows the pattern defined by the user
<br>
</br>
&nbsp;&nbsp;&nbsp;&nbsp;**5. UI Issues on filters**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- the UI filtering feature has been fixed
<br>
</br>

# **202005** 
**InfraBuild**: 28 &nbsp;**|**&nbsp; **PortalVersion**: cloudPortal_1.80d
&nbsp;**|**&nbsp; **ControllerBuild**: 140 &nbsp;**|**&nbsp;  **ReleaseNumber**: TCD202005 

## Technical enhancements
&nbsp;&nbsp;&nbsp;&nbsp;**1.Receive notifications when a template is assigned/ removed from an organisation**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- organization administrators are informed  when a template is assigned or unassigned to their organization 
<br>
</br>

&nbsp;&nbsp;&nbsp;&nbsp;**2. Delete an environment that is still creating**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- the current release provides the ability to delete an environment which is still under creation.
<br>
</br>

&nbsp;&nbsp;&nbsp;&nbsp;**3. Display of wrong error messages in the factory dashboard**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- the factory configuration message is corrected
<br>
</br>


&nbsp;&nbsp;&nbsp;&nbsp;**4. "No Test Steps found for the FactoryRun" should not be displayed during RUNNING_ENV_DEPLOY stage**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- the Platform has been enhanced not to display the error message  "No Test Steps found for the FactoryRun" when not appropriate
<br>
</br>



&nbsp;&nbsp;&nbsp;&nbsp;**5. Issue while promoting a component with multiple packages**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- the Platform has been enhanced to ensure the deployment and promotion of a product which has multiple components of same type


## TCD Admin Portal
&nbsp;&nbsp;&nbsp;&nbsp;**1. As an Organisation Admin, I'd like to easily find the date when a template has been installed**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- the Platform now displays the installation date of each template in the template details page



## Create custom templates from Model bank templates
&nbsp;&nbsp;&nbsp;&nbsp;**1. Further documentation on the process**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- online documentation has been enhanced in order to describe how to create custom templates from model bank templates
<br>
</br>






# **202004** 
**InfraBuild**: 28 &nbsp;**|**&nbsp; **PortalBuild**: 1658
&nbsp;**|**&nbsp; **ControllerBuild**: 99 &nbsp;**|**&nbsp;  **ReleaseNumber**: TCD202004.1 

## Technical enhancements
&nbsp;&nbsp;&nbsp;&nbsp;**1. The STOP environments button displays an error after rebuild**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- **START** and **STOP** environments are handled differently to provide faster feedback to the user
<br>
</br>
&nbsp;&nbsp;&nbsp;&nbsp;**2. Isuse on the user accounts page - the "EDITING" status is not displayed in the portal**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - user experience improvements have been added on the Users Page in the portal

## Factory Run enhancements
&nbsp;&nbsp;&nbsp;&nbsp; The **Factory Run** functionality is now enhanced with the ability to run tests with multiple steps (workflows), in a designated sequence. Factory configuration screen layout was changed and split into 4 parts:

- Factory Definition and Products
- Test Configuration
- Promotion Configuration
- Factory Schedule

Check the  [**Manage Factories**](http://documentation.temenos.cloud/home/techguides/factories.html "page") documentation to see the latest updates.

&nbsp;&nbsp;&nbsp;&nbsp; <span style="color:red">**IMPORTANT**:</span> the **Test script** is now a component and is promoted from one stage to another. With this release, all the factories need reconfiguration to include the test script component, otherwise the factory run will not be successful. Learn how to configure the Test Script component [**here**](http://documentation.temenos.cloud/home/techguides/factory-migration.html "page").

## Platform security enhancements
&nbsp;&nbsp;&nbsp;&nbsp; Security improvements made to minimize potential attacks. 

## User experience improvements

&nbsp;&nbsp;&nbsp;&nbsp; User selection is mandatory to display details. .
<br>
</br>

<br>
</br>


# **202002** #
**InfraBuild**: 362 &nbsp;**|**&nbsp; **PortalTag**: cloudPortal_1.79e
&nbsp;**|**&nbsp; **ControllerBuild**: 26

## Technical enhancements ##

&nbsp;&nbsp;&nbsp;&nbsp;**1. Exception list added to the Organisation scheduled shutdown**
  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- users with the "UPDATE_ENVIRONMENT" privilege are able to add an "scheduler ignore" for environments. Those environments will not be STOPPED or STARTED by time scheduler <br>
 </br>

&nbsp;&nbsp;&nbsp;&nbsp;**2. Whitelist IPs that can acces my environments**
  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- users with the "CREATE_ ORG_ METADATA" privilege are able to restrict the access of Temenos Continous Deployment Platform environments of that organisations to the IP addresses added to the metadata "ORG_ IP_ WHITELIST"<br>
</br>

&nbsp;&nbsp;&nbsp;&nbsp;**3. Factory Run timeline**


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-  issue has been fixed<br>
</br>

&nbsp;&nbsp;&nbsp;&nbsp;4.  **Platform URL included in the System generated email sent to the Org Admins**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-  issue has been fixed<br>
</br>

<br>
</br>

# **202001** #
**InfraBuild**: 355 &nbsp; **|**  &nbsp;**PortalTag**: cloudPortal_1.78 &nbsp;**|**  &nbsp;**ControllerBuild**: 12

## Dashboard enhancements ##

&nbsp;&nbsp;&nbsp;&nbsp;**1. UI Updates**


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Temenos Continuous Deployment Platform UI has been updated to unify look and feel, behavior, and to improve user experience. The UI changes have been updated on all pages across the documentation portal<br>
</br>

&nbsp;&nbsp;&nbsp;&nbsp;**2. Component security enhancements**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- when creating a template from a factory run, all components are copied in the new template folder that secures this template consistency from factory deletion<br>
</br>

&nbsp;&nbsp;&nbsp;&nbsp;**3. Templates visibility improvements**


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- template identifier on the environment's page added<br>
</br>

&nbsp;&nbsp;&nbsp;&nbsp;**4. Environment functionality updates**: 


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- pop-up confirmation with check box informing both START and STOP all environments added	
<br><br>

## Role Management	 ##
&nbsp;&nbsp;&nbsp;&nbsp;**1. User access rights**: 


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- user profiles can perform distinct functions on the Temenos Continous Deployment Platform. Administrators, operations, developer and test users for examples require different access rights to perform certain operations. The user permissions are explained on this [**page**](http://documentation.temenos.cloud/home/techguides/user-permissions "page"). Each page from the Documentation Portal will have the access rights displayed for each operation shortly.


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- users can create roles from permissions


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- users can add or remove permissions to a role

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- users (admins) can assign roles to users

<br>
## Security enhancements - Phase 1 ##
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**1.** Controller API keys are now managed by platform Operators such that keys are not shared with customers and the impact of a compromised/revoke key is minimised<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**2.** All vulnerabilities or defects in libraries detected during initial Whitesource scanning of Temenos Continuous Deployment Platform source have been fixed

<br>

## Security enhancements - Phase 2 ##
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**1.** White source scanning is now automated as part of platform build process that Temenos Continuous Deployment Platform Code is scanned each time we build the platform <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**2.** All the Temenos Continuous Deployment Platform 3rd parties were White Source scanned <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**3.** All artifacts pushed in common GitLab and Artifactory are scanned

<br>

## Self Service Capabilities
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**1.** **Self Service Setup:**<br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   -   users who have the Assemble module enabled are able to [manage their factories](http://documentation.temenos.cloud/home/techguides/factories.html), admin [product and component](http://documentation.temenos.cloud/home/techguides/components-products.html)s, [create streams](http://documentation.temenos.cloud/home/techguides/stream.html), [schedule](http://documentation.temenos.cloud/home/techguides/factories.html?q=schedule%20factory#factory-scheduler) and [execute factory runs](http://documentation.temenos.cloud/home/techguides/factories.html?q=schedule%20factory#set-up-create-a-factory)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-  all users have the option to [clone environments](http://documentation.temenos.cloud/home/techguides/clone-environment.html?q=clone%20envi), [manage their test cases](http://documentation.temenos.cloud/home/techguides/stage-testcases.html) and connect to Design Studio remotely to any Azure Subscription<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-  internal Users can use the Boost function to configure the available templates or build a new template. <br>
</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**2.** Users are now able to **request an environment based on any factory run** to do triage, demo or ad-hoc testing (learn how [here](http://documentation.temenos.cloud/home/techguides/run-factory.html)). <br>
</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**3.** Organisation administrators now can **create a template based on any successful factory run** to baseline the environment (learn how [here](http://documentation.temenos.cloud/home/techguides/create-publish-template.html?q=successful)). <br>
</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**4.** Organisation Admin user now can **Stop All Environments** of the organisation through a single button to Manage Costs (learn how [here](http://documentation.temenos.cloud/home/techguides/environment-basic-operations.html?q=stop%20environment)).<br>
</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**5.** **Pop-up confirmation** with check box informing both START and STOP all environments added.<br>
</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**6.** **Factory Management** (learn more [here](http://documentation.temenos.cloud/home/techguides/components-products.html#how-to-set-up-edit-delete-products)):  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-  ability to redefine factory settings to add/ remove Products<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ability to delete a product<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ability to delete a component<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ability to disable a factory<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ability to delete a factory <br>
</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**7. Components Management**:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-   an Artifactory folder structure available view (learn more [here](http://documentation.temenos.cloud/home/techguides/components-products.html#artifactory-view))<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- a list of all available components in current selected stage<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- list of all component versions available in the Artifactory<br>
</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**8.** Users are now able to **Abort any Factory Run** in case of need (learn how [here](http://documentation.temenos.cloud/home/techguides/run-factory.html)) <br>
</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**9.** Users can **schedule factory runs** (learn how [here](http://documentation.temenos.cloud/home/techguides/factories.html)) <br>
</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**10.** Users can **clone Stream**s (learn how [here](http://documentation.temenos.cloud/home/techguides/stream.html)).



