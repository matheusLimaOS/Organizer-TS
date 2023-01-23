# Organizer-TS
## Make a list of movies you are interested in or have watched
## LINK DEPLOY: https://orgarnizer.onrender.com

### POST: /movie
#### Body: ```{ "name": "Os Vingadores", "streaming": "netflix", "genre": "action","alreadySaw": "false" ,"comment"?: "Filme legal" } ```
#### insert a movie

### GET: /movie
#### Return list of all movies

### GET: /movie/alreadyseen
#### Returns the list of movies that have already been seen

### PUT: /movie/:id
#### Body: ```{ "comment"?: "Filme legal" } ```
#### mark a movie as already seen, and its possible to add a comment

### DELETE: /movie/:id
#### Delete a movie
