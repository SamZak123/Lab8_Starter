# Lab 8 - Starter
1. I would fit automated tests in our Recipe project development pipeline within a Github action that runs whenever code is pushed. This way, bugs can be caught early on, and would make more intuitive sense to test features whenever something new is added, and before something is finalized and deployed. 
2. No
3. No, you wouldn't want to use a unit test to test the message feature because it is the whole premise of the application, and should be split up into mini subcomponents of messaging to involve unit testing. 
4. Yes, you would want to use a unit test to test the max message length feature because it is a smaller component of the application that could be tested through individual unit tests. 