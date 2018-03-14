### Legal and Other Items

----------

##Dependencies for Using DevX
-	Internet connection with access to DevX site pages / ports (all users)
-	Web browser (all users)
-	Git client (for developers)
  Git (/ɡɪt/) is a version control system for tracking changes in computer files and coordinating work on those files among multiple    people.  A client program for Git is required to push artefacts into the configuration repository
  
-	SFTP client (for developers)
A secure ftp (SFTP) client is required to download exported log files and data from an environment
-	SSH key creation tools (for developers)
-	Design Studio to modify core banking (T24)
-	T24 licence – (TEMPLATES WILL ONLY BE MADE AVAILBLE FOR LICENSED PRODUCTS)

##Exclusions
-	Custom Templates (see ‘Definitions’) – Request for service.
-	Setup and Configuration of Continuous Integration / Continuous Deployment – automation tooling for building/deploying/testing software to environments.
-	Source Code Management system – a tool to store and manage source code.
-	Virtual Private Network (VPN) setup.  A VPN is a secure tunnel between disparate networks across public internet (e.g. between Temenos’ Azure networks and Client networks).
-	Design Studio – is the Temenos tooling used to develop changes for core banking (T24).

##Support and SLAs
-	Initial support mechanism: email temenoscloud@temenos.com 
-	Future state support mechanism: Temenos cloud ticketing system
-	SLAs: target 99% Uptime (can go down for maintenance, business hours)
-	Warranties: Other SLAs as per Temenos Cloud
-	Data retention: as defined in the Service Definition – data & environments can be deleted immediately by the user.  All client-related data & environments will be deleted by Temenos 60 days after the termination of the agreement.

##Definitions
-	Application – A Temenos product built to run in DevX (e.g. core banking)
-	Template – a definition of an Application which may be provisioned into DevX. Includes information such as server size, basic server setup, Application/version to be provisioned, and technology stack used to run the Application.
	Environment – one or more running instances of an Application, all associated resources, and configuration. Associated resources include the Configuration Repository and the Exports file storage allocation.
-	Organisation – the top level hierarchical unit to control access and groups of Environments
-	User – a unit that represents a person or system linked to an Organisation; whose properties and credentials are checked to access an Organisation
-	Subscription Limit - a number of environments that an Organisation is permitted to create

