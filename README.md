## Description

A REST API for managing used car prices typically involves endpoints for various CRUD (Create, Read, Update, Delete) operations on car listings, as well as endpoints for submitting reports about sold cars and retrieving estimates based on those reports. 

## How to run project
Project is using npm as package manager, but you can use yarn as well.
##### 1. Install Dependencies:
```bash
$ npm install
```

##### 2. Running the app:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

##### 3. Test the app:

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## API Endpoints

| Method | Route | Auth | Body Example | Description |
|---|---|---|---|---|
| POST | /auth/signup | - | "email": "test@test.com",<br>"password": "password" | Create a new user |
| POST | /auth/signin | - | "email": "test@test.com",<br>"password": "password" | Sign in as an existing user |
| GET | /auth/whoami | Yes | - | Get current user |
| POST | /auth/signout | Yes | - | Sign out |
| GET | /auth/:userId | - | - | Find a particular user |
| PATCH | /auth/:userId | Yes | "password": "newPassword" | Change user password |
| DELETE | /auth/:userId | Yes | - | Delete user |
| POST | /reports | Yes | "make": "car",<br>"model": "model",<br>"year": 2000,<br>"mileage": 1000000,  <br>"lng": 0,<br>"lat": 0,<br>"price": 10000 | Add new report |
| PATCH | /reports/:id | Admin | "approved": true | Approve an existing report |
| GET | /reports | - | - | Get an estimate for an existing using params, for example<br>"?make=car&model=modela&lng=0&lat=0&mileage=1000000&year=2000" |
