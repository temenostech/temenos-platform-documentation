# What happens when COB is triggered during a Factory Run

This user guide explains what happens when COB is triggered during a factory run. COB can be run in company wise (e.g.: COB-GB0010001), group wise (e.g.: COB-1), or system wide (COB) in a Temenos Continuous Deployment environment as a part of test workflow (see how to manage workflows [here](http://documentation.temenos.cloud/home/techguides/manage-workflows.html)). 

To run COB for multiple groups or companies at the same time when setting up [the factory](http://documentation.temenos.cloud/home/techguides/automated-factories.html), provide the TSA.SERVICE record ID separated by dots  (e.g. COB-1.COB-2) in the TSA.SERVICE ID in the portal.

>Note: the maximum sessions configured in the TAFJEE  and standalone.xml is 20 by default. Hence if you run COB with 20 agents, the environment will become unresponsive.

All the information related to each of the automated steps are written into a log in the path **$T24_HOME/Regression/RegressionLog**. Please refer this file along with the **$TAFJ_HOME/log_T24/como** folder to monitor the progress of the COB.

In case of a crash/ error, the test factory will give a 12 hour window for the end user to correct (if possible) and re-trigger the COB manually from the TAFJ servlet. If left unattended  the COB hangs the build will be terminated after 12 hours.

Below you will see what happens behind the scenes when a COB is triggered using Temenos Continuous Deployment:

- There are some custom T24 routines written to prepare, excute and monitor the COB. As a first step, these routines are compiled in the environment.

- The **TSM and any other running services are stopped in the environment TSA.STATUS** for COB and TSM and BATCH.STATUS for TSM is cleared. This is done by the routine AR.StopService.

- Once the services are stopped, **the appserver and the database is stopped and a backup of the database is taken**. This will be available in the machine in the path and file name with date time as shown in the example $T24_HOME../TAFJDB-1501173540.zip. The T24_HOME corresponds to the UD path, the number in the backup fil ename corresponds to the Ansible epoch time, when the backup was taken. Once the environment is up after the COB, this file can be accessed from the SFTP location for that environment. 

- The **DB and appserver are restarted**, and the routine AR.FixEODerrors is ran in the environment to fix the EB.EOD.ERRORS (if any).

- **A routine AR.DateExtract is run to extract Today’s date and company details for each of the TSA Service ID’s provided in the TSA.SERVICE parameter** in the test configuration. This will be extracted and stored in a following file $T24_HOME/DatesOutput/TODAYsDATE.txt. The output of this routine is used by the Temenos Continuous Deployment scripts to trigger and monitor the COB.

- The **TSA.SERVICES** provided in the TSA.SERVICE parameter in the test configuration is started.  This is done by a routine AR.StartService

- Once COB is started, the monitoring job monitors the COB to see if it gets completed. The routine AR.CobcheckProcess. The following statuses are reported in the Events log in case of problem. CRASHED, STOPPED or COMPLETED. If more than one TSA.SERVICE is triggered, the COB step will be completed only if all the services are completed successfully. 

Click **<a href="./../zip/RegressionLog-TODAYsDATE.zip">HERE</a>** the RegressionLog  and TODAYsDATE.txt samples. 