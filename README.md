# flashcard-app-backend

1. clone repo. May need to delete package-lock.json, yarn.lock, node modules. Run npm i again.

2. navigate to folder in two different terminal windows

3. (activates database) in one terminal run: mongod

4. In the other terminal, run: npm run start


5. make sure that the "CORS" chrome tab is turned on

6. If #3 doesn't work, try running: brew services start mongodb-community@4.4



# Making request via postman - All Routes are protected (Require login first)

# User Routes

- Create user: POST localhost:4000/api/user/register
- Get all users: GET localhost:4000/api/user
- Get specific user: GET localhost:4000/api/user/:userId
- Delete a user: DELETE localhost:4000/api/user/:userId
- Update a user: PUT localhost:4000/api/user/:userId

# Auth Routes

- Register: POST localhost:4000/api/user/register
- Login: POST localhost:4000/api/user/login

# Card Routes

- Fetch all cards: GET localhost:4000/data/cards
- Add a card: POST localhost:4000/data/cards
- Get a specific card: GET localhost:4000/data/cards/:cardId
- Edit a card: PUT localhost:4000/data/cards/:cardId
- Deletea a card: DELETE localhost:4000/data/cards/:cardId


# Using Protected routes

- Only protected route right now: localhost:4000/data/cards

# Accessing the protected route:

- POST Request to localhost:4000/api/user/login with registered login credentials.
- If login is successful, it will return a valid JWT token.
- Copy returned JWT token, navigate to 'Headers' area of Postman. Create key called 'auth-token'. In value column, paste the auth token. Make sure far left box is checked.
- Make GET request to localhost:4000/data/cards. Should return all cards.
- If you get error: 'Invalid Token' it means the token is no longer valid, or was altered. If you get error: 'Access Denied', this means you forgot to put in your token


# To Do List

- Figure out how 'Log Out' will work (current high priority).
- Make JWT expire after one day (also in article).
- https://medium.com/devgorilla/how-to-log-out-when-using-jwt-a8c7823e8a6
- Need to delete the token stored on the client (front end). It is apparently best practice to perform 'logout'. Need to start making API calls in frontend. 
