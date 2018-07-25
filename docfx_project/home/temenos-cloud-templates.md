<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" language="javascript" src="./scripts/getTemplates.js"></script>
<script type="text/javascript" language="javascript" src="./scripts/functionToTriggerOnSelect.js"></script>
## **How Temenos Cloud Templates Work?**

The Temenos PaaS platform has the capability to provision environments in a variety of different configurations. This capability is driven through the concept of 'Templates' - a simplified view of the constituent elements which make up a sandbox configuration, including:

- Server Size
- Basic server setup and technology stack
- T24 version to deploy

Templates are used by the provisioning service to create Sandbox environments with the desired configuration, as shown below:

![](./images/sandbox-templates.png)

By default, new Templates are added with each monthly release of T24. These Templates follow a standard pattern, configuration and technology stack, but with the most recent releases of T24 being deployed.

However, the Temenos Development platform team also offer the ability to create customised Templates for clients. For more information, please contact temenoscloud@temenos.com.

Furthermore, please find below the current templates catalogue. The standard configuration of each template can be explored by selecting the required template from the list.
<div class="form-group"><select class="form-control" id="templateSelectionId" onchange="functionToTriggerOnSelect(this.value)"><option value="" disabled selected>Select a template</option></select></div>
<div id="appendTemplate"></div>
