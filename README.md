# CS-465

# Architecture
1. Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?

The frontend development we used in our stack project was Express HTML, JS and an SPA site. Both of these frontend styles is very different and their functionality differes a little. SPA's have a slower initial load but they work faster afterwords.  
# Functionality
2. How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
JSON is a form of data while Javascript is a scripting langauge used for frontend and backend development. JSON ties frontend and backend development by using data in a format that is understandable by both the backend and frontend langauge. Data can be transmitted in JSON form from MongoDB to Javascript frontend, without needing to alter the data as both languages understand JSON format. For example, in the fullstack program we made a query to MongoDB to get all trips; the response for this query was turned to JSON then passed to the frontend and printed to the console.

# Testing
3. Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
There are four different methods of request in a fullstack applicaiton. These include GET, PUT, POST, and DELETE. GET method is to retrieve data, PUT is to update it, POST is to add data, and DELETE is to remove it. Endpoints are URL strings which are connected to a particular route that the user's request is asking for. This route from the url will return a precise view or data. Security in a fullstack application is added through authorization and authentication. Authorization is used when a user is asked to log in in-order to be able to perform certain functions. For example, without logging in the user would be able to view the trips but not add, or edit a trip. Authentication is used when a user logs in without the correct password and username the user won't be able to login and create a JWT token to use for requests.

# Reflection
4. How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
