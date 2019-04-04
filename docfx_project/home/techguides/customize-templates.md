
# Templates Customization
## Introduction
This document can be used by technical staff who need to customize already defined PaaS templates based on specific requirements. Templates customization will allow changes related to:
- the environment applications (i.e. the scripts to install and configure each application and the information displayed in PaaS Portal for each application);
- the VM specifications in which each application is deployed.

> [!Note]
> This guide presumes that a Sandbox is already created and available under an Organisation for which the templates customization functionality is allowed.

## Boost your environment
To start customizing your environment built using a PaaS template, login to PaaS portal using your organisation user, go to your environment page and click on the **Boost** button attached to **Repository** application.
![boost 1](./images/boost_env1.png)
After clicking the Boost button, the status of Repository application is changed to <span style="color:orange">Boosting</span>, as per bellow picture. The operation triggered by the Boost button will copy in environment repository all the template files used to create the environment.
![boost 2](./images/boost_env2.png)
When the Boosting operation is finished, the message *"Scripts are customized for this environment."* is displayed under the name of your environment.
![boost 3](./images/boost_env3.png)

## Repository structure after Boost
As stated above, the Boost operation will make changes to environment repository. The difference between the before and after boost environment repository versions is represented by the presence of <span style="color:red">environments</span> folder, as it can be observed bellow.
![boost 4](./images/boost_env4.png)
The structure of the <span style="color:red">environments</span> folder is represented by 3 folders:
- infra-templates
- playbooks
- roles
![boost 5](./images/boost_env5.png)

The description of each folder is presented bellow:
| Folder Name        | Folder <br />Description	|
|-					         |-		                |
|infra-templates     | This folder contains an **infratemplate.yml** file that describes the template of your environment (i.e. information related to the applications that are installed in your environment and VM specifications in which environment applications are deployed.). |
|playbooks           | This folder contains a **playbook.yml** file that describes the set of roles that will be installed for each host(VM) defined under *<span style="color:#010466;font-weight:600;">[services][servers]</span>* component in *<span style="color:#D2940F;font-weight:600;">infratemplate.yml</span>* file.  |
|roles               | This folder contains all the roles defined for your template.  |

A role represents any of your environment applications or it can be a module/plugin/framework that is required for your environment applications. A role is described by the following folders:
- <code>defaults</code> - contains default variables for the role.
- <code>files</code> - contains the files which are deployed using this role.
- <code>handlers</code> - contains handlers that are used by this role.
- <code>meta</code> - defines meta data for this role.
- <code>tasks</code> - contains the list of tasks that is executed for this role.
- <code>templates</code> - contains templates that can be deployed using this role.
- <code>vars</code> - contains the role variables.

> [!Note]
> A role definition must include at least one of the above folders. Thus, any unused folders can be excluded. However, any in use folder must include a **main.yml** file that contains the relevant information.

> [!Note]
> Ansible automation tool is used by the PaaS Platform to automate environment creation based on applications with specific requirements and installation steps. For more details about Ansible, please access this **<a href="https://docs.ansible.com/ansible/2.5/user_guide/quickstart.html" target="blank">link</a>**.

## Start template customization
After boosting your environment, meaning that your environment repository contains all the folders and files related to your environment template, you can start the customization.
There are several ways in which you can customize your environment template based on the type of your change.

> [!Note]
> All the changes that must be implemented to a PaaS environment template can be done only in <u>environment repository</u>. Thus, environment repository must be cloned in your local machine. For more information about how to clone an environment repository, please check this **<a href="./use-gitlab-repository.md" target="blank">page</a>**.

1. Changes that will require <span style="color:red;font-weight:600;">the rebuild of your environment</span>:
> [!Note]
> The rebuild operation will take around 20 minutes and it will recreate all environment resources(VMs) and run the deployment of all roles defined in environment template.<br />To trigger the rebuild of your environment, login to PaaS portal using your organisation user, go to your environment page and click on the **<span style="color:#00bfff;font-weight:600;">Rebuild</span>** button attached to your environment main application.

 * Changes related to applications that will be installed under your environment.<br />
   <p style="padding-left: 10px">The applications list is defined in *<span style="color:#010466;font-weight:600;">[services][servers]</span>* component from *<span style="color:#D2940F;font-weight:600;">infratemplate.yml</span>* file located in *<span style="background-color: #858382;color: white;"> /environments/common/infra-templates </span>* &nbsp;folder of environment repository. An example of a template with 2 applications (t24 & h2) is presented bellow.<br />
   ![boost 6](./images/boost_env6.png)<br />
   <table style="margin-left: 10px; max-width: 610px;"><tr><td style="border:0 !important; width: 15px !important;">-></td><td style="border:0 !important; width: 400px !important;">
   If an application must be removed from the default application list of the template, then the corespondent item must be removed from *<span style="color:#010466;font-weight:600;">[services][servers]</span>* component and the item related to the application must be removed from *<span style="color:#D2940F;font-weight:600;">playbook.yml</span>* file from *<span style="background-color: #858382;color: white;"> /environments/common/playbooks </span>* &nbsp;folder.
   </td></tr></table>
   <table style="margin-left: 10px; max-width: 610px;"><tr><td style="border:0 !important; width: 15px !important;">-></td><td style="border:0 !important; width: 400px !important;">
   If an application must be added to the default application list of the template, then a new item must be added in *<span style="color:#010466;font-weight:600;">[services][servers]</span>* component. After this, a new role must be created for this application in *<span style="background-color: #858382;color: white;"> /environments/common/roles </span>* &nbsp;folder of environment repository and *<span style="color:#D2940F;font-weight:600;">playbook.yml</span>* file from *<span style="background-color: #858382;color: white;"> /environments/common/playbooks </span>* &nbsp;must be updated with a new item for the new application.
   </td></tr></table>
   </p>
 * Changes related to applications information (name, description, etc.) displayed in PaaS Portal.<br />
   <p style="padding-left: 10px">Each environment application has a related item in *<span style="color:#010466;font-weight:600;">[services][servers]</span>* component from *<span style="color:#D2940F;font-weight:600;">infratemplate.yml</span>* file. Please check the description of each key (e.g. *app_name*, *app_description*, etc.) in *<span style="color:#D2940F;font-weight:600;">infratemplate.yml</span>* file in order to understand which information appear in PaaS Portal.</p>
 * Changes related to VM specifications in which environment applications are deployed.<br />
   <p style="padding-left: 10px">The VM specifications on which each environment application is deployed are defined in *<span style="color:#010466;font-weight:600;">[provider][azure][config]</span>* component from *<span style="color:#D2940F;font-weight:600;">infratemplate.yml</span>* file. <br />
   ![boost 7](./images/boost_env7.png)<br />
   *<span style="color:#010466;font-weight:600;">[server_size]</span>* key defines the VM specifications that will be applied for all applications defined in *<span style="color:#010466;font-weight:600;">[services][servers]</span>* component. If different VM specifications must be applied to each environment application, then *<span style="color:#010466;font-weight:600;">[server_size]</span>* key must be set in *<span style="color:#010466;font-weight:600;">[services][servers]</span>* component for each application.<br />
   The detailed VM specifications can be viewed **<a href="https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sizes-general#dsv2-series" target="blank">here</a>**.</p>

   > [!Note]
   > After making the required changes, commit and push them to your environment repository and trigger the rebuild. <br /> To make sure there are no syntax erros in the updated *<span style="color:#D2940F;font-weight:600;">infratemplate.yml</span>* file, you can use this **<a href="https://codebeautify.org/yaml-validator" target="blank">online validator</a>**.

2. Changes that will require <span style="color:red;font-weight:600;">the deployment of your environment</span>:
 > [!Note]
 > The deployment operation will take around 5 minutes or more depending on your changes.<br />To trigger the deployment of your environment, login to PaaS portal using your organisation user, go to your environment page and click on the **<span style="color:#00bfff;font-weight:600;">Deploy</span>** button attached to **Repository** application.

 * Changes related to roles already present in template. (i.e. an environment is already created with this template)<br />
   <p style="padding-left: 10px">If an already present role must be updated (for example, the tasks list for a role must be updated), make the required changes for that role, commit and push the changes to the environment repository and trigger the deployment.</p>
 * Changes related to roles tha represent a module/plugin/framework and not an application.
   <p style="padding-left: 10px">New roles that represent a module/plugin/framework and not an application can be added to an application of your environment. In order to accomplish this, a new role along its settings must be created in *<span style="background-color: #858382;color: white;"> /environments/common/roles </span>* &nbsp;folder and the new role must be added to the specific application in *<span style="color:#D2940F;font-weight:600;">playbook.yml</span>* file from *<span style="background-color: #858382;color: white;"> /environments/common/playbooks </span>* &nbsp;folder. After this, push all these changes to environment repository and trigger the deployment.</p>
 * Changes that are not related to environment template.
   <p style="padding-left: 10px">For the changes described **<a href="./use-gitlab-repository.md#repository-structure" target="blank">here</a>** that are not related to environment template, you just have to commit and push the required changes to your environment repository and trigger the deployment.</p>

   > [!Note]
   > If the deployment operation is not successful for your changes, please rebuild the environment.

The PaaS catalogue of available templates can be cheched **<a href="../temenos-cloud-templates.md" target="blank">here</a>**.

<!-- <br /><span style="font-size:20px">text</span> -->
