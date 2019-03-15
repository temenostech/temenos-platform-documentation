# Stage API/UI – Feature Description #

A Stage is a logical name for a promotional stage. 

Every component/module developed by an organization needs to go through several steps to be declared ready for deployment to product. These steps are exactly what we call stages. 

Each stage has the following fields:

1.	Name : A simple name for the stage (Can only be set on creation time. Cannot be updated)

2.	Description : A simple description to be helpful to users.

3.	Enabled / Disabled Flag : A stage can be enabled or disabled at any time provided there are no Factories associated to it.

When a new stage is created, an isolated folder is created in the Artifactory Server to enable the binary/installable components to be uploaded. When the components work well with other components/modules, the component is promoted to other stages, as defined by factories. The promotion of the components across stages is conditional based on the status of tests that are done during a factory run. If the tests succeed, the components will be promoted to the next stage. 

