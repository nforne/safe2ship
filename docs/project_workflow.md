# Project Workflow

### Project Communication

- What has been accomplished
- What will you be working on
- What hurdles are you facing

Friday, Jan 14
- Project Setup and Documentation

Weekend
Monday
Tuesday
Wednesday
Thursday
Friday

------ Extra Time

Weekend
Monday
Tuesday- TESTING 
Wednesday
Thursday- Project Presentation


### Project Workflow

##### Project Milestones

We have decided to take a TDD approach to building our app. Testing integration at milestones.

End of Day 1: Project Setup and Documentation complete
Weekend- Get familiar React Native, work on minor feature (optional)

**Monday - Tuesday:**
- Backend setup
- User authentication & User pages
- Testing and Integration 

**Wednesday - Thursday:**
- Messaging ( websocket )
- Google Maps Api
- Testing and Integration 

**Friday:**
- App integration, Testing to make app is working
- Stretch Features

**Weekend:**
- Catch up and work on stretch features

##### Git Workflow

- Always checkout a branch, never code on master/main branch
- Use github board for managing issues and features to work on

**Follow these guidelines:**
1. On main, pull from origin main
2. Create a feature branch (feature/feature_name)
3. Update your branch with the latest changes from main
    - git checkout main
    - git pull origin main
    - git checkout feature/feature_name (use git branch as needed)
    - git merge main (merge main into the feature branch)
    - resolve conflicts and commit changes
4. Push the feature branch to github
    - git push -u origin feature/feature_name (-u adds an upstream branch so the next time you can type only git push from that branch)
5. Create a pull request on GitHub
    - you should not merge your own pull request
6. Checkout to main and pull again from origin main

[git-workflow](https://github.com/akhan445/lhl-lectures/blob/master/w05d05-Midterm-KickOff/git-workflow.md)

##### How to distribute teamwork

- Work on setup together
- Decide on features to split as we reach milestones

##### Coding Sytles
- Follow airbnb style guide
[airbnb-guid](https://github.com/airbnb/javascript)