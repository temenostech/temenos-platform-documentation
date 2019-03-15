# Metadata API/UI – Feature Description #

A metadata is a key-value pair that represent an organization specific information (For example “Artifactoty_URL” / “http:xxxxxxxxxxxx/xxxx/xxx”) to help with the functions and workflows of the Extend and Assemble modules. 

An organization can have any number of such key-value pairs to enable operations. 

Every Key (from the Key-Value pair) within an organization needs to be unique and cannot be duplicated. The system will throw appropriate errors when such duplications are attempted.

Each metadata, apart from the “Key-Value” information, also has the below fields:

1.	A Unique GUID (Globally Unique ID) – Used for internal references
2.	Key – The key that the organization requires
3.	Value – The value for the key
4.	KeyEditable – Specifies if the key of the record is editable. This is used by the system and prevents users from editing the key itself. But allows edit of the value if “editable” is set to true.
5.	Editable – Specifies if the key-value pair is editable. Keys with editable false are always created by the internal system and users cannot edit such records
6.	Deletable – Specifies if a record can be deleted by a user. Similar to Editable, such keys are always system generated and cannot be deleted by a user.
7.	Encrypted – Values for such keys are stored in an encrypted form in the DB to protect sensitive data.

The UI featues will not allow modification of the following fields:
1.	Editable
2.	KeyEditable
3.	Deletable
4.	Encrypted
