
# Components & Products #


## Component ##

Components are individually deployable units that are understood by TCP (Temenos Cloud Platform) based on the component type that each component refers to. 

Each component is associated to a component type to help TCP deploy the component. 

The component Type field in the component data is the key to help the TCP Controllers deploy the right components in the right way. 
An organization can define as many components as needed but should have all mandatory components defined in the templates that are assigned to the organization.

Each component has the following fields:

1. Component Type

1. Name

1. Description

1. Display Name

### Component Type ###

The TCP uses a convention/protocol to deploy all parts required to run a full-fledged instance of T24 (Or any other product supported by a template). Such parts to constitute a complete system are called components. 

The T24 installation may have the following components (No exhaustive or inclusive):

- T24-Jars
- T24-ud
- Helptext
- Tafj-installer Etc.

Each item in this list is called a component type. 

The names of these parts / Component Types are fixed and are not user editable. This is managed internally by the TCP admin/development group and can only be changed or modified by this group. 

Each component type represents a deployable unit and has an ansible script associated to it. 

These components have a structure associated and work in a standardized manner across different deployment stacks (OS, App server variations, DB variations etc).


## Products ##

A product is a logical grouping of several components. This is just to make it easy for users to select a list of components to deploy instead of selecting each component in a sequence. 

A product has the following fields:
- Name
- Description
- List of constituent components.

Ultimately, a product is used in a factory and will be used eventually to deploy the required components.

