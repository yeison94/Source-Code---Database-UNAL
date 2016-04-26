DATABASE API

This page represents the latest published version of Database API


STRUCTURE

    --- models/
    -------- users.js   //  user model
    --- routes/
    -------- routes.js  //found in the project root
    - package.json      // define all our node app and dependencies
    - app.js            // configure our application and create routes

Install project

$ npm install

Execute project

$ node app.js

How to use it?

Verify:

API call:
http://ix.cs.uoregon.edu:3000/users?email={email user}

Parameters:
email: Works as the id of the user

example:
http://ix.cs.uoregon.edu:3000/users?email=juan_perez@hotmail.com

API response

Email exists in database:

{
"success": false,
"email": "user email",
"message": "msg"
}

Email not exists in database:

{
"success": true,
"email": "user email",
"message": "msg"
}

Register User:

API call:
http://ix.cs.uoregon.edu:3000/users

example JSON:

{
	"name" : "Jeison Andres Hurtado",
	"email" : "yeison_andres94@hotmail.com",
	"password" : "123456789",
	"gender" : "Male",
	"picture" : [
		{
			"ID" : "12345",
			"base64" : "eRHR0cDovL3NhZHNhZnNhZnNmc2ZzYWY="
		},
		{
			"ID" : "32bbvs",
			"base64" : "aHR0cDovL3NhZHNhZnNhZnNmc2ZzYWY="
		}
	],
	"externalID" : "skjdjfb87u345k"
}


Validate User:

API call:
http://ix.cs.uoregon.edu:3000/user?email={email user}&password={password user}

Parameters:
email: Works as the id of the user
password: Each user has a password

example:
http://ix.cs.uoregon.edu:3000/user?email=juanperez@hotmail.com&password=123456789

The user was validated successfully:

{
	"email": "email user",
	"externalID": "id external user",
	"success": true,
	"error" : null
}

The user was not validated successfully:

{
	"email": "email user",
	"externalID": "id external user",
	"success": false,
	"error" : "Error message"
}

The user does not exists en database:

{
	"email": "email user",
	"externalID": null,
	"success": false,
	"error" : null
} 

