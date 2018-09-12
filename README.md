# Idea
Repository to push in code changes related to my learning in Angular world along with .NET Core.

# Getting Started 
1) Angular:
https://angular.io/guide/quickstart
2) .NET Core:
https://docs.microsoft.com/en-us/dotnet/core/get-started?tabs=windows
- Upgraded AspNetCore to v2.1.4
3) SQL Server 2017 Express Edition:
https://www.microsoft.com/en-us/sql-server/sql-server-downloads

# Content

The first thing is to understand the architecture that revolves around Component and Modules and then to explore different scenarios as mentioned below:

1) Add a new component in the applicaiton and support navigating to that component
  1.1.) Added Visual Studio extension called "Angular Item Templates" to easily add different Angular items in the solution, link - https://marketplace.visualstudio.com/items?itemName=xpasza.Angular4ItemTemplates
2) Communicate data among components
  2.1.) In order to communicate data between components that does not have parent-child relationship, use a Service. Here, I've added a DataService. The service uses the  BehaviorSubject in order to publish the change to all the subscribers.
  2.2.) Understand the difference between BehaviorSubject and Subject. Added notes in the DataService.
 3) NgModel - Two-Way DataBinding
  3.1) Added an example for Event binding. Added an example of how to use NgIf.
