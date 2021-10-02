# RESTful API with Knex.js and Bookshelf.js

## Main idea

Idea is to create Express.js RESTful API supported with database.

## System architecture

In this experiment I used following technologies:
- Node.js (with Express.js framework)
- Library JOI for creating and validating data models
- Library Bookshelf.js
- Library Knex.js with Faker for seeding DB data
- SQLite

We created API where we follow best practices, like:
- We used DDD (Domain Driven Design) pattern to organize repo
- We used domain centric philozophize pattern, so we have domain models created with Joi
- We structure files and folders by repository design parttern and service layer
- We follow RESTful pattern for handling routes
- Code-first approach to create migrations and migrate database

## Installation and running

So you need first to clone this repo.

You can locally run app with the following commands:

1. `npm install`
2. `npm migrate:latest`
3. `npm seed:run`
4. `npm start`

Then you can open app in your browser on `http://localhost:3000/`.

We have available paths supported with all CRUD operations:
- `/users`
- `/locations`
