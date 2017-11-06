# Start Design Studio #


## Prerequisites ##

To be able to use T24 cloud environment, you need to have access to:

 - Design Studio
 - Temenos Sandbox
 - Tortoise Git  - download from [here](https://tortoisegit.org/download/ "Tortoise")
 - GitLab Platform


# Create New Project #

The package delivered by Temenos MarketPlace contains the following:

- Design Studio
- T24 libraries
- TAFJ environment

Design Studio will be delivered pre-configured in order to be able to introspect T24 applications hosted in MarketPlace Could Infrastructure

**- Start Design Studio application:**

Go into DesignStudioT24 folder and double click on **StartDesignStudio.bat**

![start Design Studio](./images/start-ds.png)

**- Choose a workspace:**

When it opens, browse for the **Workspace** folder which is in the DesignStudioT24 folder.

![choose workspace](./images/choose-workspace.png)

**- Create project:**

On the menu bar, click **File** > **New** > **Project** 

![create new project](./images/new-project.png)

**Result**: the New Project dialog box is displayed.

- Select **Design Studio** > **Design Studio Template Project** and click **Next**:

![design studio template project](./images/ds-template-project.png)

**Result**: the New Design Template Projects dialog box is displayed.

Select from the drop down list the template accorded to your T24 installation:  **t24-packager-tafj**

![tafj package](./images/tafj-packager.png)

 - **Set Template parameters values** (mandatory fields as notified in previous image)


![template project](./images/template-project.png)


> [!Note]
> In Value field, change the **project-name** from the defaulted one to “*something at your choice*” (here we've named it 'sample'). **Use small letters**

> [!Note]
> In Value field, change **component-name** from the defaulted one to “*something at your choice*”. **Start words with capital letters**

> [!Tip]
> Value fields above need to be changed in order to avoid overriding an existing jar, which already appears in the environment 

- Click **Finish** to create the project.

**Result**: Four projects are created by the template. By default, ft-modelbank is the prefix of these projects: 

![created projects](./images/created-projects.png)

> [!Note]
> Instead of default '*ft-sample*' it will appear '*the name*' you provided

   -  ft-sample-**data-code**: holding basic and data files.

  -  ft-sample-**models**: holding Design Studio models that can be imported and amended thanks to dedicated editors.

  -  ft-sample-**models-gen**: holding files Design Studio generates from the *ft-modelbank*-modelsproject.

  -  ft-sample-**packager**: **is the packager project itself** from where you can launch the final artifact creation.


 - On servers tab, click right and **Add New T24 Server**

![add server](./images/add-server.png)

 - A new screen is open. Give a **project name** and click **Next**

![project name](./images/project-name.png)

 - Choose connection type as **T24 Server-Web service** and click **Finish**


![connection type](./images/connection-type.png)


 - Check your configuration (username, authorizer, Hostname address and Port):

![server properties](./images/server-properties.png)

**Secured box** needs to be checked.

**Protocol** should remain "ws".

**Hostname** should be the DNS hostname of T24 endpoint.

**Port** should be changed to 443.

**Context** should remain axis2.

 - Change server state into **active**:

![t24 connection](./images/t24-connection.png)


 - If you go to **Servers tab**, state should be active: 

![active server](./images/active-server.png)

Make sure T24 Connection is active. (If not, click on Start/Restart)

**Expand** ft-modelbank-data-code:

![select modelbank data](./images/select-modelbank-data.png)

-  **Click on** ft sample-models. **Click right** – **select Maven** – **update Project** 

![update maven project](./images/update-project.png)

 - **Select all, then OK**

![update maven project](./images/update-maven.png)

 - Expand ft-sample-packager, click right on **Launch T24 packager** > **Run as > Launch T24 Packager (TAFJ)**


![launch tafj packager](./images/launch-packager.png)

 - Wait for the workspace to be built.

 - A successful packager build is shown in the console

![build success](./images/build-success.png)

# Adding subroutines #

In order to add a routine, follow below steps:

![add routine](./images/add-routine.png)

![wizard routine](./images/wizard-routine.png)

 - Give a **name** for the routine you want to create:

![routine name](./images/routine-name.png)

 - **Result**: the routine is created:

![sample routine created](./images/sample-routine-created.png)

> [!Note]
> After writing the routine, in case the compilation will throw an error related to “$PACKAGE is mandatory”, make sure you put on “Dunce Cap” as below:
> 
>![put dunce cap](./images/dunce-cap.png)


# Import T24 Applications #

 - Go to your models project. Right click on **Applications** and choose **Import**:

![import applications](./images/import-applications.png)

 - Select **Design Studio** and choose **Import T24 Applications**, click on **next** button and wait until it loads

![load applications](./images/load-applications.png)

 - Click on **Select All** button and check **Import to subfolders based on Product name**:

![import applications window](./images/import-app-wizard.png)

 - Click on **Next** button and choose the **location** where to be imported the applications:

![app location](./images/app-location.png)

 - Click on **Finish** button and wait until the operation is completed (this might take longer):

![download app](./images/download-app.png)

 - A **successful** message will be displayed at the end and your application will be imported in your area.

![success message](./images/success-message.png)

# Enquiries and Versions #

## Import Enquiries ##

 -  Go to **Models**, click right and choose **Import**:

![import enquiries](./images/import-enquiries.png)


![import t24 enquiries](./images/import-t24-enquiries.png)

 - Select all or just enquiries that you are interested in

![select t24 enquiries](./images/select-enquiries.png)

 - **Example** of a single enquiry import:

![single enquiry](./images/single-enquiry.png)

 - Click on **Next** button and chose the location:

![choose enquiry location](./images/enquiry-location.png)

 - A **success message** is displayed:

![success message enquiry](./images/success-message-enquiry.png)

## Import Versions ##

 -  Go to **Models**, click right and choose **Import**:

![import version](./images/import-version.png)

 - **Select** all or the versions of interest:

![select versions](./images/select-versions.png)

 - See below **example**:

![select example version](./images/select-example-version.png)

 - Click on **Next** button and chose the location:

![choose version location](./images/choose-version-location.png)

 - A **success message** is displayed:

![success message version](./images/success-message-version.png)

# Build the project #

 - Go to: **ft-sample-packager** > **Launch T24 Packager (TAFJ).launch** > **Run As** > **Launch T24 Packager (TAFJ)**

![build-project](./images/build-project.png)

 - **Wait** for workspace to be built:

![building](./images/building.png)

![build success](./images/build-success-final.png)

 - You can also check **build’s success** here:

![check build success](./images/check-build-success.png)


# Clone GitLab Repository #

- Make sure you have installed TortoiseGit. 
- Make sure you have received the **ppk** private key to open ssh
- Create a folder somewhere in your local machine. In current example, it was used  a folder named 'GitLab' 
- Inside the created folder, click right and choose **Git Clone**

![git clone](./images/git-clone.png)

Insert as follows:

**URL**: git@gitlab.temenos.cloud:1c3pg74t41czk/corebanking.git
**Directory**: D:\MKP\gitlab   *(path of your folder)*
**Check Load Putty Key**: browse for you ppk key

![load putty key](./images/load-putty-key.png)

 - Following alert message is displayed. Click **yes**

![tortoise alert](./images/tortoise-alert.png)

 - Repository was cloned:

![clone result](./images/clone-result.png)


# Deploy the Jar #

In order to find the jar's location, check properties in ft-sample-packager.

![generated jar](./images/generated-jar.png)

![package properties](./images/package-properties.png)

![jar location](./images/jar-location.png)

 - Copy/ drag the **jar** into the **packages** folder:

![packages](./images/packages.png)

- **Add** and **commit** the jar to the repository by using Tortoise Git:

![tortoise add](./images/tortoise-add.png)

A screen will appear saying the file was added. Press **commit**:

![tortoise commit](./images/tortoise-commit.png)

A new screen will appear. Insert a comment in the upper window and then choose **Commit and Push**

![tortoise commit and push](./images/commit-push.png)

A success message should be displayed.

> [!Note]
> For any change, you can add, rename, delete, push, pull etc as per Tortoise commands:
![clone result](./images/tortoise-commands.png)
