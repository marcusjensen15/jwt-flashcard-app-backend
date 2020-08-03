# flashcard-app-backend

1. clone repo

2. navigate to folder in two different terminal windows

3. (activates database) in one terminal run: mongod

4. In the other terminal, run: npm run start 


5. make sure that the "CORS" chrome tab is turned on



# Making request via postman

- Get all cards: get requests to localhost:4000/cards
- Update a card: put request to localhost:4000/cards/:id - make sure to navigate to the body tab, select x-www-form-urlencoded, fill out keys/values.
- Delete a card: delete request to localhost:4000/cards/:id
- Create a card: post request to localhost:4000/cards - make sure to navigate to the body tab, select x-www-form-urlencoded, fill out keys/values.
- Read a card: get request to localhost:4000/cards/:id

Need to make userController the same as flashcardController
