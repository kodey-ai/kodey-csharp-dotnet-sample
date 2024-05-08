# kodey-csharp-dotnet-sample

This repository is an example Kodey.ai Coding Agent Workflow

## Objectives

In this sample, we will explore how Kodey.ai can create projects for csharp dot net web apps.

## Project Setup & Steps 

1. Signup for a new Kodey.ai account or login to your existing Kodey.ai environmenty (link-here)
2. Configure your Kodey.ai integrations to the desired issue tracker and cloud git provider.
3. Fork this repository, and clone it to the cloud git provider of your choosing (Github, Azure DevOps, Bitbucket)
4. Create a new dev branch in repository. Our kodey will create any new branches out of dev branch always.
4. Create the sample issue / work item in your issue tracker. Copy and Paste the issue description from below.
5. Execute the below prompt in the Kodey.ai chat UI
6. Validate the commits and pull requests in your cloud git provider

### SAMPLE PROMPT - Github Tools (Sample Web App with Csharp DOT NET)
```
    platform: github

    repository to work on: kodey-csharp-web-sample

    branch name to create: feature/csharp-web-sample-v6

    Information to agent: Do as the steps below are defined one by one. You are working in github repo so make sure to use tools related to github repo. You should write the actual implementation of code not just comments. Also make proper use of indentation and new line in code.

    SCENARIO: You are working in a project that involves creating a web portal where students submitting their information via a form and it should be saved in database. You should be working with .NET framework for the backend. Creating necessary models, routing files, etc is your responsibility along with all the HTML, CSS, JS scripts.

    Steps:

    step 1: Create a new branch with name first and then do the steps below.

    step 2: Create a model file in src directory that has field like user, full name, roll no, semester,etc. Make proper use of schema and database context.

    step 3: Create a routing file in src directory which makes the use of api to GET, POST and PUT the student details on database using above schema.

    step 4: Create a main file in root folder that initiates the .NET application and let us run the project.

    step 5: Create necessary HTML, CSS, JS files for the frontend in the root directory and make sure to use the correct references and scripts.

    step 6: Update file called README.md inside root folder and put all the details of the project.

    step 7: Create a new pull request from the above created branch with title "C# Web App .NET V6".

    step 8: Update this issue status to closed.

```

### SAMPLE PROMPT - Azure DevOps Tools (Sample Web App with Csharp DOT NET)
```
    platform: azure
    
    repository to work on: kodey-csharp-web-sample

    branch name to create: feature/csharp-web-sample-v6

    Information to agent: Do as the steps below are defined one by one. You are working in azure repo so make sure to use tools related to azure repo. You should write the actual implementation of code not just comments. Also make proper use of indentation and new line in code.

    SCENARIO: You are working in a project that involves creating a web portal where students submitting their information via a form and it should be saved in database. You should be working with .NET framework for the backend. Creating necessary models, routing files, etc is your responsibility along with all the HTML, CSS, JS scripts.

    Steps:

    step 1: Create a new branch with name first and then do the steps below.

    step 2: Create a model file in src directory that has field like user, full name, roll no, semester,etc. Make proper use of schema and database context.

    step 3: Create a routing file in src directory which makes the use of api to GET, POST and PUT the student details on database using above schema.

    step 4: Create a main file in root folder that initiates the .NET application and let us run the project.

    step 5: Create necessary HTML, CSS, JS files for the frontend in the root directory and make sure to use the correct references and scripts.

    step 6: Update file called README.md inside root folder and put all the details of the project.

    step 7: Create a new pull request from the above created branch with title "C# Web App .NET V6".

    step 8: Update this issue status to closed.
```

### SAMPLE PROMPT - Jira / Bitbucket (Sample Web App with Csharp DOT NET)
```
    platform: bitbucket

    repository to work on: kodey-csharp-web-sample

    branch name to create: feature/csharp-web-sample-v6

    Information to agent: Do as the steps below are defined one by one. You are working in bitbucket repo so make sure to use tools related to bitbucket repo. You should write the actual implementation of code not just comments. Also make proper use of indentation and new line in code.

    SCENARIO: You are working in a project that involves creating a web portal where students submitting their information via a form and it should be saved in database. You should be working with .NET framework for the backend. Creating necessary models, routing files, etc is your responsibility along with all the HTML, CSS, JS scripts.

    Steps:

    step 1: Create a new branch with name first and then do the steps below.

    step 2: Create a model file in src directory that has field like user, full name, roll no, semester,etc. Make proper use of schema and database context.

    step 3: Create a routing file in src directory which makes the use of api to GET, POST and PUT the student details on database using above schema.

    step 4: Create a main file in root folder that initiates the .NET application and let us run the project.

    step 5: Create necessary HTML, CSS, JS files for the frontend in the root directory and make sure to use the correct references and scripts.

    step 6: Update file called README.md inside root folder and put all the details of the project.

    step 7: Create a new pull request from the above created branch with title "C# Web App .NET V6".

    step 8: Update this issue status to closed.

```

## Once you have set the description of the issue in your relavant system. You need to use kodey UI Chat and execute below statement to get the work done. 

### Github Issue and Github Repo
```
   Get the issue with id <issue_id> from github repo and do as the description of the issue says.
```

### Azure Repo Issue and Azure Repo
```
   Get the issue with id <issue_id> from azure repo and do as the description of the issue says.
```

### Jira Issue and Bitbucket Repo
```
   Get the issue with id <issue_id> from bitbucket repo and do as the description of the issue says.
```

## Confirming Successful Sample Outputs

1. Confirm that the branch was created on the issue / work item
2. Confirm that the code created in the associated pull request contains the following
3. Confirm that the work item/issue/ticket in your relevant issue tracking platform is updated