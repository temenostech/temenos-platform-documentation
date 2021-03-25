> [!Note]
>  Starting April 5th the TCD user guide will move to the [Temenos Customer Support Portal (TCSP)](https://tcsp.temenos.com/TCD/Modules/TemenosContinuousDeployment/Overview/Overview.htm). We recommend you to log in to TCSP and check if your credentials are available. Raise a ticket at [CloudPlatformSupport@temenos.com](CloudPlatformSupport@temenos.com) if you encounter any issues.

# Export and Import Databases #

This user guide explains how to import and export databases of a Temenos cloud environment in order to migrate datasets across environments. 

Login to your organization on the TCD (Temenos Continuous Deployment) portal ([portal.temenos.cloud](https://portal.temenos.cloud/)) read and accept the privacy notice.

<img src="./images/db-login.png" width="450" height="200">

## Create an Environment ##
To see how to create an environment, please also check <a href="./environment-creation-in-paas.md" target="_blank">**this**</a> user guide.

> [!Note]
> For this user guide, there are two environments created: 
>   - DevEnv
>   - DevEnv1
>
> These will be used to see how to export the DB from one environment and import it into the other one.

## Amend a customer record ##

 - Go to User Menu > Customer > Amend Customer
 - In the new screen, type a customer number from your db (ex. 190094) and click **Find**
 - Then click amend button

![](./images/db-amend-customer.png) 
<br>

- Change the GB Town/City from the Physical Address tab and then press **Commit the deal** button ![](./images/db-commit-button.png) in order to save the change. 

> [!Note]
>You can do any change on any record type)*

   ![](./images/db-amend-info.png) 
<br>

 - Two notifications about Customer's documents will pop up > Mark them as '**Received**' and Click "**Accept Overrides**" > Transaction is complete
 - The next step is to authorize the record change:
 - Log out and login with a different user (in production, this user will have special rights)

<img src="./images/db-t24-signin-author.png" width="590" height="250">

- Go to User Menu > Customer > click **Authorise/ Delete Customer** menu
- Click authorise button (*double-check*) > The screen is expanded with the details of the customer > Click again authorise  

     ![](./images/db-authorise-record.png) 
<br>
</br>

## Export the Database ##

To export and re-import the database into an environment or do some changes and import it back or to a different environment, check the steps below:

1. Click the **Export** button under Database

2. Confirm the action on the pop-up to be able to proceed

3. Click **Confirm**

     ![](./images/export-db.png) 

After clicking the export starts (the action takes around a few minutes based on the DB size). While exporting, the button is disabled. After the export is done, the button is enabled back.

![](./images/db-exporting.png) 

To see the logs sequence for the Database Export go the **Events** tab on your environment:

![](./images/db-export-logs.png) 

>[!Note] To avoid database corruption, all TSA and user activity needs to be stopped so a DB Export can be taken safely.
<br>


Please note that the same steps showed in this demo can be followed to export an environment. Start exporting by using the **Export** button (check the available buttons under **T24 Release **section).

 - During this action, the DB is exported through SFTP server to which you have to connect in order to download the related content on your local machine. 
 - Download WinSCP from <a href="https://winscp.net/eng/index.php" target="_blank">**here**</a>.
 - Open WinSCP and create a new site which will allow the connection through SFTP server:
   - For host name, use the endpoint of the db. *(You can copy it from your portal by clicking the copy icon near the endpoint of the database - 'sftp.temenos.cloud').*
   - For the user name, put the PaaS user name that you have created on the portal. *(Check Users tab to see the available users).*
   - Instead of password, click **Advanced**

     ![](./images/db-sftp.png) 
<br>

   - A new screen is open
   - Choose SSH > Authentication > and browse for the private key related to your portal user > click OK.

     ![](./images/db-sftp-ssh.png) 
<br>

After attaching the SSH key, click on save button – here we can give a site name that we want for future use.

  - Previous screen will appear - click **login** to connect to the SFTP server.
  - It will search for host and connect to it.
  - A successful connection will display two sides as follows:
    - On the left side - the location from your local machine where the db will be downloaded.
    - On the right side - the location of the exported db on the SFTP server; the DB is saved in the folder with the organization id and environment id (*/organisationID/environmentID folder structure*).

      ![](./images/sftp-ids.png) 
<br>

 - The database appears as TAFJDB.zip. In order to download the zip, select it and press F5. After is being downloaded, you can unzip it to see the db file.
 - After this step, you can close the SFTP connection: Session > Disconnect.

## Clone the Target Environment ##

- For each Environment there is a Repository associated to it. This repository needs to be cloned locally and then the database will be pushed into it. Next step is to deploy it to the Temenos Cloud target environment (DevEnv1 in current example).
 - To be able to clone, you need to have a GUI Git Client installed on your local machine. Example: <a href="https://tortoisegit.org/download/" target="_blank">**Tortoise Git**</a>

 - Also, during cloning, it will be necessary to attach the private ssh key related to your portal user. (If needed, please check <a href="http://documentation.temenos.cloud/home/techguides/user-creation-in-paas.html" target="_blank">**this**</a> user guide).
 - Login to your environment on the portal, locate the endpoint of the repository and copy it by selecting it OR clicking the icon on the right.

     ![](./images/db-copy-repo.png) 
<br>

 - Create a folder on your computer (you can place it anywhere on your local machine). In this example is named 'GitDemo'
- Click right inside the folder and choose **Git Clone** (this command belongs to TortoiseGit)

    ![](./images/db-git-clone.png) 
<br>

 - In the screen that opens, fill the following:
     -  in the URL textbox, paste the Endpoint of Repository Application of your Environment (previously copied)
     - the Directory textbox to your local repository folder should be automatically determined as current folder location
     - load the private key (this is the private key corresponding to the public key of your portal user)
     - click OK
     
         ![](./images/db-tortoise.png) 
<br>

 - The content is downloaded from the repository of your environment to your computer, displaying a success message if the cloning was correct.
 - You will be able to see the **corebanking** repository structure with several folders like: addons, client_files, packages, plugins, updates, wsdl etc.

       ![](./images/sql-db.png) 

 - **The TAFJDB.zip must be placed into client_files > h2db folder:**

     ![](./images/db-tafjdb-zip.png) 
<br>

     <p style="color:red;">In case you made changes to the db file, please make sure you archive it as a .zip and rename it TAFJDB before pushing it into the repository. **The naming convention is always TAFJDB.zip  where TAFJDB is case sensitive and the extension -.zip- is lowercase**. If this condition is not satisfied, the database will not be uploaded to the Cloud Environment.</p> 

     > Also note that this procedure will replace the existing database in the cloud with this one. The old database will be lost, including any records loaded manually.


  - **The SQL database must be uploaded to the client_files\sqldb folder:**

     ![](./images/sql-db.png) 

      <p style="color:red;">The file extensions of the database must be .bak, .zip or both (i.e. in case of more .bak files need to uploaded, you can add them under a .zip which would also reduce the size during the Git deploy operation). See below how the **sqlb** folder structure will be:

      ![](./images/sqldb-folder-structure.png)
      >Note: the .zip or .bak file can have any name. Nonetheless, the database name within the SQL database backup file must be UTPSQLDB. If the database name is other than UTPSQLDB, the database deployment will not work.

       >![](./images/sqlback-up.png)

        >The database credentials, schema  security group access, logical/physical file names, etc, should be followed as in UTP SQL model bank database.

        >By default, the Recovery model parameter is ‘FULL’, incase of a larger database/more transactions involved, then it is preferred to set the parameter as ‘SIMPLE’. This parameter will be retained after DB import/cloned to a new environment.

     - one or more databases (each file must contain the database name, the database credentials, one or more DBs as well as the SQL server version). For this user guide we added two databases with a .bak file extension that were zipped and placed into the **sqlb** folder

         ![](./images/sqldb-zip.png)  
          >UTPDLMDB database is not mandatory, users can have a single database(UTPSQLDB) within the backup file (.bak).
          
          > In case you need to convert the database from H2 to SQL DB, please raise a PACS ticket.

<br>
</br>

## Commit and Push the DB ##

 - Click right inside the **h2db** folder and choose **Git commit master**, check the not versioned files that you want to push (in this case TAFJDB.zip), put a comment in the box, then commit and push. 
 - After the success message, close the box.

    ![](./images/db-push-db.png) 
<br>
</br>

## Deploy DB and Check the Change ##

 - Go back to the portal to the target environment and click the **Deploy** button under the Repository

    ![deployment](./images/db-deploy.png) 
<br>

 -  After the deployment is done, you can check the change of the database as follows:
   - Click Go to Application to open a T24 Browser
   - Login with your T24 user and password
   - Under User Menu, go to Customer > Individual Customer > More Actions > Search Live File (from dropdown arrow) and click Go
   - The searched record is displayed > Click on the search/selection button on the left  > The GB Town Country line should be changed into *Portland* confirming the correct import of the database

     ![](./images/db-check-record.png) 
<br>
</br>

# User Permissions Required
To be able to perform the above operations the below permissions need to be enabled for your user:

- CREATE _ ENVIRONMENT
- UPDATE _ ENVIRONMENT
- REDEPLOY _ ENVIRONMENT
- MANAGE _ ENVIRONMENTS
- ALLOW -  EXPORT  - ENVIRONMENT


To have a better understanding of the user permissions, hover the cursor over the variables and a short description will pop up or click [here](http://documentation.temenos.cloud/home/techguides/user-permissions) to read more.
