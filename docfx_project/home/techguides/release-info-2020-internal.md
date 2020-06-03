
## Release Notes

This page provides information about the monthly Temenos Continuous Deployment Platform features and improvements in each release.

# **2020.05 Release Notes** 
**InfraBuild**: tba &nbsp;**|**&nbsp; **PortalBuild**: tba
&nbsp;**|**&nbsp; **ControllerBuild**: tba &nbsp;**|**&nbsp;  **ReleaseNumber**: TCD202005 

## Technical enhancements
&nbsp;&nbsp;&nbsp;&nbsp;**1.Receive notifications when a template is assigned/removed from an organisation**

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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- the Platform has been enhanced not to display error message  "No Test Steps found for the FactoryRun" when not appropriate
<br>
</br>



&nbsp;&nbsp;&nbsp;&nbsp;**5. Issue while promoting a component with multiple packages**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- the Platform has been enhanced to ensure the deployment and promotion of a product which has multiple components of same type.


## TCD Admin Portal
&nbsp;&nbsp;&nbsp;&nbsp;**1. As an Organisation Admin, I'd like to easily find the date when a template has been installed**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- the Platform now displays the installation date of each template in the template details page.



## Create custom templates from Model bank templates
&nbsp;&nbsp;&nbsp;&nbsp;**1. Further documentation on the process**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- online documentation has been enhanced in order to describe how to create custom templates from model bank templates
<br>
</br>






# **2020.04 Release Notes** 
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
# **2020.02 Release Notes** #
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

# **2020.01 Release Notes** #
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



