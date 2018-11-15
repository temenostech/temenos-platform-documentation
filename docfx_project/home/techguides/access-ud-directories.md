# Access T24 UD Directories

Learn how to easily access the T24 UD directories of your sandbox and make updates, without the need of exporting zip files, but using symbolic links on the SFTP server to the T24 VM machines.

> [!Note]
> Check also our <a href="https://www.youtube.com/watch?v=wqBTV76cAOQ" target="_blank">**Video tutorial**
</a>


## Create New Environment

 - Login to [**https://portal.temenos.cloud/**](https://portal.temenos.cloud/) 
 - Each time you login, you must accept the Privacy Notice in order to have access to the portal
 - The first page that is displayed after login is the **Environments** list
- Click **New environment** button
- Fill the mandatory fields:
    - **Name**
    - **Description**
- Select an application from **Cloud native applications**
- Choose a template from **Templates** list
- *Labels field is optional*
- Click **Create environment**

![new environment](./images/access-ud-new-env.png)

> [!Note]
> It will take about 15 minutes for the new environment to be created

## Create a User on the Portal

This is required later when connecting to T24 through SFTP server connection, because it checks the authentication to the cloud environment with that specific user and the attached SSH key.

To see all the steps regarding how to add a new user on the portal and to attach the SSH key, please see the following user guide about how to [**Create Users**](../techguides/user-creation-in-paas.md).

## Connect via SFTP Client

 - In order to have access to the T24/ VM Cloud Application live folders, you can install an FTP client from [https://winscp.net/eng/index.php](https://winscp.net/eng/index.php)
 - Open WinSCP application and fill the mandatory fields:
   - Host name > copy it from the environment endpoint: sftp.temenos.cloud 
   - User name > input the exact name of the user added to the portal
 - Click **Advanced**
 - In the new screen, select **SSH Authentication** 
 - Upload the private key previously saved (corresponding to the public key attached to the portal user)
 - Click **OK**

![sftp fields](./images/access-ud-sftp-fields.png)

<br>

 - Previous screen pops-up, click **Login**

## Check and Use Live Folders 

 - After logging in, on the right window, locate your envirnoment ID
 - Double click to access the live folders of the environment
 - You will be able to see and access the following T24 live folders structure:
   - default - *for example, here you can push a message file into the application that you need to test*
   - log_t24  
       - como - it will load TSA logs when running different TSA services
       - T24.log -  refers to the T24 BrowserWeb processes
   - standalone/server.log - shows the Jboss application log


![access ud directories schema](./images/access-ud-schema.png)

<br>

 - To see how you can push a message to be processed by an application, check this [**FCM example**](../techguides/fcm-configuration.md#process-messages-in-the-fcm-application).

> [!Note]
> Make sure you place the files in the appropriate folder belonging to the specific application that you want to use

