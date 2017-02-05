# Requirements
Our customer has requested a proof-of-concept to allow employees to record safety discussions they have had with their colleagues, through a reactive web application. 

They have identified desktop and tablets as the target platforms. 

The app will let employees record that a safety discussion occurred and to enter the following information related to it: 

- The Observer (user entering the safety discussion) 
- Date of discussion 
- Location of discussion 
- Colleague the discussion was with 
- Subject of discussion 
- Outcomes 

It should also allow the employee to view a list of previous discussions they have recorded. 

# Assumptions
- SharePoint Online not on-premises

# Design Decisions
Reactive considerations addressed as follows :
- Responsive
    - Provider-hosted app for maximum control over HTML rendered - don't want SP's UI in the way of being as reactive as possible.
    - First load will still be slow as it authenticates to SP.
    - Office Fabric UI chosen (in conjunction with Bootstrap) as it is responsive (in terms of mobile vs tablet vs desktop layouts), provides an Office-themed UI, and provides various useful components.
    - Client-heavy solution to minimise postbacks and maximise reactiveness - allows messages / spinners etc while data is fetched / written.
    - React JS chosen as it is quick to load and is the core way of using Fabric UI.
    - Webpack for bundling and minifying JS and reducing JS load time.
- Message-driven
  - Not fully message-driven for this application's simple requirements. 
  - Event-driven, but Redux used to dispatch actions.
- Resilient
  - Failure of API calls is built into Redux state so the app can degrade gracefully.
  - Back-pressue from server back to client under heavy load not built into proof of concept.
- Elastic
  - Elastic server-side components not addressed in this proof of concept.

Being a proof of concept, several simplifications :
  - No unit tests. In reality there would be unit tests around React components, service layer etc.
  - Discussion location is single line of text. Beyond proof of concept would use managed metadata.
  - The app writes to a list in the app web. Real app would create list in host web for easier access to data, rather than having to work out the URL of the list in the app web and navigating directly to it.

Other decisions :
- Web app not a Windows Universal, iPad iOS app etc.
- JS generated from Typescript for maximum maintainability and limiting bugs.
- SharePoint add-in rather than general Office 365 add-in as it is easy to provision required list.



# Prerequisites
## General
- Office 365 account
- SharePoint Online Team Site to deploy to
- Node JS

## Globally-Installed NPM Packages
- gulp

## Visual Studio
### Required Add-Ins
- Office Developer Tools - https://www.visualstudio.com/vs/office-tools/
- Task Runner Explorer - https://marketplace.visualstudio.com/items?itemName=MadsKristensen.TaskRunnerExplorer

### Node
Some Node modules can have an issue with the possibly older version of Node which Visual Studio uses by default. To get past this, in Visual Studio go to *Tools > Options > Projects and Solutions > External Web Tools* and re-order so that $(PATH) comes first. This will mean it will use the installed version of Node rather than what ships with Visual Studio (assuming you have Node in your path!)

# Building the Solution
1. Open a Node command prompt at\SafetyDiscussions\SafetyDiscussionsWeb.
2. Run `npm install`.
3. 

