## Introduction & Prerequisites

This developer guide presents the required configurations and the main steps for the following actions:

 - develop new/existent jBC routines and deploy them to your sandbox
 - import/export applications/enquiries/versions from/to your sandbox to/from your local machine
 - extract from the database/load in the database data (.d) files from/to your sandbox to/from your local machine.

For this purpose, you need to have access to:

 - Design Studio (locally)
 - T24 libraries (locally)
 - TAFJ (locally)
 - Temenos Sandbox (cloud)
 - Tortoise Git (locally)  - download from <a href="https://tortoisegit.org/download/ "Tortoise"" target="_blank">**here**</a>.


A development package (containing Design Studio, T24 libraries and TAFJ) is provided by Temenos  and it is pre-configured in order to be able to introspect T24 application hosted in Temenos Could Development Platform.

This package is adapted according to the T24 version of your sandbox and it is provided as a **.zip** file. 

After extracting it in your local machine to any location, the bellow foldimers should be available:

- DS
- t24Lib
- TAFJ


To be able to interrogate the sandbox database, following update must be applied to **tafj.properties** file from Your_DEV_Path\TAFJ\conf:  

temn.tafj.jdbc.url=jdbc:h2:tcp://**ENV_DNS**:9092/TAFJDB;MODE=Oracle;TRACE_LEVEL_FILE=0;
TRACE_LEVEL_SYSTEM_OUT=0;DB_CLOSE_ON_EXIT=FALSE;
FILE_LOCK=NO;IFEXISTS=TRUE;CACHE_SIZE=131072;
MVCC=TRUE;LOCK_TIMEOUT=30000   
 <span style="color:red">Replace **ENV_DNS** with **your environment DNS**.</span> See below example:

 ![](./images/ds-dns-example.png)

## Create New Project in Design Studio 

In order to accomplish the development actions presented at the beginning of the guide, you need to create a new project in Design Studio.

* Start Design Studio from _DesignStudio_ folder using **StartDesignStudio.bat** file and choose the default workspace (Your_DEV_Path\DesignStudio\workspace) or any other workspace from your local machine.
* After Design Studio starts, go to **File** > **New** > **Project**.  
* Select **Design Studio Template Project** from **Design Studio** item and click **Next**.  
  ![](./images/ds-template-project.png)

<br>

* In the next screen, select **t24-packager-tafj** template from the drop down list and set **tafjHome**, **insertDir** and **libDir** parameters according to Your_DEV_Path.  

> [!Note]
> <span style="color:RED">**VERY IMPORTANT!**</span>
>
> <span style="color:RED">Make sure you set the following values as per below instructions, otherwise the package installation will fail:</span>
>
>  - project-name - always use small letters as per this standard: xx-name (in current example we used: **ft-sample**)
>
>  - release - use the T24 release (example R17, R18, R19 etc.)
>
>  - product-name: use ony two capital letters. **Note** that it must correspond to your project name: 
>   - Example: if project-name is xx-name, the product-name must be XX 
>   - Example: if project-name is ft-sample, the product-name must be FT 


> - component name - must be the same as in project name, after the "-". Must start with capital letter.
>   - Example: if project-name is xx-name, the component-name must be Name 
>   - Example: if project-name is ft-sample, the component-name must be Sample 


> - version: make sure you input the correct version (example 18.11)
>
> - host - login to the portal, go to your Environment > Go to Application > Select the address of your T24 environment (example: https://t24-1abbbbbccc900.temenos.cloud)



![](./images/t24-configure-paths.png)

<br>

* Click **Finish** to create the project and 4 modules will be created, as per bellow picture.  
  -> ft-sample-**data-code**: holding basic routines and data files.  
  -> ft-sample-**models**: holding Design Studio models(applications, enquiries, versions) that can be imported/exported from/to your sandbox.  
  -> ft-sample-**models-gen**: holding files generated by Design Studio from the ft-sample-**models** project.   
  -> ft-sample-**packager**: holding the launcher for creating a T24 package that can be deployed to your sandbox.

* Make sure you check the **secured box** as in below picture:

![](./images/t24-created-projects.png)

Make sure you save the change CTRL+S.

<br>

## Uncheck XML for Local Fields

Go to ft-sample-models > click right and select Properties > expand Design Studio > click Code Generation > expand All Categories > Uncheck XML for Local Fields (LT/RTL)

![](./images/t24-ft-sample-xml.png)

Click Apply and OK.

## Create New T24 Server in Design Studio 

> [!Note]
> Check first if you already have available the **Servers** tab. If not, follow below steps.

A T24 Server is required in Design Studio to be able to import/export applications/enquiries/versions from/to your sandbox. Follow next steps to create and configure a T24 server:

* On servers tab, click right and select **Add New T24 Server**.  
  ![](./images/add-server.png)
  <br>

* A new screen is open. Type a **name** for the server(make sure it includes '-server' string) and click **Next**.  
  ![](./images/project-name.png)  
  <br>

* Choose connection type as **T24 Server-Web Service** and click **Finish**.  
  ![](./images/connection-type.png)  
  <br>

* After the server is created, the _server.properties_ must be updated according to your sandbox details:  
  -> In _T24 User (deployment only)_ section, **2 users** that you use to connect to your T24 sandbox must be introduced.  
  -> In _WebService (TAFJ) Connection_ section, **Secured box** must be checked, **Protocol** must be set to _ws_ value, **Hostname** must be set according to the hostname of your sandbox, **Port** must be set to _443_ value and **Context** to _axis2_ value.  
  ![](./images/server-properties.png)  

<br>
-> To get the hostname of your sandbox, log-in to your organisation in TCD Portal (Temenos Continuous Deployment), go to your enviroment page and click on the **GO TO Application** Endpoint for the T24 application. The BrowserWeb page of your sandbox is opened and from the URL of this page, you must select the part between _https://_ and _/BrowserWeb/servlet/BrowserServlet_.
![](./images/hostname.png)

<br>

> [!Note]
> For future use, in case T24 Server is not visible, go to: **Window > Show View > Other**:
>
> ![](./images/t24-view-server.png)
>
> Type Server in the search bar and select **Design Studio > Servers**:
>
> ![](./images/t24-view-server-search.png)



## Toggle Project to TAFJ project nature 

The **Toggle TAFJ project nature** action must be performed in order to be able to develop, compile and package jBC routines and to interrogate your sandbox database.  

* Right click on **data-code** module and choose **Toggle TAFJ project nature**.  
  ![](./images/tafj-toggle-1.png)  
  <br>
* In the next screen, 
* _tafj_properties_ from Your_DEV_Path/TAFJ/conf folder, choose TAFJ_HOME as Your_DEV_Path/TAFJ folder and click **Next**. In the bellow picture, DEV_Path is set to C:\TemenosDEV.
  ![](./images/tafj-toggle-2.png)  
  <br>
* In the next screens, click **Next** and **Finish**.  
  ![](./images/tafj-toggle-3.png)  
  <br>
* In the end, **data-code** module should be toggled.  
  ![](./images/tafj-toggle-4.png)  
  <br>
* A .properties file was created for your project in Your_DEV_Path/TAFJ/conf folder.  
  ![](./images/tafj-toggle-5.png)  
  <br>

> [!Note]
> If TAFJ properties for your project must be updated, make sure you update the .properties related to your project from Your_DEV_Path/TAFJ/conf folder.

## jBC Routines Development 

> [!Note]
> In order to make sure your routine will be successfully created, <span style="color:red">it is important to have set correctly all the parameters when creating a new project.</span> If necessary, check again <a href=./t24-development.md#create-new-project-in-design-studio target="_blank">**this section**</a>.


jBC routines are developed in the **data-code** module which must be toggled to TAFJ project nature by following next steps.  

* In order to create a new jBC routine, expand **data-code** module, go to src->Source->Private, right click on project name (FT_Sample in the above picture), select **New** and then **New T24 routine / component / testcase**.
  ![](./images/add-routine.png) 
  <br> 
* On next screen, type the name of the routine and click **Finish**.  
  ![](./add-routine-1.png)
  <br>
* The new routine is created.  
  ![](./images/add-routine-2.png)
  <br>

## Create a T24 package based on your project 

In order to deploy your developed routines in the sandbox, a T24 package must be created.

 - Go to **packager** module in Design Studio workspace, right click on **Launch T24 Packager (TAFJ).launch** and choose **Run As** > **Launch T24 Packager (TAFJ)**.
   ![](./images/build-project.png)
   <br>
 - **Wait** for successfull build for the project.

![](./images/build-success-final.png)
<br>

 - Check where the **package** was generated.

![](./images/check-build-success.png)
<br>

## Import T24 Applications, Enquiries and Versions 

> [!Note]
> In order to import Applications/Enquiries/Versions from your sandbox to your local machine, make sure you have a T24-server created and configured in Design Studio.
>
> Hint: When importing artefacts from a T24 Environments on the project you need to disable the XText  RIM in order to speed up the operation and install or after a T24 update/upgrade. 

 ![](./images/disable-xtext-rim-compiler.png)

> Then  Import T24 Core Models or if your DS version has the Import T24 Core Models with the process after T24 update/upgrade (this tool is also available in headless mode).

![](./images/import-core-models.png)

* Go to Servers tab, right click on your server state and change state to **active**.
  ![](./images/t24-connection.png)  
  <br>
* State should become active:  
  ![](./images/active-server.png)  
  <br>

> [!Note]
> The following example is about importing Enquiries from your sandbox to your local machine. The same steps can be aplied for Applications and Versions.  

* After the T24-server is active, right click on the **models** module and choose **Import**:  
  ![](./images/import_enquiries_1.png)
  <br>
* Expand **Design Studio** item, choose **Import T24 Enquiries** and click on **Next** button. (you have to wait until the list of enquiries is fetched from the sandbox database).  
  ![](./images/import_enquiries_2.png)
  <br>
* Select from this list which enquiry you want to import from the sandbox to your local machine and click **Next**.  
  ![](./images/import_enquiries_3.png)
  <br>
* Choose where to import the enquiry(**Models** folder from **models** module) and click **Finish**(wait until the operation is completed).  
  ![](./images/import_enquiries_4.png)
  <br>
* A successful message will be displayed at the end and the enquiry will be saved in your local machine.  
  ![](./images/import_enquiries_5.png)
  <br>

## Export T24 Applications, Enquiries and Versions

> [!Note]
> The following example is about exporting Enquiries from your local machine to your sandbox. The same steps can be aplied for Applications and Versions.   

> [!Note]
> Make sure your T24 server is set to **active**.

* Right click on the **models** module and choose **Design Studio** -> **Generate Code**:  
  ![](./images/export_enquiries_1.png)  
  <br>
* A message should be displayed saying that the enquiry was successfully modified.
  ![](./images/export_enquiries_2.png)  
  <br>

## Data (.d) files 

A data(.d) file represents a details viewer of a record from the database. A data file has 2 columns:  
-> first column contains the unique number of all table fields of the record;  
-> second column contains the values for all table fields of the record.  
![](./images/data_files_1.png)
<br>

> [!Note]
> Assuming that your **date-code** module is toggled to TAFJ project nature, make sure you update the .properties file related to your project from Your_DEV_Path/TAFJ/conf folder with the private database IP of your sandbox.

Before starting to extract/load data files from/to your sandbox database, you must login to TAFJ-DBTools.  
-> Right click on your **data-code** module and select **DBTools login**.
![](./images/extract_data_dbtools_1.png)  
<br>
-> A wizard will appear in which you must type the DBTools credentials(which can be found in Add_DBTools_User.bat file from Your_DEV_Path) and click **Finish**.
![](./images/extract_data_dbtools_2.png)  
<br>

### Extract data files from the database 

* Expand **data-code** module, go to src, right click on **Data** and select **Extract from the database**.  
  ![](./images/extract_data_1.png)  
  <br>
* The bellow wizard will appear. Make sure the URL of the Database contains the correct database IP of your sandbox. Otherwise, you have update your .properties file related to your project from Your_DEV_Path/TAFJ/conf folder.
  ![](./images/extract_data_2.png)  
  <br>
* Type the Table Name and Record ID and click **Finish**.  
  ![](./images/extract_data_3.png)  
  <br>
* Check the console log to see if the data files was extracted.
  ![](./images/extract_data_4.png)  
  <br>

### Load data files in the database

* Right click on your data file and select **Load in the database**.  
  ![](./images/load_data_1.png)  
  <br>
* The bellow wizard will appear and click **Finish**. Make sure the URL of the Database contains the correct database IP of your sandbox. Otherwise, you have update your .properties file related to your project from Your_DEV_Path/TAFJ/conf folder.
  ![](./images/load_data_2.png)  
  <br>
* A success message should be displayed in the console.  
  ![](./images/load_data_3.png)  

For more tutorials on how Design Studio works, please check <a href="http://documentation.temenos.cloud/home/design-studio-tutorials" target="_blank"><u>**here.**</u></a> 