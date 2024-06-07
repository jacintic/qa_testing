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
  - an utils file has been added with helper methods to aid in the filling of the forms and keep the POM and test files clean
