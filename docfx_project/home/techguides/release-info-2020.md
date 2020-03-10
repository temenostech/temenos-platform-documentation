
## Release information ##

This page provides information about the monthly Temenos Continuous Deployment Platform features and improvements in each release.

# **Version 2: February 19** #
## Technical Enhancements ##

-  **Exception list added to the Organisation scheduled shutdown**: users with the "UPDATE_ENVIRONMENT" privilege are able to add an "scheduler ignore" for environments. Those environments will not be STOPPED or STARTED by time scheduler;




- **Whitelist IPs that can acces my environments**: users with the "CREATE_ ORG_ METADATA" privilege are able to restrict the access of Temenos Continous Deployment Platform environments of that organisations to the IP addresses added to the metadata "ORG_ IP_ WHITELIST";

- **Factory Run timeline**: issue has been fixed;

- Fixed issue with the platform URL included in the System generated email sent to the Org Admins;



<br>
</br>

# **Version 1: January 19** #

## Dashboard Enhancements ##

- **UI Updates**: Temenos Continuous Deployment Platform UI has been updated to unify look and feel, behavior, and to improve user experience. The UI changes have been updated on all pages across the documentation portal;


- **Component security enhancements**: when creating a template from a factory run, all components are copied in the new template folder that secures this template consistency from factory deletion;


- **Templates visibility improvements**: Template identifier on the environment's page added;	

- **Environment functionality updates**: pop-up confirmation with check box informing both START and STOP all environments added;	

<br>
</br>
## Role Management	 ##
- **User access rights**: 
    - user profiles can perform distinct functions on the Temenos Continous Deployment Platform. Administrators, operations, developer and test users for examples require different access rights to perform certain operations. The user permissions are explained on this [**page**](http://documentation.temenos.cloud/home/techguides/user-permissions "page"). Each page from the Documentation Portal will have the access rights displayed for each operation shortly;
    - users can create roles from permissions;
    - users can add or remove permissions to a role;
    - users can delete roles as long as no one is assigned that role;
    - users (admins) can assign roles to users;

<br>
</br>
## Security enhancements - Phase 1 ##
- controller API keys are now managed by platform Operators such that keys are not shared with customers and the impact of a compromised/revoke key is minimised;
- all vulnerabilities or defects in libraries detected during initial Whitesource scanning of Temenos Continuous Deployment Platform source have been fixed;

<br>
</br>
## Security enhancements - Phase 2 ##
- white source scanning is now automated as part of platform build process that Temenos Continuous Deployment Platform Code is scanned each time we build the platform;
- all the Temenos Continuous Deployment Platform 3rd parties were White Source scanned;
- all artifacts pushed in common GitLab and Artifactory are scanned;

<br>
</br>
## Self Service Capabilities ##


###  **Self Service Setup:**  ###
   -   users who have the Assemble module enabled are able to [manage their factories](http://documentation.temenos.cloud/home/techguides/factories.html), admin [product and component](http://documentation.temenos.cloud/home/techguides/components-products.html)s, [create streams](http://documentation.temenos.cloud/home/techguides/stream.html), [schedule](http://documentation.temenos.cloud/home/techguides/factories.html?q=schedule%20factory#factory-scheduler) and [execute factory runs](http://documentation.temenos.cloud/home/techguides/factories.html?q=schedule%20factory#set-up-create-a-factory);
   -  all users have the option to [clone environments](http://documentation.temenos.cloud/home/techguides/clone-environment.html?q=clone%20envi), [manage their test cases](http://documentation.temenos.cloud/home/techguides/stage-testcases.html) and connect to Design Studio remotely to any Azure Subscription;
   -  **internal Users can use the Boost function to configure the available templates or build a new template.** <br>
   </br>
- users are now able to request an environment based on any factory run to do triage, demo or ad-hoc testing (learn how [here](http://documentation.temenos.cloud/home/techguides/run-factory.html));
- organisation administrators now can create a template based on any successful factory run to baseline the environment (learn how [here](http://documentation.temenos.cloud/home/techguides/create-publish-template.html?q=successful));
- organisation Admin user now can Stop All Environments of the organisation through a single button to Manage Costs (learn how [here](http://documentation.temenos.cloud/home/techguides/environment-basic-operations.html?q=stop%20environment));
- pop-up confirmation with check box informing both START and STOP all environments added;<br>
</br>



### **Factory Management (learn more [here](http://documentation.temenos.cloud/home/techguides/components-products.html#how-to-set-up-edit-delete-products)):**  ###
   -  ability to redefine factory settings to add/ remove Products;
   - ability to delete a product;
   - ability to delete a component;
   - ability to disable a factory;
   - ability to delete a factory; <br>
</br>



###  **Components Management**:  ###
   - an Artifactory folder structure available view (learn more [here](http://documentation.temenos.cloud/home/techguides/components-products.html#artifactory-view));
   - a list of all available components in current selected stage;
   - list of all component versions available in the Artifactory";


- users are now able to Abort any Factory Run in case of need (learn how [here](http://documentation.temenos.cloud/home/techguides/run-factory.html));
- users can schedule factory runs (learn how [here](http://documentation.temenos.cloud/home/techguides/factories.html));
- users can clone Streams (learn how [here](http://documentation.temenos.cloud/home/techguides/stream.html)).



