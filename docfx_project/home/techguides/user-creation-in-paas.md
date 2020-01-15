
# Introduction #
This document can be used by technical staff who need to create Users on the Temenos Continuous Deployment Platform and associate to each user a ssh key. 

## **Users**

----------

The Administrator can navigate to the Users section on the portal, create more users and invite them to access and use the portal using the URL link. This way the administrator is in control of who receives the URL link and which users can access the Organisation.

The users can access their organisation only, view their user profiles and change their password. Should the users requires access to the source code repository they need to provide their public SSH Keys on the user profile section to gain access.


# Use PuTTY ssh client for ssh key generation. #

You can use any other ssh key generator client.

> [!Note]
> If you already have installed a ssh key generator client, you can skip this step.

•	Download the installer from [http://www.putty.org/](http://www.putty.org/ "http://www.putty.org/")

![putty download](./images/putty-download.png)

•	Run the installer and click **Next** on each screen, without changing anything in configurations. Click **Finish** once completed.

# Create SSH keys (pair public and private keys) #

•	Open PuTTYgen and click Generate button:

![putty keygen](./images/putty-keygen.png)

•	This creates a new ssh key by moving the mouse in the blank area(highlighted in red), as per bellow picture.

![generate ssh key](./images/putty-keygen-random.png)

•	After Puttygen finished key generation, you can save your public key/private key in any location from your local machine.

> [!Note]
> In order to have a valid ssh key that can be recognized by 
>  Infrastructure, do not use the Save public key button from Puttygen and just select the whole public key from the PuTTYgen screen and save it in your local machine.

![save public key](./images/putty-keygen-publickey.png)

•	From PuTTYgen screen, you must also save the private key. Press the Save private key button, choose Yes on the next prompt (save the key without a passphrase to protect it) and indicate a name and location for the private key.

![save private key](./images/putty-keygen-privatekey.png)

•	The public/private key location on your local machine should look like this:

![public/private keys location](./images/putty-keygen-keyslocation.png)

# Add users in portal with SSH key #

•	Login to your organisation portal using the link and the credentials provided.

![portal login](./images/user-login.png)

•	Go to the menu on the left and then click Users tab, as below:

![new user](./images/users-tab.png) 


The first screen that you will see is the one for the existing user (usually admin).

Click **New user** button on the top-right corner:

![new user](./images/user-new.png)

This will create a new user in your organisation. This new user will be automatically assigned to all GitLab Repositories from within all environments. If you have already a user created, you can click on the user and update the SSH key box with the one created above.

**Create a new user:**

> [!Note]
> All fields are mandatory!
> See further below how to generate the SSH key

![new user](./images/user-details.png)

•	Public SSH key needs to be pasted in SSH Key text box. Open Windows Explorer and locate your public key generated using PuTTY Key Generator. 

![paste key text](./images/putty-keygen-publicselect.png)

• Right click and open it with notepad. Select all and copy to clipboard.

![copy key](./images/copy-key.png)

•	Paste the copied text into the SSH Key text box and click Create user button.

- Your user is now available in the user list:

![user](./images/user-list.png)

- You have the option to edit or to delete it.

> [!Note]
> Once created, you **cannot** change the name and the email address, nor the user's password. You can only update (or add) the SSH key through edit button.



- Your username will be created in Gitlab server and public SSH key provided will be added to your account being accessible from all the environments created in your organisation.

- For further details or issues related to Gitlab SSH keys usage, or other operating systems (MAC, Linux), please consult this link:  [https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

# User Roles Management #

By default, when your organisation is created, Temenos will provide you the link and access instructions to your designated organisation administrator (the first and only user with full rights on the platform).
The administrator can create more users and navigate to the Roles section on the portal to assign various permissions to each user. To create a role, the admin will click on 'New Role' and fill in the blanks:

![user](./images/create-user-role.png)


The admin can select which permissions to set to each user.
![user](./images/create-user-role-permissions.png)


Once the role is created, the admin can assign it to a specific user:

- go to the 'Users' tab and select the user 
- choose from the drop-down list the user 
- click 'Edit' on the user
- choose from the drop-down list the role that needs to be assigned 

Please find below a set of recommended user roles for your organisation:

![user](./images/create-user-select-role.png)

## Administrator ##

Scope: the user has full overview over the organisation's capabilities and users (can create users and assign different roles)

Set permissions: select all permissions

## Developer ##

Scope: the user can create/ run environments/ factories etc. The Developer does not need the metadata or visibility on the users.

Set permissions (you can customize them at your convenience):  ABORT_FACTORY_RUN, ALLOW_CUSTOM_TEMPLATES, ALLOW_EXPORT_ENVIRONMENT, ASSIGN_ROLE, BOOST_ENVIRONMENT, CLONE_STREAM, CREATE_COMPONENT, CREATE_ENVIRONMENT, CREATE_FACTORY, CREATE_ORG_METADATA, CREATE_PRODUCT, CREATE_ROLE, CREATE_STAGE, CREATE_STREAM, CREATE_USER, CREATE_USER_METADATA, DELETE_COMPONENT, DELETE_ENVIRONMENT, DELETE_STAGE, DELETE_STREAM, DELETE_USER_METADATA, MANAGE_COMPONENTS, MANAGE_PRODUCTS, MANAGE_ROLES, MANAGE_STAGES, MANAGE_STREAMS, REDEPLOY_ENVIRONMENT, SCHEDULE_ENVIRONMENT, SCHEDULE_FACTORY, SCHEDULE_FACTORY, START_ALL_ENVIRONMENT, START_ENVIRONMENT, START_FACTORY_RUN, STOP_ALL_ENVIRONMENT, STOP_ENVIRONMENT, UPDATE_ENVIRONMENT, UPDATE_FACTORY, UPDATE_ORG_METADATA, UPDATE_PRODUCT, UPDATE_ROLE, UPDATE_STAGE, UPDATE_STREAM, UPDATE_USER, UPDATE_USER_METADATA, VIEW_FACTORY_RUN_HISTORY

## Reader ##

Scope: the user has permission to see all records but cannot do any changes.

Set permissions: MANAGE_STREAM, MANAGE_STAGES, MANAGE_PRODUCTS, MANAGE_FACTORIES, MANAGE_ENVIRONMENTS, MANAGE_USERS, MANAGE_ROLES, VIEW_FACTORY_RUN_HISTORY, MANAGE_ORG_METADATA, MANAGE_COMPONENTS

> [!Note]
Please note that by 'manage' the user can only view the streams, stages, products, factories, environments, users, roles, the factory run history, organisation metadata and components. A user with the 'reader' role cannot edit anything. 

All the roles can be customized to every user's needs.

Depending on the organization role, a user may/ may not have serveral permissions (eg. if the organisation does not have the assemble module, then the user will not be able to see the stages, the streams. The user will only see the environments, users and probably the metadata).


