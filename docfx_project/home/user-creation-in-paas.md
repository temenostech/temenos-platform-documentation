
# Introduction #
This document can be used by technical staff who need to create Users on the Temenos Continuous Deployment Platform and associate to each user a ssh key. 

## How to create Users

The Administrator can navigate to the Users section on the portal, create more users and invite them to access and use the portal using the URL link. In this way the administrator is in control of who receives the URL link and which users can access the Organisation.

The users can access their organisation only, view their user profiles and perform various operations according to the set of user permissions set by the Organisation Administrator.

 Note that only the users with the 'Admin' permission can create more users. To manage/ see the users please refer to the below:

•	Login to your organisation portal using the link and the credentials provided.

![portal login](./images/user-login.png)


![](./images/users-tab.png)

1. Go to the menu on the left and then click Users tab, as below:

2. Click on the **Users** tab 

3. To order the users' list hover over the **Name** tab - the users will be listed in an alphabetical order

4. Click on the **Status** tab to see the status of each user (i.e. the user status can be **creating, editing, failed, deleting**)

5. Create a new user by clicking the **New user** button on the top-right corner. Fill in the username, email, password and the user role (the SSH Key can be added later on if needed).

6. Click **Create**

![](./images/create-user.png)

This will create a new user in your organisation. This new user will be automatically assigned to all GitLab Repositories from within all environments. If you have already a user created, you can click on the user and update the SSH key box with the one created above.


>**Important!**: It is the Organisation Admin's 
>responsibility to inform the new user about its credentials and set of permissions granted on the portal.


# Change Password
To change the password you need to follow the next steps:

1. Click on your user name (top-right)

2.  Click on **Profile**

 ![](./images/user-change-password2.png)

3. Click on **Change Password**

 ![](./images/user-change-password3.png)

4. Fill in the **Current Password**, **New Password** and **Confirm Password** and click **Confirm**
 
 ![](./images/user-change-password4.png)

 >Note: on your first login, you need to reset the password that was initially created by the Organisation Admin.

  ![](./images/user-change-password.png)
<br>
</br>

# Recover Password
## Ask the Organisation Admin to change your password 

If you lost your password, your Organisation Admin can change it from his/ her end. To do this, the Organiation Admin needs to:

1. Click on the **User** tab from the left menu and select the user

2. Click on **Change Password**

3. Fill in the **New Password** and **Confirm Password** fields, then click **Confirm**

  ![](./images/change-user-password-admin.png)
>Note: upon login with the password set by the organisation admin, you need to reset your password. 

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

 >Note: the  **Update SHH** button is enabled once the editing is started and the number of characters added in the field are over 200.

<br>
</br>
# User Roles Management 

By default, when your organisation is created, Temenos will provide you the link and access instructions to your designated organisation administrator (the first and only user with full rights on the platform).

![](./images/see-user-role.png)

1. Click on the **Roles** tab to see the available list of roles within your organisation

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
 
# How to use PuTTY SSH client for SSH key generation. #

If you need access to the source code repository you must provide the public SSH Keys on the user profile section to gain access. You can use any other SSH key generator client.

> [!Note]
> If you already have installed a SSH key generator client, you can skip this step.

•	Download the installer from [http://www.putty.org/](http://www.putty.org/ "http://www.putty.org/")


•	Run the installer and click **Next** on each screen, without changing anything in configurations. Click **Finish** once completed.




## How to create the SSH keys (pair public and private keys) ##



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





## How to add users on the portal with the SSH keys  ##

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



- Your username will be created in Gitlab server and public SSH key provided will be added to your account being accessible from all the environments created in your organisation.

- For further details or issues related to Gitlab SSH keys usage, or other operating systems (MAC, Linux), please consult this link:  [https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/](

<br>

 To see the details of a user please make sure to first select the user from the left-side users list:
![](./images/user-see-details.png)


# User Permissions Required
To be able to create a user the below permission needs to be enabled for your user:

- CREATE _ USER

To have a better understanding of the user permissions, hover the cursor over the variables and a short description will pop up or click [here](http://documentation.temenos.cloud/home/techguides/user-permissions) to read more.