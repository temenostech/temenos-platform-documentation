This page explains the steps needed to be followed in order to do the Java implementation for a Selenium Test Template based on the client's framework.

# Implementation 

The Java implementation using Selenium WebDriver automation is using 2 types of browsers:

- Chrome
- Firefox

The structure of the application will be displayed as below. The main class for the application is **EntryPoint.java**.

 ![](./images/selenium-test.png)

# Structural design of the application #

The application is using the Factory pattern having a DriverManager class which has 2 implementations for both Firefox and Driver browsers. These are defined in:

- ChromeDriverManger.java 

- FirefoxDriverManager.java

## A.	“global.properties” file
-	there are two **browser.type** options: Chrome and Firefox
-	**organization.id** represents the organization ID used to test the template
-	**report.path** represents the path where the report will be saved (HTML format with CSS)

 ![](./images/report-path.png) 

## B.	Automation-driver-executable
This folder contains all the drivers for the Selenium Webdriver:
![](./images/selenium-drivers.png)

- the automation-driver-executable folder contains:

 ![](./images/selenium-automation-driver-executable.png)

- the automation-driver-libraries folder contains the Java Selenium WebDriver libraries:

 ![](./images/selenium-automation-driver-libraries.png) 

## C.	Automation-screenshots 
In this folder will be stored all the screenshots:
 ![](./images/selenium-automation-screenshots.png)
 ![](./images/selenium-automation-screenshots2.png)

Following the completion of the execution a message will be displayed on the screen:
         ![](./images/selenium-message.png)

## D.	Reporting 
The reports will be based on the template below:
         ![](./images/selenium-automation-report.png)

## E.	Execution from command line 
Java –jar CLIENTAutomation.jar

Or with parameters

java -jar CLIENTAutomation.jar <font color='green'>**chrome**</font> <font color='red'>**e1efgs6bc7ul**</font>

<font color='blue'>**D:\\DevelopmentLast\\TestCLIENT\\TestCLIENT\\**</font>

where


- the green parameter is the browser [firefox | chrome]


- the red parameter represents the organization ID


- the blue parameter represents the folder which stores the report


# Packaging JAR file and running with params 
To the Jar file CLIENTAutomation a new automation-driver folder will be added as below:

![](./images/selenium-client-add-driver.png) 

After the automation-driver has been added, the package will be executed:

![](./images/selenium-execute.png) 