# API
follow below commands to run program
1. npm i
2. nodmon app.js
3. mongo server should be up
4. GET /user
Now make a GET request to http://127.0.0.1:9000/user then we will get a list of all the users which are in the Database. 
For other POST, PUT & DELETE type of request, 
you can make use of any tool which allows creating HTTPRequest. 
GET /user/:id
When we make calls like this http://127.0.0.1:9000/user/1, 
then it will return the user with matching userId.
POST /user
When we make call http://127.0.0.1:9000/user with a POST Type request, 
it will add new user information to the Database. With a Post request, 
we required to send some data and the type of data.
In data part we send the user information in JSON format and set the content type as application/json 
and data will be like this:
{
“emailId”: “demo@example.com”,
“firstName”: “ABC”,
“lastName”: “XYZ”,
“password”: “123456”
}
PUT /user/:id
When we make call http://127.0.0.1:9000/user/1 with a PUT Type request,
it will update user information in database with matching user id. So, 
here whatever data passed it will be assigned to user with having userId 1.
DELETE /user/:id
When we make call http://127.0.0.1:9000/user/1 with a DELETE Type request,
it will remove user information from the database.
