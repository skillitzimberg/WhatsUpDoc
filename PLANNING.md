# Project Planning

## Purpose
To create a website where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in your city (Portland or Seattle depending on where you are) who can treat their medical issue.

## Setup Instructions
- [ x ] Place your token in an .env file at the top level of your directory. (For grading purposes, name your API key variable exports.apiKey in .env. Keep spelling and capitalization identical, as it considerably speeds up the grading process.)  
- [ x ] Include .env in .gitignore.  
- [ x ] Use at least two JavaScript files: One to receive form input and another to make an API request and display results.  

## Assignment Objectives
- [ x ] Does the application correctly use webpack?
- [ ] Did you follow all setup instructions, including storing your API key?
- [ x ] Does the app separate user interface and business logic functionalities into different JavaScript files?
- [ x ] Does the application correctly make an API call?
- [ x ] Does the application correctly parse data from the API response?
- [ x ] Does the application handle errors when the API call doesn't return a 200 OK status as well as return a message if the API returns no results?
- [ ] Code and Git documentation follow best practices (setup instructions in README, .gitignore file discluding unnecessary content from repo, detailed well-formatted commit messages, etc.)
- [ x ] Does the project demonstrate concepts covered this week? If prompted, are you able to discuss the flow of your code and the concepts behind it with an instructor using correct terminology?
- [ ] Is the app in a presentable, portfolio-quality state?
- [ ] Is required functionality in place by the Friday deadline?

## Use Cases
- [ x ] A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
- [ x ] A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
- [ x ] If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
- [ x ] If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
- [ ] If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)



## Specifications:

* Spec : Get the user's medical issue:
- [ ] **Expect:**  
Input: asthma;  
Output: list of doctors treating asthma;

* Spec : Get the user's chosen doctor:
- [ ] **Expect:**  
Input: some input;  
Output: some output;

* Spec : Make an API call to BetterDoctor:
- [ ] **Expect:**  
Input: API key;  
Output: json object containing applicable data;


## Planning

1. Configuration/dependencies
  * This should include ALL dependencies.
  * It should also include WHERE they are defined and used in the project
  * It could include a short description of what each does for you

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for ...
  * Template/html page for ...
  * Template/html page for ... (one for each route/integrated user story)
  * Display...
  * Integrate feature that...

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor minor portion of...
  * Delete unused...
  * Make README awesome
