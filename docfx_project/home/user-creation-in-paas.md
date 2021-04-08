> [!Note]
>  With the 202103 release, the TCD user guide will move to the [Temenos Customer Support Portal (TCSP)](https://tcsp.temenos.com/TCD/Modules/TemenosContinuousDeployment/Overview/Overview.htm). We recommend you to log in to TCSP and check if your credentials are available. Raise a ticket at [CloudPlatformSupport@temenos.com](CloudPlatformSupport@temenos.com) if you encounter any issues.


# Introduction #
This document can be used by technical staff who need to create Users on the Temenos Continuous Deployment Platform and associate to each user a ssh key. 

## How to create Users

The Administrator can navigate to the Users section on the portal, create more users and invite them to access and use the portal using the URL link. In this way the administrator is in control of who receives the URL link and which users can access the Organisation.

 If you belong to more than one organisations then a pop-up appears after entering your username and password. Select the organisation you want to access. 

![portal login](./images/user-login.png)

Starting from 202102, user management has been improved so that you can access multiple Organisations from a single user account. To use this feature, you should keep the account with your correct company email address and ask your Organisation Admin to assign access to all the necessary Organisations. You can then delete the other unnecessary user accounts, likely setup with spoof email addresses.


> [!Note]
> Always make sure you use a valid email address (i.e. org admins can receive emails from the Temenos Continuous Deployment team about templates). By using fake emails you won’t get these notifications that can impact you/your organization’s work on the platform.

Once logged in to your desired organization you can copy the org ID and name.

![](./images/organisation-details.png)

Once logged in you can switch the organization:

- Click on the  arrows ![](./images/organisation-arrows.png) next to the organization arrows. A notification appears, similar to the one above which enables you to select the organization you want to access.



 Note that only the users with the 'Admin' permission can create more users. To manage/ see the users please refer to the below.

1. Go to the menu on the left and then click Users tab.

2. To order the users' list hover over the Name tab - the users will be listed in an alphabetical order.
Click on the Status tab to see the status of each user (i.e. the user status can be creating, editing, failed, deleting).

3. Create a new user by clicking the New user button on the top-right corner. Enter a email address.  It is important to add a valid email as you might receive communications on it. 

![](./images/create-user.png)

4. If the email exists in the platform a notification pop-us up which asks you to confirm whether the username associated to that email address should be added to your organisation.



5. Enter a *user name*.

6. Define the user's *password*, add the *SSH Key* (optional) and assign a *user role* to it.

7. Click **Create**. 


![](./images/create-user-2.png)

This will create a new user in your organization. This new user will be automatically assigned to all GitLab Repositories from within all environments. If you have already a user created, you can click on the user and update the SSH key box with the one created above.


>**Important!**: It is the Organization Admin's 
>responsibility to inform the new user about its credentials and set of permissions granted on the portal.

# Enable tooltips

As an organization admin you can enable the tool tips in the portal that show what are the required permissions for the actions on hovering the mouse on the menus and buttons.

![](./images/show-permissions.png)
 
# Change Password
To change the password you need to follow the next steps:

1. Click on your user name (top-right)

2.  Click on **Profile**

 ![](./images/user-change-password2.png)

3. Click on **Change Password**

 ![](./images/user-change-password3.png)

4. Fill in the **Current Password**, **New Password** and **Confirm Password** and click **Confirm**
 
 ![](./images/user-change-password4.png)

 >Note: on your first login, you need to reset the password that was initially created by the Organization Admin.

  ![](./images/user-change-password.png)
<br>
</br>

# Recover Password
## Ask the Organization Admin to change your password 

If you lost your password, your Organization Admin can change it from his/ her end. To do this, the Organization Admin needs to:

1. Click on the **User** tab from the left menu and select the user

2. Click on **Change Password**

3. Fill in the **New Password** and **Confirm Password** fields, then click **Confirm**

  ![](./images/change-user-password-admin.png)
>Note: upon login with the password set by the organization admin, you need to reset your password. 

<br>
</br>

## Raise a support ticket 
If you have forgotten or lost your password, you can recover it by contacting the below:

- If your Org is on a PROD platform contact us at CloudPlatformSupport@temenos.com 

-  If your Org is on a EU or TSS platform contact the Global Cloud Platform Support team (gcp@temenos.com) 
<br>
</br>

# Update the SSH Key
To Update the SSH Key, follow the instructions below:

1. Click on your **user name** (top-right) and then on **Profile**

2. Click  **Edit SSH** 

  ![](./images/user-edit-ssh.png)

3. Do the necessary changes and click on **Update SSH** / if no changes are required click **Cancel**

    ![](./images/update-ssh-key.png)
> [!Note]
> The  **Update SHH** button is enabled once the editing is started and the number of characters added in the field are over 200.


<br>
</br>
# User Roles Management 

By default, when your organization is created, Temenos will provide you the link and access instructions to your designated organization administrator (the first and only user with full rights on the platform).

![](./images/see-user-role.png)

1. Click on the **Roles** tab to see the available list of roles within your organization

2. Hover over the **Name** tab to display the alphabetical order of the available roles

3. Select the number of items you'd like to have listed on the page (this is applicable for the users' tab as well)

4. The administrator can create more users and navigate to the Roles section on the portal to assign various permissions to each user. To create a role, click on **New Role** on top-right and fill in the blanks:

![](./images/create-user-role.png)


The admin can select which permissions to set to each user.
![user](./images/create-user-role-permissions.png)


Once the role is created, the admin can assign it to a specific user:

- go to the **Users** tab and select the user 
- choose from the drop-down list the user 
- click **Edit** on the user
- choose from the drop-down list the role that needs to be assigned 

To understand what which of the permission does, hover the cursor over the variables and a short description will pop up or click **[here](http://documentation.temenos.cloud/home/techguides/user-permissions)** to get an overview of the permissions.

For security reasons, if you are inactive for more than 5 minutes on the Temenos Continuous Deployment Platform a dialog box pop up prompts on the screen in the last minute of your inactive session which asks to choose whether you want to extend the session or logout.

![](./images/idler-session-timeout.png)

- By clicking **Extend** your session will still be active

- If you opt to **Logout** or don’t take any action on the pop-up your session will expire. Note that the environment creation, factory runs or other organization operations will still be running. 

The session is automatically extended when the you click on the **Overview** or **Events** tabs in the environments details page.
 <br>
</br>

# How to generate SSH key for your user#

If you need access to the source code repository you must provide the public SSH Keys on the user profile section to gain access. You can use any other SSH key generator client.

> [!Note]
> If you already have installed a SSH key generator client, you can skip this step.

•	Download the installer from [http://www.putty.org/](http://www.putty.org/ "http://www.putty.org/")


•	Run the installer and click **Next** on each screen, without changing anything in configurations. Click **Finish** once completed.




### How to create the SSH keys (pair public and private keys) ###



•	Open PuTTYgen and click Generate button:

![putty keygen](./images/putty-keygen.png)

•	This creates a new SSH key by moving the mouse in the blank area (highlighted in red), as per bellow picture.

![generate ssh key](./images/putty-keygen-random.png)

•	After PuTTYgen has finished the key generation, you can save your public key/private key in any location from your local machine.

> [!Note]
> In order to have a valid SSH key that can be recognized by Infrastructure, do not use the Save public key button from PuTTygen and just select the whole public key from the PuTTYgen screen and save it in your local machine.

![save public key](./images/putty-keygen-publickey.png)

•	From the PuTTYgen screen you must also save the private key. Press the Save private key button, choose 'Yes' on the next prompt (save the key without a passphrase to protect it) and indicate a name and location for the private key.

![save private key](./images/putty-keygen-privatekey.png)

•	The public/private key location on your local machine should look like this:

![public/private keys location](./images/putty-keygen-keyslocation.png)
<br>
</br>

### How to add users on the portal with the SSH keys ###

> [!Note]
> All fields are mandatory!
> See further below how to generate the SSH key

•	Public SSH key needs to be pasted in SSH Key text box. Open Windows Explorer and locate your public key generated using PuTTY Key Generator. 

![paste key text](./images/putty-keygen-publicselect.png)

• Right click and open it with notepad. Select all and copy to clipboard.

![copy key](./images/copy-key.png)

•	Paste the copied text into the SSH Key text box and click Create user button.

- Your user is now available in the user list.

- You have the option to edit or to delete it.

> [!Note]
> Once created, you **cannot** change the name and the email address, nor the user's password. You can only update (or add) the SSH key through edit button.



- Your username will be created in Gitlab server and public SSH key provided will be added to your account being accessible from all the environments created in your organization.

- For further details or issues related to Gitlab SSH keys usage, or other operating systems (MAC, Linux), please consult this link:  [https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/](

<br>

 To see the details of a user please make sure to first select the user from the left-side users list:
![](./images/user-see-details.png)


# User Permissions Required
To be able to create a user the below permission needs to be enabled for your user:

- CREATE _ USER

To have a better understanding of the user permissions, hover the cursor over the variables and a short description will pop up or click [here](http://documentation.temenos.cloud/home/techguides/user-permissions) to read more.