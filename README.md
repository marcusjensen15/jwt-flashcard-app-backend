# flashcard-app-backend

1. clone repo

2. navigate to folder in two different terminal windows

3. (activates database) in one terminal run: mongod

4. In the other terminal, run: npm run start 


5. make sure that the "CORS" chrome tab is turned on



# Making request via postman

# User Routes

- Create user: POST localhost:4000/api/user/register
- Get all users: GET localhost:4000/api/user
- Get specific user: GET localhost:4000/api/user/:userId
- Delete a user: DELETE localhost:4000/api/user/:userId
- Update a user: PUT localhost:4000/api/user/:userId

# Card Routes

- Fetch all cards: GET localhost:4000/data/cards
- Add a card: POST localhost:4000/data/cards
- Get a specific card: GET localhost:4000/data/cards/:cardId
- Edit a card: PUT localhost:4000/data/cards/:cardId
- Deletea a card: DELETE localhost:4000/data/cards/:cardId


# To Do List

- Figure out how 'Log Out' will work.
- Private routes: only able to access cards if user is logged in.
- Write real verification middleware.
