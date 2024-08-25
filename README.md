
# Blogging Platform API

Create a simple RESTful API with basic CRUD operations for a personal blogging platform.

## Requirements
The API should allow users to perform the following operations:
- Create a new blog post
- Update an existing blog post
- Delete an existing blog post
- Get a single blog post
- Get all blog posts
- Filter blog posts by a search term

Given below are the details for each API operation.

## Create Blog Post

Create a new blog post using the `POST` method, each blog post have the following fields:

```
POST /posts
{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"]
}
```

The endpoint should validate the request body and return a `201 Created` status code with the newly created blog post i.e.

```
{
  "id": 1,
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"],
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z"
}
```

or a `400 Bad Request` status code with error messages in case of validation errors.


## API Reference

#### Get all users

```http
  GET /api/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get user

```http
  GET /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




## Tech Stack

**Server:** Node, Express, mongoose
**Database:** mongoDB

