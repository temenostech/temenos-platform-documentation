
## Factories ##

Factories are the core Assemble components that define how, what and when to deploy, test and promote the various components used by an organization. 

A factory is an information bundle that holds the following critical information that is needed to run an assembly factory:


*<span style="background-color: #f4f1ef;color: DarkBlue;"><b>Name</b></span>* &nbsp;

- Used just to identify or tag a factory

<br>

*<span style="background-color: #f4f1ef;color: DarkBlue;"><b>Products</b></span>* &nbsp;

a. **Principle Products** – Principle products simply mean the list of components that are being tested against a stable set of other pre-tested components. After successfully running the factory, the principle products are promoted to the next stage (the configured one).

b. **Other products** *(Base Products)* – Products that are pre-tested (by other factories) and are known to be stage.  These are products that don’t need to be promoted but they are required to test the Principle Products.

<br>

*<span style="background-color: #f4f1ef;color: DarkBlue;"><b>Stages</b></span>* &nbsp;

a. From stage (Which stage to get the principle components from) – **Source stage** (The stage from which pre-tested stable components can be picked up).

b. **Source Stage** – The stage from which the “Other Products” *(Base Products)* components are fetched. This stage represents a stable version of components that is pre-tested from the perspective of the current factory.


<br>

*<span style="background-color: #f4f1ef;color: DarkBlue;"><b>Templates</b></span>* &nbsp;

a. **Environment Template** - holds the details of the template that is to be used to deploy the components selected by the factory

b. **Test Template** – specifies the template that is required to deploy a test environment that holds the testing framework and test scripts. This is needed to generalize the test tools as a template.

<br>


## Validations ##

1. The list of selected products cannot contain components that are not understood by the selected Environment Template. 

    a. The list of components contained in the principle and other products needs to match a bare minimum of all mandatory components specified in the template.

    b. The list of components can possibly have more than one component of the same type if the template allows more than one count of the same type.

    c. The list of components cannot contain a component type that is unknown to the Template.


2. Templates – The selection of templates are restricted based on the type of the template and a selection list is already confined to allocated and valid templates.

3. Stages – No restriction. The factory can even choose to use the same Stage for all three stage values.


> [!Note]
> See below configurations to understand better how to configure correctly and the factory's behavior.

# How to Set-up/ Edit/ Delete Factories 

## Set-up/ Create a Factory ##

- Click on Settings button on the main menu on the left.
- Make sure you select first the **Stream** and **Stage** (this is the stage where components are promoted) where you want to create a factory and then click **New Factory** button on the top-right.
- Fill the required fields (see all definitions above and also below example):
<b>
</br>

#### Factory Details ####
- **Factory Name**: choose a meaningful name for your factory.
- **Factory Description**: insert a description that will help knowing what the factory is about.
![factory-details](./images/factory-details.png)

#### Product Configuration ####
This tab represents the test configuration that holds the template, the products and the source stage that are pre-tested from the perspective of the current factory.
    - **Template**: choose an Environment Template from the dropdown list. Based on this template  the environments will be created where you will be able to test different products
    - **Select Principle Products**: following a successful run, the principle products are promoted to the next stage (the configured one)
    - **Source Stage**: this is the stage with the stable version of components
    - **Select Other Products**: you can select more products that are required to test the Principle products
    - click **Next**
![factory-product-configuration](./images/factory-product-configuration.png) 

#### Test Configuration
The Test Configuration consists in in-build service tasks and is used to  trigger tests for a given factory-run, trigger export of application logs.
    - **Select Workflow**: a drop-down list with factory workflows added by the Temenos team. In the future users will be able to create their own workflows. As of now, there is one default workflow that is assigned to the users. By request, the Temenos Cloud and DevOps team can provide 3 additional workflows (COB Workflow, Full Workflow and Two Steps without COB Workflow). Depending on the user's workflow, additional configuration steps may need to be followed. Below is an example of how the Full Workflow should be configured:
        - **Step 1**: select the test template, component, the number of VMs needed, the test stage and tick if the workflow should stop in case of failure. At the end of this step, when the first round of tests has been finished, the test VM will be deleted, but it will not stop the T24 environment (this will be done at the end of the workflow)
        - **Step 2**: type in the ID of the TSA.SERVICE record for which COB has to be run. The id can be either group specific id (eg: COB-1, COB-001) , company specific id (eg: COB-GB0010001) or COB 
        - **Step 3**:  insert the template, component, the number of VMs needed and the test stage  where you would like to test the components
<br>
</br>

    - **Workflow steps**: a sample which displays the steps (in that exact sequence) that are executed by the selected workflow
![factory-test-configuration](./images/factory-test-configuration.png)

#### Promotion Configuration
This configuration enables the user to select all the required principle products along with the target stage to which they will be promoted after a successful factory run. In addition, the user can select the Test Components along with the target stage if they need promotion as well. 
![factory-promotion-configuration](./images/factory-promotion-configuration.png)

#### Factory Scheduler
A user has the privilege to configure the schedule of the factory run in order to automatically run the tests and have the results available daily
- the scheduler can be configured to run one time per day
- if the factory run test is successful you can choose to stop/ or keep running the T24 environment
- the same applies for the Factory Run Failure scenario
The 'Stop Environment' and 'Keep Running Environment' options are aimed to be used for costs purposes
![factory-scheduler](./images/factory-scheduler.png)

## Factory Migration ##
Below you will see what are the steps involved to perform the factory migration from an existing platform.  As part of the platform upgrade process, all the existing Factories of the platform (all organizations) are also migrated. The factory migration involves populating appropriate tables with the default values wherever applicable.  

The end-user will not be able to run a factory until the Test Script component is defined. In order to do so, existing TestCases have to be migrated. The migration is nothing but repackaging existing TestCases in to a format that the platform understands.  Please follow the below steps to migrate the TestCases:



1.  Identify and download the TestCases of the factory in the repository located at {default-stage}/{stream}/{stage}/TestCases/TestCases/testcases.zip.

 ![factory-migration-1](./images/factory-migration-1.png)
<br>
</br>
2. After the download is complete, leave the zip folder with the same name or rename if required.

 ![factory-migration-2](./images/factory-migration-2.png)
<br>
</br>

3. Zip again the downloaded zip file from the Artifactory.

 ![factory-migration-3](./images/factory-migration-3.png)
<br>
</br>

4. Rename the new zip folder if required. This new zip file will be uploaded to the Artifactory. The file's structure should look as below.

 ![factory-migration-4](./images/factory-migration-4.png)
<br>
</br>

5.  Create a new **Component** (eg. TestCase01) in the portal. The **Component Type** will be ‘TestScript’ 

 ![factory-migration-5](./images/factory-migration-5.png)
<br>
</br>

6.	Upload the zip file from the Step 5 on the Artifactory to the required stage

 ![factory-migration-6](./images/factory-migration-6.png)
<br>
</br>

7. Select the previously created **Component** and **Stage** the in the** Test Configuration** of the factory 

 ![factory-migration-7](./images/factory-migration-7.png)

**Case 1:**
Note that a Test case can have multiple scenarios (.zip files) in a **Stream**. In such cases download all of the .zip files and re-package them again in a single zip file so that it can be uploaded to Artifactory. 
As shown below the multiple .zip files from Artifactory are downloaded and repackaged using a parent zip folder called Accounts.zip. This new zip file will be uploaded to the Artifactory as a component.

 ![factory-migration-8](./images/factory-migration-8.png)

### Other Scenarios ###
**Case 2:**

It is also possible to have multiple Test cases and each Test Case can have multiple scenarios (.zip files). In such cases download all the zip files and rename to avoid conflicting names, archive them to a parent zip folder. 
As shown below by colouring the downloaded zip files are renamed since the zip file names are conflicting and moved to a common folder called TestCase01. This folder TestCase01 should be zipped and uploaded to Artifactory. 

 ![factory-migration-9](./images/factory-migration-9.png)

> **Notes**:
> 
> •	There is no constraint on folder names. 
> 
> •	Upon successful test execution, i.e. if all test cases are passed then the TestCase01 component will be promoted to target stage.

> •	Only one Test Script/Test Component can be configured in a factory. Thus, if the user wants to run multiple test scenarios and promote it separately to different stages then it should be added in individual factories. 

## Edit a Factory ##

- Click the **Edit** button
- Any field can be changed/ edited as long as the entire Factory configuration complies with the validation rules
- Click the **Update** button


## Delete a Factory ##

- You can easily delete a factory by clicking the **delete** button
- The products, stages and streams created before can be re-used.

![factory-scheduler](./images/factory-edit-delete.png)

# User Permissions Required
To be able to perform the above operations the following permissions need to be enabled for your user:

- MANAGE _ COMPONENTS
- MANAGE _ STREAMS
- MANAGE _ STAGES
- MANAGE _ PRODUCTS
- CREATE _ FACTORY
- UPDATE _ FACTORY
- DELETE _ FACTORY



To understand what which of the permission does, hover the cursor over the variables and a short description will pop up or click [here](http://documentation.temenos.cloud/home/techguides/user-permissions) to get an overview of the permissions.
