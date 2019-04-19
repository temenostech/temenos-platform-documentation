# Components – Feature Description #

<span style="color:red">PRODUCTS: are a grouping of components: a product can be T24 and Payments L3 update.

<span style="color:red">For creation of the factory I dont need to yet to upload tests, but for the factory run, yes, after I create factory, i can upload test files.</span>
<span style="color:red">Dashboard - create factory under a certain stream and stage.</span>

<span style="color:red">Component files- I need to upload them on the artifactory for each component - see the link that appears when creating a component. I can add this just before running the factory or whenever I have an update for that component and the pipeline will pick up automatically the latest version.</span>

<span style="color:red">For a component the path on artifactory should be always under the stable-dev. - the path where I am uploading the files for that component.
But for tests should be the stage that I created (ex primary or whatever).</span>

Components are individually deployable units that are understood by TCP (Temenos Cloud Platform) based on the component type that each component refers to. 

Each component is associated to a component type to help TCP deploy the component. 

The **Component Type** field in the component data is the key to help the TCP Controllers deploy the right components in the right way. 
An organization can define as many components as needed but should have all mandatory components defined in the templates that are assigned to the organization.

Practically when a template is assigned to an organization, a list of component types related to that template is added for that organization.

Each component has the following fields *(all mandatory)*:

- Component Type

- Name

- Description

- Display Name

## Component Type ##

The TCP uses a convention/ protocol to deploy all parts required to run a full-fledged instance of T24 (Or any other product supported by a template). Such parts to constitute a complete system are called **components**. 

The T24 installation may have the following components (No exhaustive or inclusive):

- T24-Jars
- T24-ud
- Helptext
- Tafj-installer etc.

Each item in this list is called a **component type**. 

The names of these parts / Component Types are fixed and are not user editable. This is managed internally by the TCP admin/ development group and can only be changed or modified by this group. 

Each component type represents a deployable unit and has an ansible script associated to it. 

These components have a structure associated and work in a standardized manner across different deployment stacks (OS, App server variations, DB variations etc).

## How to Set Up/ Delete Components ##

### Set-up/ Create a Component ###

 - Login to the Temenos Continuous Deployment Platform.
 - Click on Settings button on the left menu > this will expand a menu containing buttons for: Streams, Stages, Products, Factory and General.  
 - Before creating a component, make sure you select first the stream *(top-right)* where you want to add the respective component. 
 - Click on **Products** button. (This button includes creation of the components and then 
 - Click on the **New Component** on the top right.
 - Select the Component Type from the dropdown list (the list displays all the components available for your Organization. This is based on the available templates).
 - Input a Name. *Take into account these conditions (also notified on the screen): Name can start only with a letter or an underscore and it can contain only letters, digits, underscores or hyphens.*
 - Fill the Description.
 - Fill the Display Name.
 - Click **Create**.

See below example:

![](./images/products-add-component.png)

After creating it, under Component Details you will notice a link of this type: 

<span style="color:DarkSlateBlue">**Upload URL: http://platformdevartifactory.dev.temenos.cloud:8081/artifactory/stable_dev/Dev/Stable_Dev/T24_Browse**</span>

A folder is automatically created into the repository *(we are using JFrog Artifactory)* with the name of your component. This is the path where the components' files should be uploaded as explained on the next steps:

*(Please note that the components' artifacts can be uploaded any time before running a factory).*

![](./images/products-deploy-artifactory.png)

Select single or multi depending on the number of archives you need to add, drag and drop or select the archive and then click **deploy**. 

![](./images/products-deploy-files.png)

You will see a success message and the archive under your component.

> [!Note]
> Components artifacts are delivered to clients by Temenos Distribution team.
> Also the binaries/ artifacts have to be uploaded each time a component is updated.


### Which Components to Add ###

In order to know which are the minimum required components that you need to add, you must first check the **Templates Catalog** (see button on the left menu).

From here, select the template that you want to use:

 - Make sure you select first the Template Type (FCM, T24, Tools, Wealth etc.). 
 - Then from the available Templates Catalog, select the one that you need in order to check the components.
 - Under Full Template Content, scroll until you see the components section.
 - Is is required to add at least all the mandatory components.
 - For all added components, make sure you add the related files archive into the artifactory as explained above.

![](./images/products-templates.png)


### Delete a Component ###

Components fields are not editable, so you have only the options to create or to delete them.

> [!Note]
> <span style="color:red">If your component is **attached to a Product**, you will not be able to delete it. 
> 
> You need first delete the product, then return to the component and click **Delete** button.</span>

# Products – Feature Description #

A product is a logical grouping of several components. This is just to make it easy for users to select a list of components to deploy instead of selecting each component in a sequence. 

A product has the following fields *(all mandatory)*:

- Name

- Description

- List of constituent components - at least one component is required 

Ultimately, a product is used in a factory and will be used eventually to deploy the required components.

## How to Set Up/ Edit/ Delete Products ##

### Set-up/ Create a Product ###


### Edit a Product ###

### Delete a Product ###