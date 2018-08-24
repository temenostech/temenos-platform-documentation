
# Introduction #
This document can be used by technical staff who need to deploy different features on a Temenos Cloud Environment. Each Environment has an associated Repository for uploading different type of features based on Environment Template type, these features being deployed automatically to your Environment.

Before proceeding, please check the following requirements:
- Make sure you have a GUI Git Client installed in your local machine. This guide uses *TortoiseGit* Git Client that can be installed from <a href="https://tortoisegit.org/download/" target="blank">here</a>.
- Make sure you have an user created under your organisation that has a public ssh key attached. Please check this <a href="./user-creation-in-paas.md" target="blank">guide</a> to understand how you can create an user or how you can generate and attach a ssh key to an user.

# Clone Environment Repository #

•	Please login to your organisation, select your environment and locate the Endpoint of **Repository** Application. Right click the endpoint and copy the link address or click the **copy to clipboard icon** from the right:
![repository](./images/repository.png)

•	Create a folder in any location from your local machine. In the current example, a folder name GitLabRepo is used.

•	Go to your local repository folder(GitLabRepo folder in our example), right click inside the folder and choose **Git Clone**.
![gitlab repo clone1](./images/gitlab_repo_clone1.png)

•	The bellow screen is opened where you have to paste the Endpoint of **Repository** Application of your Environment in URL textbox, set the Directory textbox to your local repository folder(GitLabRepo folder in our example) and load your private key.
![gitlab repo clone2](./images/gitlab_repo_clone2.png)

•	Content is downloaded from the Repository of your Environment to your local machine.
![gitlab repo clone3](./images/gitlab_repo_clone3.png)

# Repository Structure #

The repository structure on your local machine should look like this:
![gitlab repo structure](./images/gitlab_repo_struc.png)

| **Folder**  				| Functionality	|
|-					|-		|
|addons				|	This folder is designed for AppDynamics. Upload files as JAR. |
|client_files\h2db		|	Local H2 database that will be uploaded to the Cloud Environment. Database username must be t24 and password t24 (case sensitive). Database name is mandatory to be “TAFJDB.h2.db” (case sensitive) and must be archived as a ZIP with name TAFJDB.zip (case sensitive). If the above conditions are not satisfied, the database will not be uploaded to the Cloud Environment. This procedure will **replace** the existing database in the cloud with this one. The **old database** will be **lost**, including any records loaded manually.|
|client_files\helptext   | Custom Help Text files can be uploaded in this folder. The file structure must be the same as HELP.TEXT T24 core. Thus, under client_files\helptext folder, the HelpText folder with subfolders for each component (AA, EB, PP, etc.) is expected.   |
|packages				|	One or more T24 DS (Design Studio) packages can be uploaded into this folder. All packages will be deployed automatically inside T24. |
|plugins				|	WAR files can be uploaded in this folder. The files will be deployed inside Jboss EAP. In addition to this, endpoints related to plugins can be automatically added to an application. For more details, check this <a href="./add-app-endpoint.md" target="blank">guide</a>. |
|updates				|	The updates files downloaded from the portal in zip format. The files will be copied to the update folder and the T24 Update procedure is triggered. |
|wsdl				|	WSDL files and folders that are required by plug-ins (war file) need to be uploaded here. |

## Additional folders
The bellow folders are not present as default in environment repository. In any of the bellow functionalities is required, the folder related to that functionality must be first created in environment repository and only after this the functionality of the folder can be used.

| **Folder**  				| Functionality	|
|-					|-		|
|client_files\localjars	|	This folder is designed for local JARs (not released by T24 Core) installation.<br />Any JAR file used by T24 or other parties can be uploaded in this folder. During deployment, all JARs present in this folder will be deployed in the environment. If a JAR file is corrupted or some dependencies are missing, the environment will not start.   |
|client_files\localjars\ext	|	This folder is designed for local JARs installation inside **TAFJ/ext** folder from the environment. |

# Commit & Push features to Repository #
•	Go to repository folder from your local machine(GitLabRepo folder in our example) and copy your file/files (related to your required features that must be deployed to your Environment) to the specific folder/folders based on your requirement. In this guide, an update is pushed to the Environment Repository.
![repo commit 1](./images/repo_commit_1.png)

•	To commit the files/files to Environment Repository, right click inside repository folder from your local machine and choose **Git Commit -> "master"...** option.
![repo commit 2](./images/repo_commit_2.png)

•	The following screen will appear in which your repository changes can be observed and commited. In order to commit, you have to input a commit message and check the checkbox next to each new file if it is the case.
![repo commit 3](./images/repo_commit_3.png)

•	The following screen will appear in which you have to push your changes to Environment Repository. In order to push, click the **Push** button.
![repo commit 4](./images/repo_commit_4.png)

•	In the next screen, you have to click **Ok** button.
![repo commit 5](./images/repo_commit_5.png)

•	Finally, the status screen for your push action is displayed.
![repo commit 6](./images/repo_commit_6.png)

# Trigger Deployment #
•	After all required features are commited and pushed to Environment Repository, you have to deploy these features in your Environment. To do this, login to your organisation, select your environment, locate **Repository** Application and click the **Deploy** button.
![repo deploy 1](./images/repo_deploy_1.png)

•	The Environment and its manageable Applications status will be changed to <span style="color:#4d94ff;font-weight:600;">Deploying</span> during the deployment process. The logs generated by the deployment process can be also observed in the **Events** tab of your Environment where a new event for *RepositoryDeploy* will be created.
![repo deploy 2](./images/repo_deploy_2.png)

> [!Note]
> The deployment process is triggered **manually** by the user after commiting and pushing all the required features in Environment Repository or whenever is appropiate based on the fact that the user can commit and push features to Environment Repository multiple times and choose when to trigger the deployment.
