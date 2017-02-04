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
- Being a proof of concept there are no unit tests. In reality there would be unit tests around React components, service layer etc.

# Design Decisions
- Web app not a Windows Universal, iPad iOS app etc.
- Provider-hosted app for maximum control over HTML rendered - don't want SP's UI in the way of being as reactive as possible.
- Office Fabric UI chosen (in conjunction with Bootstrap) as it is responsive, provides an Office-themed UI, and provides various useful components.
- Javascript-heavy solution to minimise postbacks and maximise reactiveness.
- React JS chosen as it is lightweight and is the core way of using Fabric UI.

