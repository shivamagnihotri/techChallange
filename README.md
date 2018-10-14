---------------------------------------------   Tech Challenge Salesforce    --------------------------------

Intro:
The Challenge is good and inresting. Lightning framework implementation enhance the level of challenge. I solved this challenge as per my thinking and knowledge.

Requirements:

The following problems are being solved as described among three modules:

Problem 1 :
A Lightning component which have two sections.
First half section contains list of Account records.
In Second half we will show details of Account that is selected from First section.

Problem 2:
A Lightning component that will show list Account records and have following button/links on every records.
New Button at TOP: User can create a new Account record on click of this button.
Edit, Delete Links with Each record and on Click on Edit, A pop up should show and user can update Account record.
Another button which is Delete, By clicking on this button user can delete Account.

Problem 3:
A Lightning Component that will show a list Account records and have following buttons at the top for mass records functionality.
Update Account Source Button: A check box should be there in every record row and user can select multiple rows, and when click on this button
user can update Account Source picklist field for all selected Account. 
Delete button: Using this button user can delete all selected records with check box.


Solution Architecture
I tried with simple base components which is reusable, dynamic which makes this challange complete.

For every problem i have created a lightning app and a lightning component and if need then some more lightning components according to requirements.

Technology
I have used lightning components, lightning app
lightning data service tags.
Used standard Lightning tags like lightning:outputfield, recordform.
Apex Class for retrive account's records.

Implementation:
For Problem 1 i have implemented these things:
Lightning App: AccountsListAndDetail.app
Lightning component: AccountsList.cmp
Apex Controller: AccountsListAndDetailCtlr.apx

For Problem 2 i have implemented these things:
Lightning App: AccountListWithNewEditDeleteApp.app
Lightning component: AccountListwithNewEditDelete.cmp ,NewAccount.cmp, EditAccount.cmp, DeleteAccount.cmp
Apex Controller: AccountLIstWithNewEditDeleteCtlr

For Problem 3 i have implemented these things:
Lightning App: AccountMassEditDeleteApp.app
Lightning component: AccountMassEditDelete.cmp
Apex Controller: AccountMassEditDeleteCtlr
