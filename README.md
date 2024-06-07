# QA testing  

## Web Automation
The Web Automation project can be found in the `web_automation` directory.  

### Best Practices summary  
In this web automation project, the main goal has been to create an E2E test aimed to be maintainable and expanded by several developers.  
  
List of features:  
1. P.O.M.
  - Page Objet Models have been used to improve maintainability
2. Fixtures
  - A single fixture has been added, with the single functionality (for now) to block the `cookie consent` popin from all pages
  - this fixture is integrated in the `.forEach` hook in the test file
    - ideally, this fixture would be integrated as an auto-called fixture and there would be no need to add it to each test file
3. Utils
  - an utils file has been added with helper methods to aid in the filling of the forms and keep the POM and test files clean.
  
---
  
## User API  
This API exercise has been created and executed using Postman. The directory of said project can be found in the directory called `user_api`.  
  
### Notes about the API project  
You can find the `SQLI-test.postman_collection.json` file within the project's directory. This file is merely an export of the Postman collection.  
  
Worth noting, perhaps is that this API took the POST (for user creation) and GET (for user retrieval by email key) parameters through `form-data` input instead of the most usual way which would be through body's JSon.  
  
Also worth noting is that the main parameter for the API to set users as unique and thus avoid user duplication is the `email` field. I've taken this into consideration and I've attached a new email that I haven't used just so it will run fine the first time it'll be called.  
  
---
  
## Final notes  
Thank you for this chance to test my skills I've had fun with it. For your information, I have completed the exercises in approximately 4 hours. Most time has been spent on the Web Automation project.