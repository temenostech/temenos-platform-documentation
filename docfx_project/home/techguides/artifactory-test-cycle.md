> [!Note]
> Note: Starting April 5th the TCD user guide will move on the [Temenos Customer Support Portal (TCSP)](https://tcsp.temenos.com/TCD/Modules/TemenosContinuousDeployment/Overview/Overview.htm). We recommend you to log in to the portal and check if your credentials are available. Raise a ticket at [CloudPlatformSupport@temenos.com](CloudPlatformSupport@temenos.com) if you encounter any issues.

# Artifactory Test Cycle

Temenos uses JFrog Artifactory that serves as a binary repository manager and which is designed to provide an end to end automated solution for tracking artifacts from development to production.

See below an example of how the Artifactory folders look like after configuring the streams, stages, components, products and the factory. 

![](./images/artifactory-test-structure.png)

After <a href="./factories.md#set-up-create-a-factory" target="blank">**creating a Factory**</a> and before running it, make sure you have uploaded:

- all required binaries for the principle (mandatory) components into the **source** stage (in this case - default_stage).

- the testcases.zip file into the **target** stage (in this case - primary_stage_demo). *The folder name is TestCases.*

See <a href="./components-products.md#how-to-set-up-delete-components" target="blank">**here**</a> how to upload the components' binaries, respectively <a href="./stage-testcases.md" target="blank">**here**</a> for the test cases.






