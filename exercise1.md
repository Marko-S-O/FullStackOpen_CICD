I'm choosing enterprise Java for the language. The choise of tools depends wether we are doing platform agnostic development or want to commit ourselves to a cloud service provider in a way that is not easy to reverse. 
I chooce the first option here even if it's not very fashionable.

First, we need to choose a CI/CD platform. I would pick Jenkins. It's usually safe to pick an industry standard solution unless there is no clear reasoning to pick something else. 
Git would be a natural choise for version control.
The components for linting, building, testing, packaking and deployment would follow the same principle:
- Linting: a static code analyze tool is needed and can be configured to do this, SonarQube.
- Building: Maven
- Testing: JUnit is a natural choise for unit testing. For truely automated end-to-end testing, we need a tool that not can only run the test but also setup the test data and validate results. Robot Framework would be the choise here.
- Packaking: Maven again here
- Deployment: If allowed, I would use docker to deliver to software to runtime environments. 

 
