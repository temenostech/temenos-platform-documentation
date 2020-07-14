# Selenium Template Implementation 

> [!Note] The below instructions may be updated shortly.


This page provides information about the Selenium Template, the pre-requisites needed to test the template, as well as an example of the framework structure and the manifest file.

## Implementation 
The Selenium Template will provision the following:

- Windows 2016 VM with the below software/packages pre-installed:

    - Open JAVA / JDK  1.8

    - the latest version of Google Chrome

    - the latest version of Google Chrome driver (which will be used by Selenium) - this will be present in F:/TCD/WebDriver folder

    - the latest version of Geckodriver (which will be used by Selenium) - this will be present in F:/TCD/WebDriver folder
    
<br>
</br>

The test script component that can be used by this template must be a .zip within a .zip file (see screenshot below) with the following folders:

![](./images/components-test-script.png)

- **Test suite 1** (this could be any name - it is assumed this as a suite of tests that needs to be executed)

    - 1 or multiple .jar files:

        - these files contain the Selenium test cases to be executed

        - the framework should copy all the test results to F:/TCD/TestResults folder

            - Temenos Continuous Deployment Platform will move the results in this folder to a centralized storage account and provide a download facility from the Temenos Continuous Deployment Platform

        - the framework must create a manifest file as well (the sample structure will be present in the documentation portal). The same must be uploaded to F:/TCD/TestResults folder



    - a folder named "Lib"
   
        - all the libraries that are needed by the test cases must be kept here. This includes the Selenium library, its extension and its dependencies.


    - properties file with at least the following  properties  (“sys.t24.browser.url”, “sys.test.results.folder", “sys.web.driver.folder”, “sys.t24.login.username1”,  “sys.t24.login.password1”, “sys.t24.login.username2”, “sys.t24.login.password2”) 

        - while the test VM is provisioned, Temenos Continuous Deployment Platform will alter these values based on the IP and Port of the T24 VM

        - it will change the value of “sys.test.results.folder“ to “F://TCD//TestResults”

        - it will change the value of “sys.web.driver.folder“ to “F://TCD//WebDriver”

        - it is assumed that the user name and password will be known by the clients writing test cases and the same will be present in the golden copy

        - this property file can have other properties needed by the jar files, but the Temenos Continuous Deployment Platform will not alter these values at the run time




    - a text file named “CommandsToExecute.txt”

        - the Temenos Continuous Deployment Platform will execute all the commands listed here

        -  the Temenos Continuous Deployment Platform will validate whether all the commands are  “Java” commands before executing

        - any other commands present here, will result in termination of Factory run saying deployment failure with details mentioning why it failed



- **Test suite 2**

    - follows the same structure as above. These will be executed in a separate test client if test parallelisation is enabled. Otherwise, these will be executed in the same test client once the first test suite is complete.

- …

- **Test suite n**
<br>
</br>

##  Framework structure example

The below shows the test framework folder structure and general expectations:

![](./images/selenium-automation-1.png)

<br>
</br>

### **Lib Folder**

The lib folder contains the libraries used by the Selenium framework. We expect all the library files to be present in the same folder and the relative path should be handled in the test framework.

![](./images/selenium-automation-2.png)

<br>
</br>

### **.properties file** 

The properties file holds the configurable parameters used by the Selenium framework. Some of the parameters have static values. Thus, the Temenos Continuous Deployment Platform expects them to be present in the properties file.

For instance, sys.t24.IP=http://127.0.0.1:9080/BrowserWeb value is replaced dynamically at the run time. The same applies to all parameters highlighted in the RedBox below.

> [!Note] T24 browser can use any FQDN and Port. However, the endpoint should be reachable by the test client VM in which the test cases will be executed.

>Also if the test framework wants to support multiple T24 endpoints then it must be pre-configured same as sys.t24.browser.url.

![](./images/selenium-automation-3.png)

<br>
</br>

### **TestCase.jar**

We expect the test cases to be compiled as an executable .jar file. 

Note: The Selenium_Automation.zip can have multiple *.jar files. 

![](./images/selenium-automation-4.png)

<br>
</br>

### **CommandsToExecute.txt**

This file contains the list of commands that the Temenos Continuous Deployment Platform will execute in sequence. We expect the command to start with “java” as anything other than the java command will be considered deployment failure.

In case the Test script has more jar files then the execution of the files can be handled in the CommandsToExecute file. Nonetheless, please remember that Temenos will validate the command and execute it only if it starts with “java” so assuming any other pre-requisites and environment variable will be passed as a runtime parameter.

![](./images/selenium-automation-5.png)

## Manifest.xml ##
The Manifest contains information regarding the test run, i.e. the total number of cases, success count, failed count etc. The Temenos Continuous Deployment Platform will use this information to populate the dashboard. Below you will find an example format.
 
 <span style="color:red">From the below structure, the Temenos Continuous Deployment Platform needs to mandate the following information in order to populate in the dashboard:</span>

    <passedTests>11</passedTests>
    <failedTests>3</failedTests>
    <totalTests>14</totalTests>
    <Name>Temenos Automation Testing Framework</Name>
    <toolVersion>1.2</toolVersion>
    <startDate>2020.04.03 09:34:34</startDate>
    <duration>112.94700</duration>
    <result>FAIL</result>
    <hostName></hostName>
</br>
The test framework should generate the manifest.xml file with the above details. The below table describes the manifest tags and its purposes.


| Tag       | Description                                                                            |
|-------------|----------------------------------------------------------------------------------------|
| passedTests | It denotes the prorated number of passed test cases in the current run.                |
| failedTests | Number of failed test cases in the current run.                                         |
| totalTests  | The overall test cases count in the respective run.                                     |
| result      | The overall test result. The value should be “FAIL“ even if there is a single failure. |

**An example of the manifest format:**

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!-- configured only by authorised user-->
    <Manifest>
    <Report>
    <ScenarioName>Temenos Testing</ScenarioName>
    <TestCaseName>get <https://t24URL/BrowserWeb</TestCaseName>>
    <ExpectedResult></ExpectedResult>
    <ReportStatus>PASS</ReportStatus>
    </Report>
    <Report>
    <ScenarioName>Temenos Testing</ScenarioName>
    <TestCaseName>setText (id signOnName *****)</TestCaseName>
    <ExpectedResult></ExpectedResult>
    <ReportStatus>PASS</ReportStatus>
    </Report>
    <Report>
    <ScenarioName>Temenos Testing</ScenarioName>
    <TestCaseName>sleep (sec)</TestCaseName>
    <ExpectedResult></ExpectedResult>
    <ReportStatus>PASS</ReportStatus>
    </Report>
    <Report>
    <ScenarioName>Temenos Testing</ScenarioName>
    <TestCaseName>setText (id password )</TestCaseName>
    <ExpectedResult></ExpectedResult>
    <ReportStatus>PASS</ReportStatus>
    </Report>
    <Report>
    <ScenarioName>Temenos Testing</ScenarioName>
    <TestCaseName>sleep (sec)</TestCaseName>
    <ExpectedResult></ExpectedResult>
    <ReportStatus>PASS</ReportStatus>
    </Report>
    <Report>
    <ScenarioName>Temenos Testing</ScenarioName>
    <TestCaseName>sleep (sec)</TestCaseName>
    <ExpectedResult></ExpectedResult>
    <ReportStatus>PASS</ReportStatus>
    </Report>
    <Report>
    <ScenarioName>Temenos Testing</ScenarioName>
    <TestCaseName>sleep (sec)</TestCaseName>
    <ExpectedResult></ExpectedResult>
    <ReportStatus>PASS</ReportStatus>
    </Report>
    <Report>
    <ScenarioName>Temenos Testing</ScenarioName>
    <TestCaseName>sleep (sec)</TestCaseName>
    <ExpectedResult></ExpectedResult>
    <ReportStatus>PASS</ReportStatus>
    </Report>
    <Report>
    <ScenarioName>Temenos Testing</ScenarioName>
    <TestCaseName>switchToFrame()</TestCaseName>
    <ExpectedResult></ExpectedResult>
    <ReportStatus>FAIL</ReportStatus>
    </Report>
    <Report>
    <ScenarioName>Temenos Testing</ScenarioName>
    <TestCaseName>setText (id commandValue CUSTOMER I F3)</TestCaseName>
    <ExpectedResult></ExpectedResult>
    <ReportStatus>FAIL</ReportStatus>
    </Report>
    <Report>
    <ScenarioName>Temenos Testing</ScenarioName>
    <TestCaseName>sleep (sec)</TestCaseName>
    <ExpectedResult></ExpectedResult>
    <ReportStatus>PASS</ReportStatus>
    </Report>
    <Report>
    <ScenarioName>Temenos Testing</ScenarioName>
    <TestCaseName>sleep (sec)</TestCaseName>
    <ExpectedResult></ExpectedResult>
    <ReportStatus>FAIL</ReportStatus>
    </Report>
    <Report>
    <ScenarioName>Temenos Testing</ScenarioName>
    <TestCaseName>sleep (sec)</TestCaseName>
    <ExpectedResult></ExpectedResult>
    <ReportStatus>PASS</ReportStatus>
    </Report>
    <Report>
    <ScenarioName>Temenos Testing</ScenarioName>
    <TestCaseName>sleep (sec)</TestCaseName>
    <ExpectedResult></ExpectedResult>
    <ReportStatus>PASS</ReportStatus>
    <ReportImagePath>F:\TCD\TestResults\automation-screenshots\screenshot4955634319564025885.png</ReportImagePath>
    </Report>
    <passedTests>11</passedTests>
    <failedTests>3</failedTests>
    <totalTests>14</totalTests>
    <Name>Temenos Automation Testing Framework</Name>
    <toolVersion>1.2</toolVersion>
    <startDate>2020.04.03 09:34:34</startDate>
    <duration>112.94700</duration>
    <result>FAIL</result>
    <hostName></hostName>
    </Manifest>

Click  **<a href="./../zip/TestCases.zip">HERE</a>**  to download the sample of the Selenium Test framework, which is capable of running sample UI based tests.


Click **<a href="./../zip/sample-selenium-source-code.zip">HERE</a>**  to download the Selenium source code. 

 
