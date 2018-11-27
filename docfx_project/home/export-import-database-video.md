<html>
 <body>
<iframe src="https://www.youtube.com/embed/pHBOjBuWyfY"
width="100%" height="400" frameborder="0" allowfullscreen></iframe>
 </body>
</html>

<br>

<span style="color:#005294">**Total video time**</span>: **18:13 minutes**
<br>
<span style="color:#005294">**Total demo time**</span>: **~ 40 minutes** (from which **~ 15 minutes** the creation of the environment)

<span style="color:#005294">**INFO**</span>:
<br>
 - Create <span style="color:#005294">**two environments**</span>.
 - Add a <span style="color:#005294">**user**</span> on the portal and attach to it the public <span style="color:#005294">**SSH key**</span>.
 - Login to T24 from "source" environment and <span style="color:#005294">**change a record**</span> in the database.
 - <span style="color:#005294">**Export**</span> the database of the source environment.
 - <span style="color:#005294">**Connect**</span> to SFTP server via WinSCP client using the user and the SFTP endpoint from the portal.
 - <span style="color:#005294">**Download**</span> the DB to the local machine.
 - <span style="color:#005294">**Clone**</span> the target environment.
 - <span style="color:#005294">**Push**</span> the database to the new (target) environment.
 - <span style="color:#005294">**Deploy**</span> the database to the target repository.
 - <span style="color:#005294">**Check**</span> the successful import of the database > Verify the changed record in T24.