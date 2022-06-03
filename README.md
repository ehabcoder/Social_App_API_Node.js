# Social_App_API
A Social App API for managin a simple application which includes:
1. user controller
2. posts controller

The routes for user are:
POST: your_domain/api/user/signup => Signup a new user
BODY: {
	email: string,
	password: string,
      }
POST: your_domain/api/user/login => login user
BODY: {
	email: string,
	password: string,
      }

The routes for posts are:
POST: your_domain/api/posts => create new post 
BODY: {
	title: string,
	content: string,
	imagePath: string,
	creator: string
      }
GET: your_domain/api/posts => get all posts
GET: your_domain/api/posts/:id => get a specific post
PUT: your_domain/api/posts/:id => update a specific post
DELETE: your_domain/api/posts/:id => delete a specific post# Social_App_API

