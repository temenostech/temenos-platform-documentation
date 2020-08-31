
## Run Factory ##


After setting-up a factory (see configuration steps in <a href="./factories.md#set-up-create-a-factory" target="blank"><b>this user guide</b></a>), go to **Dashboard** on the main menu and select the factory you created (in case you have more factories). 

> [!Note]
> In order to run your factory, make sure first you select the stream and stage where you created the factory *(top right)*.

If the factory has never been run, you will notice the following message on the screen, under the respective factory: *The factory has never been run before. Please start the factory process now by clicking on the "Run Now" button.*



Click **Run Now**.

![](./images/run-factory-dashboard.png) 

The process is initiated and it will get immediately to the stage where an environment based on your chosen template is created. 

![](./images/run-factory-deploy.png)

During the factory run you are able to:

1. See the duration of total time between different stages and the status of the current stage

2. Click on the **Actions** button to:

     2.1 **View Environment** -  check the creation of the environment. The name of the environment will be "Env _ for _ Factory _ xxx", where xxx is the name of your factory (in our case Env _ for _ Factory _ Demo _ Factory)

      ![](./images/run-factory-environment-create.png) 
 
     2.2 View Event History - see the logs of the factory run

      ![](./images/run-factory-environment-event-history.png) 

     2.3. **Abort** a factory run by clicking the 'Abort' button on the top right side of the page (i.e. in case of a mistake). This action prevents you from deploying, testing or promoting the components. By clicking on **Abort** a confirmation pops-up which asks you to confirm the action. You can edit the factory and then click 'Run now' again to see the results.

     ![](./images/run-factory-abort-factory.png)     

3. Refresh the timeline by clicking on the **Refresh** icon

![](./images/run-factory-deploy2.png)
 

Clicking on the Environments tab on the left menu, you can check the creation of the environment. The name of the environment will be "Env for Factory xxx", where xxx is the name of your factory.



> [!Note]
> 1. The environment creation stage may take between 20 minutes and a few hours depending on the template used. 
> 
>  A factory can be enabled or disabled at any time. If a factory is disabled, factory runs (both scheduled and user triggered) will not be triggered. 


After the environment deployment phase is completed, the next phase (stage) is Running Test Deploy. During this phase a test environment is created (you can check it under Environments tab). 

**Note** that this environment is automatically deleted after the tests are run and the process is completed.

![](./images/run-factory-test-deploy.png)

![](./images/run-factory-create-test.png)


After running the tests successfully, you will see some details about all stages and the results, as in the example below:

![](./images/run-factory-completed.png)

Based on any factory run, the user can take several actions:

- **Trigger New Environment** - trigger a new environment to do triage, demo or ad-hoc testing (this will clone the factory environment)

- **View Environment** - view the environment used for the factory run

- **View Event History** - view the flow of status of the factory run

- **Create New Template** - this contains all the components that were associated with the factory run environment. This new template will be visible in the Templates Catalogue.

![](./images/run-factory-new-environment.png)

> [!Note] The 'Create New Template' button will be available only if the factory run is successful. 
> 
If  you want to have the creation of the new template enabled even when the factory run fails go to General on the left side of the menu and select the 'Setup Factory' tab. Tick the 'Yes' value that corresponds to the key 'Do you want to allow creation of template from failed factories'.

![](./images/trigger-new-template.png)

# User Permissions Required
To be able to perform the above operations the below permissions need to be enabled for your user:

- MANAGE _ COMPONENTS
- MANAGE _ STREAMS
- MANAGE _ STAGES
- MANAGE _ PRODUCTS
- CREATE _ FACTORY
- UPDATE _ FACTORY
- DELETE _ FACTORY
- SCHEDULE _ FACTORY
- START - FACTORY - RUN
- ABORT - FACTORY - RUN
- VIEW - FACTORY - RUN - HISTORY




To have a better understanding of the user permissions, hover the cursor over the variables and a short description will pop up or click [here](http://documentation.temenos.cloud/home/techguides/user-permissions) to read more.
