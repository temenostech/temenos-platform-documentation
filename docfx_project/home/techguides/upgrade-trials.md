> [!Note]
>  With the 202103 release, the TCD user guide will move to the [Temenos Customer Support Portal (TCSP)](https://tcsp.temenos.com/TCD/Modules/TemenosContinuousDeployment/Overview/Overview.htm). We recommend you to log in to TCSP and check if your credentials are available. Raise a ticket at [CloudPlatformSupport@temenos.com](CloudPlatformSupport@temenos.com) if you encounter any issues.

# Upgrade Trials


The **Upgrade** feature enables you to boost your environment to higher T24 releases and run your regression. By undergoing an upgrade you can get better clarity on any issues with the upgrade and in general more confidence and predictability on the upgrade project itself.
 
> [!Note]
>  During the upgrade only the mandatory components are deployed (browser-classic, t24-ud, t24-jars, tafj-installer, modelbank-database-h2). You can deploy non-mandatory components using this [user guide](http://documentation.temenos.cloud/home/techguides/deploy-an-update-to-an-existing-environment.html) post-upgrade, i.e., after exceptions are authorized and the DB is validated post the technical upgrade.
>  
<br>
</br>

# Upgrade pre-requisites #

To upgrade an environment you need:

1. The **UPGRADE_TEMPLATE** user permission enabled​.

2. An environment with the status **STARTED**. ​

3. TortoiseGit installed and configured on your local machine​.

4. ModelBank Templates with the release you intend to upgrade assigned to your organization.

<br>
</br>

# How to upgrade an environment #

1. Upon clicking on the button a pop-up appears which prompts to select another template from the list of available template:

 ![](./images/environment-upgrade-button.png) 

2. Click on **Upgrade** to proceed.

3. The environment status changes to **Upgrading**:

4. In the **Events** tab you can see the log which refers to the upgrade from the Base template to Target template.

5. Once the action is complete, in the **Template Info** bar you can see that the template name changed to the target release (in this example 202003).

 ![](./images/upgraded-environment.png) 

<br>
</br>

##   Upgrade Validations ##

1. The **Upgrade** button is enabled at the organisation level.

2. Once the **Upgrade** is initiated all the environment action buttons are disabled except **Edit Environment** and **Delete Environment** buttons.
 
3. Only users with the permission **UPGRADE_TEMPLATE** will have the **Upgrade** button enabled on their environment.

4. The **Upgrade** button is not available on a stopped environment.

5. Make sure you have a Database Backup before the upgrade.

6. L3 or other plugins present in the current template are not auto deployed, and you have to upload them back to GIT and deploy it post upgrade.

7. The upgrade pipeline will not deploy anything on the GIT folder to the upgraded environment automatically, therefore you have to manually trigger this post upgrade.

8. The new app server won’t have any additional queues.

9. The upgrade flow is from the client template to ModelBank template and not vice-versa.

10. An environment created with a custom template can be upgraded to a ModelBank template and not vice versa.

11. When an environment is upgraded, the **Clone** and **Rebuild** options are not available.

12. The **Upgrade** functionality is not available for environments resulted from factory runs (automated and manual factories).

13. An environment can only be upgraded with a MB template that is assigned to your organisation. You won't be able to upgrade a MB-T24-Wildfly-H2-202002 to a MB-T24-Wildfly-H2-202004 if the latter version is not assigned to your organisation. 

<br>
</br>

## Post Upgrade Actions ##

1. Install EB products.

2. Install Transact/ T24 Updates.

3. Integrate L3 deployment via GIT​.

4. Install new modules in Jboss​.

5. Add new queues and data sources in the standalone.xml file​.

6. Install custom APIs and different versions of core war files​.

7. Deploy helptext files​.

8. Save as New Template (learn [**here**](http://documentation.temenos.cloud/home/techguides/save-as-new-template.html?q=save) how to create new templates).


<br>
</br>

## Tutorial ##

Tutorial available [**here**](https://www.youtube.com/watch?v=R4J4P-SlJ6Q&feature=youtu.be).
<br>
</br>

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
- UPGRADE_TEMPLATE

To have a better understanding of the user permissions, hover the cursor over the variables and a short description will pop up or click [here](http://documentation.temenos.cloud/home/techguides/user-permissions) to read more.

