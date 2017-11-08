# General Troubleshooting #


This user guide shows the options to verify the errors in case of failure when deploying the following:

- DS Packages
- Plugins (war files)
- Updates

By following this you can identify why a package didn't install or you can check why a jenkins build failed.

## 1.Use WinSCP ##

 - Go to your organization PaaS link 

   - example: [http://51.141.24.193:4200/organisations/1c484wyz0lslc/environments](http://51.141.24.193:4200/organisations/1c484wyz0lslc/environments "Environment")
   


 - Login with your **user** and **password**


![login](./images/login-environment.png)


 - **Click** on New ABN Env

![new abn env](./images/new-abn-env.png)

- **Click on Export Environment** and wait for a few moments

![export environment](./images/export-environment.png)

 -  **Click** on **copy** button and you'll **copy sftp.dev.temenos.cloud**

![copy environment](./images/copy-env.png)

 - From Programs list, open **WinSCP**
 - Insert **Host Name** (use the link copied above: sftp.dev.temenos.cloud, insert **your user** and press **Advanced**

![portal login details](./images/portal-login-details.png)

 - Go to **Authentication** and then add **private key file** and click **OK**

![portal login details](./images/add-ppk-key.png)

- Previous screen is displayed. Click **Login**

- Next warning message is displayed. Click **Yes**

![connecting to server](./images/connecting-to-server.png)

- Next screen is open. You can check here the archives containing the logs with all required information

![check archives](./images/check-archives.png)


## 2.Use TAFJEE ##

 - Go back to main portal page and click to **Monitor Application**:

![monitor application](./images/monitor-application.png)

 -  Following screen is open. Click on **Log Files**

![log files](./images/log-files.png)

- From the list of **Logs**, below are highlighted some which could be useful in case of an issue:

![check logs](./images/check-logs.png)









