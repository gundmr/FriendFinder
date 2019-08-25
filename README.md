# FriendFinder
## Purpose of Application:
FriendFinder" application -- basically a dating app. This full-stack site takes in results from your users' surveys, then compare their answers other users. The app then shows the user the name and picture of the best overall friend match (within available data set).

## Requirements
* Modularity in the form of separate files for server logic, storing of friends, views, and routing
* Survey has 10 question. Each answer on the scale from 1 to 5 based on how much the user agrees or disagrees with a question
* Use express, body-parser, and path npm packages in the server.js file
* Separate JavaScript files for routing (htmlRoutes.js and apiRoutes.js)
* Appropriate GET and POST routes for serving HTML pages and API calls
* Separate file for storing friends (friends.js)
* Calculate best match for user once survey is completed and return that match to the user
* Deployment to Heroku

## Technologies Used
* JavaScript
* jQuery
* node.js
* Express.js
* HTML
* Bootstrap 

## Code Explanation
* server.js file sets up the Express server, specifying our port number, the npm packages that need to be loaded, and also the routes, which we have externalized
* There are 2 separate HTML files (home.html and survey.html) that serve as the front-end portion of our code; they determine what the user sees (the homepage and the survey, which will also show the resulting best match)
* Our 2 routing files (htmlRoutes.js and apiRoutes.js) determine the back-end logic (based on the request being made, the response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in our server-side data or add new friends
* Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object
* A modal is then toggled, displaying the the best match to the person who just took the survey
* Friends are stored as objects.
