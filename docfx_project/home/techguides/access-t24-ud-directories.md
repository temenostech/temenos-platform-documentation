# Access T24 UD Directories

Learn how to easily access the T24 UD directories of your sandbox and make updates, without the need of exporting zip files, but using symbolic links on the SFTP server to the T24 VM machines.

> [!Note]
> Check also our <a href="https://www.youtube.com/watch?v=wqBTV76cAOQ" target="_blank">**video tutorial**</a>. 


## Create New Environment

 - Login to the indicated Temenos Continuous Deployment Platform - either: [portal.temenos.com](https://portal.temenos.cloud/)
 - Each time you login, you must accept the Privacy Notice in order to have access to the portal.
 - The first page that is displayed after login is the **Environments** page where you can fill the date to create a **New environment**.
- Fill the mandatory fields:
    - **Name**
    - **Description**
- Select an application from **Cloud native applications** (select T24)
- Choose a template from **Templates** list
- *Labels field is optional*
- Click **Create environment**

![new environment](./images/env-new.png)


## Create a User on the Portal

This is required later when connecting to T24 through SFTP server connection, because it checks the authentication to the cloud environment with that specific user and the attached SSH key. 

To see all the steps regarding how to add a new user on the portal and to attach the SSH key, please see the following user guide about how to [**Create Users**](../techguides/user-creation-in-paas.md).

## Connect via SFTP Client

 - In order to have access to the T24/ VM Cloud Application live folders, you can install an FTP client from [https://winscp.net/eng/index.php](https://winscp.net/eng/index.php)
 - Open WinSCP application and fill the mandatory fields:
    - Host name > copy it from the environment endpoint: sftp.temenos.cloud *(see image below)*
    - User name > input the exact name of the user added to the portal


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![sftp fields](./images/access-ud-endpoint.png)


- Click **Advanced**
- In the new screen, select **SSH Authentication** 
- Upload the private key previously saved (corresponding to the public key attached to the portal user)
- Click **OK**

![](./images/access-ud-sftp-fields.png)

<br>

 - Previous screen pops-up, click **Login**

## Check and Use Live Folders 

 - After logging in, on the right window, locate your environment ID


![](./images/environment-id.png)
<br><br>


-  Double click to access the live folders of the environment


![](./images/open-live-folders.png)



-  You will be able to see and access the following T24 live folders structure:
   - <span style="color:orange">**default**</span>
   - <span style="color:orange">**log_t24**</span>
   - <span style="color:orange">**standalone**</span>


![](./images/T24-live-folders.png)



   - <span style="color:orange">**default**</span> - *for example, here you can push a message file into the application that you need to test*. 
   - Also into the **default** folder, you can create a folder and add some files to it, if you need them to do some specific actions. The folder you create/ add is supposed to point to the **T24_HOME** location.
   - See below:
       - how to find which is the T24_HOME path.
       - how to point to the T24_HOME path in order to get the response that you need for your application.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*<span style="color:#010466;font-size:14pt;">Find the T24_HOME path:</span>*

 - Go to your environment on the portal 
 - Click on MONITOR APPLICATION  


![access ud directories schema](./images/env_gotoapplication.png)

<br>
 - Login with your credentials (these will be provided by Temenos)

 - Then click on tdiag (the path will look similar to this: https://t24-1xxxxxxxxxxxxo.dev.temenos.cloud/TAFJEE/tDiag)  the xxx part represents your environment's id
 - Scroll down a bit until you get to "**TAFJ Runtime properties**" section
 - Here you can see: temn.tafj.runtime.directory.current	/opt/rh/eap7/root/usr/share/wildfly/default

  ![access ud directories schema](./images/env_tajfruntimeproperties.png)

<br>
- If for example, you need to create a folder into the default location (/temenossftp/*yourorgid/your
- id/yourenvid*/default) named "demo" then, in the T24 area the appropriate path will be **/opt/rh/eap7/root/usr/share/wildfly/default/demo**.


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*<span style="color:#010466;font-size:14pt;">Point to the T24_HOME path:</span>*

Into the newly added folder (on default location), make sure you create a configuration file in which you set also the path to your folder.

If for example you want to see a specific log for your application, you will be able to see this log into the **log_t24** folder (see below more details). In order to do so, make sure you add a log4j.properties file into the same folder (the newly created) where you specify the path for the logs of your app. 

EXAMPLE: 

*<span style="color:#010466;font-size:10pt;">log4j.appender.FileLog.file=/opt/rh/eap7/root/usr/share/wildfly/modules/com/temenos/tafj/main/log_T24/your_app.log</span>*

<br>

   - <span style="color:orange">**log_t24**</span>  - contains the T24.log files and also your como logs files when you run TSAs

![access ud directories schema](./images/access-ud-como.png)

   - como - it will load TSA logs when running different TSA services
   - T24.log -  refers to the T24 BrowserWeb processes


<br>

  - <span style="color:orange">**standalone**</span> - contains the jboss logs
server.log - shows the Jboss application log (standalone folder appeas only for the Extend Templates, Wildfly Template and Stack01 Template). On the other hand, if you download the Stack02 Template instead of 'standalone' you will find the 'appserver' folder which shows WebSphere logs such as startServer.log, stopServer.log, and SystemOut.log 

![access ud directories schema](./images/access-ud-standalone.png)
<br>

<br>

To understand better how the SFTP connection works, check below schema:

![access ud directories schema](./images/access-ud-schema.png)

<br>

 - To see how you can push a message to be processed by an application, check this [**FCM example**](../techguides/fcm-configuration.md#process-messages-in-the-fcm-application).

> [!Note]
> Make sure you place the files in the appropriate folder belonging to the specific application that you want to use


# User Permissions Required
To be able to perform the above operations the below permissions need to be enabled for your user:

- CREATE _ USER
- UPDATE _ USER
- CREATE _ ENVIRONMENT
- MANAGE _ ENVIRONMENTS



To have a better understanding of the user permissions, hover the cursor over the variables and a short description will pop up or click [here](http://documentation.temenos.cloud/home/techguides/user-permissions) to read more.
