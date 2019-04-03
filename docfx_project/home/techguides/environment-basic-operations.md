# Environment Basic Operations

After logging to the portal and creating an environment, there are several actions (operations) that can be done via the available buttons: start, stop, rebuild, delete, scale up/ scale down, export and also boost and deploy the repository.

![buttons](./images/basic-operations-all.png)

<br>

![start](./images/button-start.png) **Starting** an environment:

- After creating an environment, the Start button is automatically disabled as the environment is running. It will be enabled if an environment is stopped and it will start all the instances specified in the Environment configuration.

<br>

![stop](./images/button-stop.png) **Stopping**  an environment:

- Stops all running instances of an Application in an Environment.

<br>

![rebuild](./images/button-rebuild.png) **Rebuilding** an environment:

- It recreates the resourses into the cloud and re-installs T24 and H2 db.
- This is used for example when modifying the application templates (like changing the T24 displayed name or addign a new application).

<br>

![delete](./images/button-delete.png) **Deleting** and environment:

- Stops all instances of an Application in the Environment, removes all resources including configuration repository.

<br>

![scale](./images/button-scale.png) **Scaling up and down** an environment:

- Increases, respectively decreases the running instances of the Application) – via the UI.

<br>

![export](./images/button-export.png) **Exporting** an environment and exporting the database:

- Allows to export and import an environment or a database through SFTP server.

<br>

![boost](./images/button-boost.png) **Boosting** 

- Used to apply the changes made to the environments' repository (you can modify the infra-templates, the playbooks or the roles).

<br>

![deploy](./images/button-deploy.png)**Deploying**

- To be used when deploying newly added plugins, endpoints, updates, web services, packages etc.

<br>

**Cloning** an environment:

-  Creates an identical environment by copying the Environment and configuration repository

<br>

> [!Note]
> <span style="color:RED">**IMPORTANT!**</span>
> 
> <span style="color:RED">As a good practice and in terms of reducing your costs, it is recommended that you don't keep an environment **unused** for more than 3 days (for internal clients), respectively for more than 7 days (for external clients). Otherwise, the environment will be deleted by the Extend team (with a previous mail notification).
> 
> Also to reduce costs, the environment can be put on **Stop**.</span>
