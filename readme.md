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
- Being a proof of concept, several simplifications :
  - No unit tests. In reality there would be unit tests around React components, service layer etc.
  - No specific considerations for auto-scaling / elasticity for server-side components.

# Design Decisions
Reactive considerations addressed as follows :
- Responsive
    - Provider-hosted app for maximum control over HTML rendered - don't want SP's UI in the way of being as reactive as possible.
    - Office Fabric UI chosen (in conjunction with Bootstrap) as it is responsive (in terms of mobile vs tablet vs desktop layouts), provides an Office-themed UI, and provides various useful components.
    - Client-heavy solution to minimise postbacks and maximise reactiveness - allows messages / spinners etc while data is fetched / written.
    - React JS chosen as it is quick to load and is the core way of using Fabric UI.
- Message-driven
  - Not fully message-driven for this application's simple requirements. 
  - Event-driven, but Redux used to dispatch actions.
- Resilient
  - Failure of API calls is built into Redux state so the app can degrade gracefully.
  - Back-pressue from server back to client under heavy load not built into proof of concept.
- Elastic
  - Elastic server-side components not addressed in this proof of concept.

Other decisions :
- Web app not a Windows Universal, iPad iOS app etc.
- JS generated from Typescript for maximum maintainability and limiting bugs.



