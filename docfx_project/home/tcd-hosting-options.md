
## **TCD Hosting Option**
The Temenos Continuous Deployment platform has two distinct deployment domains as below:

 - 
 the “Platform Cloud” where the provisioning software runs
 - 
 the “Target Cloud” where the T24 environments are provisioneds

<br>There are a number of options:
<br>&nbsp; &nbsp;**1. All hosted on Temenos Cloud.** This is Azure.
<br>&nbsp; &nbsp;**2. The Platform component is hosted on Temenos Cloud.** The Target Cloud is a bank’s public cloud. The hybrid model.
<br>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;- target cloud is an Azure subscription owned by the bank  <br />
&nbsp; &nbsp;**3. All hosted on the bank’s cloud**
<br>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp; - all hosted on the bank’s AWS account.  <br />

<br>
The advantages of the various offerings:
<br>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;**a) Temenos hosted**  - this is a full-service SaaS offering with Support desk, monitoring, SLAs. The bank benefits from the regular rollout of new features. There are no technical pre-requisites to use the service. A service/hosting agreement would be required with Temenos Cloud.  
<br>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;**b) The Hybrid model** - Temenos hosts the platform, but the T24 (or other Temenos applications) are spun up in a bank-owned cloud environment. The bank still gets support desk and benefits from the regular rollout of new platform features. This option is more complex and has a number of technical pre-requisites to use the service. To provision on the bank’s Azure cloud, the bank would need to provide:
<br>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;I. a Subscription; 
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;II. a Service Principal; 
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;III. a Resource Group to which the Service Principal had full privileges;
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;IV. B2B collaboration with the bank’s AAD for the subscription. 
<br>We would require the subscription to be dedicated to sole use for TCD environments. A service agreement would be required with Temenos Cloud for the use of the platform component. The bank would be billed directly by their cloud provider for the infrastructure used in their cloud.
Provisioning to the bank’s AWS account is a bespoke configuration and we would need to work through the setup and pre-requisites with the bank.<br>
<br>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;**c) The bank runs it all on their public cloud (AWS or Azure).** There is no service element to this. The bank has full responsibility for installing and operating the platform 
<brbr><br><br>
**There are two primary service models depending on whether the client is utilising Temenos Cloud for both the service, and the Target Cloud; or using their own cloud environment for the Target Cloud.**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![](./images/tcd-hosting-models.png)