# wbdv-sp21-01-harrisonjwong-project-backend

## CS 5610 SP21 Project - Backend Repo

Note: This repo contains the backend. 
The frontend is at https://github.com/harrisonjwong/wbdv-sp21-01-harrisonjwong-project.
Both are required to run the app.

Uses MongoDB and Node.js (Express, Mongoose)

### Instructions

1. Install Mongo with [Homebrew](https://brew.sh) or your preferred way
   1. `brew tap mongodb/brew`
   2. `brew install mongodb-community@4.4` 
2. Clone the repo
3. Do `npm install`
4. Create a folder in the repo for the database (I call it db)
5. Run `mongod --dbpath db` to start the Mongo server
   1. You can access the mongo shell from another terminal window with `mongo`
6. Create a .env file
   ```
   DB_USER=user (your username)
   DB_PASS=pass (your password)
   ALLOW_ORIGIN=http://localhost:3000 (or location of the React app)
   ```
6. Do `npm start` or `node server.js` to start the server



