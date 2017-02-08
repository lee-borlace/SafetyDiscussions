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
- Outcome and location are text fields
- ES6-compatible browser e.g. latest Chrome / IE / Firefox
- Observer is not explicitly recorded, it's just the Created By field in SharePoint.

# Design Decisions
Reactive considerations addressed as follows :
- Responsive
    - Provider-hosted app for maximum control over HTML rendered - don't want SP's UI in the way of being as reactive as possible.
    - Office Fabric UI chosen (in conjunction with Bootstrap) as it is responsive (in terms of mobile vs tablet vs desktop layouts), provides an Office-themed UI, and provides various useful components.
    - Client-heavy solution to minimise postbacks and maximise reactiveness - allows messages / spinners etc while data is fetched / written.
    - React JS chosen as it is quick to load and is the core way of using Fabric UI.
    - Webpack for bundling and minifying JS and reducing JS load time.
- Message-driven
  - Not fully message-driven for this application's simple requirements. Would use Redux to manage state and actions when moving away from PoC.
- Resilient
  - Back-pressue from server back to client under heavy load not built into proof of concept.
- Elastic
  - Elastic server-side components not addressed in this proof of concept.

Being a proof of concept, several simplifications :
  - Haven't implemented clicking an existing item to view it, but would re-use Discussion.tsx in display mode for that. When loading it would read the full data from SP, showing a spinner while it does so.
  - React components directly manage their own state. A real application would use Redux to manage state in response to actions.
  - No unit / integration / end-to-end tests. In reality there would be unit tests around React components, service layer etc.
  - Discussion location is single line of text. Beyond proof of concept would use managed metadata.
  - The app writes to a list in the app web. Real app would create list in host web for easier access to data, rather than having to work out the URL of the list in the app web and navigating directly to it.
  - Hard-coded services in Typescript would be mockable / injectible interfaces in a real product.
  - Skipped a lot of code comments that would usually be present.
  - Would usually use Unity for dependency injection in MVC but have hard-coded for PoC.
  - Controller to read / write to SP would usually go via business layers etc rather than direct SP access.
  - No JS polyfills used

Other decisions :
- Web app not a Windows Universal, iPad iOS app etc.
- JS generated from Typescript for maximum maintainability and limiting bugs.
- SharePoint add-in rather than general Office 365 add-in as it is easy to provision required list for PoC.



# Prerequisites
## General
- Office 365 user account with access to SharePoint Online
- SharePoint Online Team Site to deploy to
- Node JS

## Globally-Installed NPM Packages
- gulp
- node-sass
- gulp-sass

## Visual Studio
### Required Add-Ins
- Office Developer Tools - https://www.visualstudio.com/vs/office-tools/
- Task Runner Explorer - https://marketplace.visualstudio.com/items?itemName=MadsKristensen.TaskRunnerExplorer

### Node
Some Node modules can have an issue with the possibly older version of Node which Visual Studio uses by default. To get past this, in Visual Studio go to *Tools > Options > Projects and Solutions > External Web Tools* and re-order so that $(PATH) comes first. This will mean it will use the installed version of Node rather than what ships with Visual Studio (assuming you have Node in your path!)

# Known Issues
- Fabric UI DatePicker appears to have several bugs which I've not searched for workarounds for yet.
  - Doesn't let you disable it, so we hide it where we would usually disable it.

# Building / Debugging the Solution 
1. Open a Node command prompt at\SafetyDiscussions\SafetyDiscussionsWeb.
2. Run `npm install`.
3. Open the .SLN file.
4. Configure the *Site URL* property of the SafetyDiscussions project to point to a SharePoint Online site. Enter credentials when prompted.
5. Press Control + F5 to build the solution, deploy it to the SharePoint site and run it from localhost.
6. Trust it when prompted by SharePoint Online.


