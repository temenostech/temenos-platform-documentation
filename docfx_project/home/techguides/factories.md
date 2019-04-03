
# Factories #

Factories are the core Assemble components that define how, what and when to deploy, test and promote the various components used by an organization. 

A factory is an information bundle that holds the following critical information that is needed to run an assembly factory:

**- Name** -just to identify or tag a factory

**- Products**:

a. Principle Products – Principle products simply mean the list of components that are being tested for against a stable set of other pre-tested components.

b. Other products – Products that are pre-tested (by other factories) and are known to be stage.

**- Stages**:

a. From stage (Which stage to get the principle components from from) –Source stage (The stage from which pre-tested stable components can be picked up)

b. Source Stage – The stage from which the “Other Products” components are fetched. This stage represents a stable version of components that is pre-tested from the perspective of the current factory.

c. Target Stage - The stage to which components are promoted if the assembly successfully tests the list of components

**- Templates**:

a. Environment Template - holds the details of the template that is to be used to deploy the components selected by the factory

b. Test Template – specifies the template that is required to deploy a test environment that holds the testing framework and test scripts. This is needed to generalize the test tools as a template.

**- WebHooks**:

a. Success Webhook – This is just a simple callback mechanism that can be utilized by the owner of a factory to callback another API if the factory successfully runs.

b. Failure Webhook – Same as Success Webhooks. But are called when the factory fails.

## Validations ##

1. The list of selected products cannot contain components that are not understood by the selected Environment Template. 

    a. The list of components contained in the principle and other products needs to match a bare minimum of all mandatory components specified in the template.

    b. The list of components can possibly have more than one component of the same type if the template allows more than one count of the same type.

    c. The list of components cannot contain a component type that is unknown to the Template.

2. Webhooks – The webhooks need to be valid URLs and can only get called with GET method.

3. Templates – The selection of templates are restricted based on the type of the template and a selection list is already confined to allocated and valid templates.

4. Stages – No restriction. The factory can even choose to use the same Stage for all three stage values.
