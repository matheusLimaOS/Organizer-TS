# Organizer-TS
## Make a list of movies you are interested in or have watched

### POST: /movie
#### Body: ```{ "name": "Os Vingadores", "streaming": "netflix", "genre": "action","alreadySaw": "false" ,"comment"?: "Filme legal" } ```
#### insert a movie

### GET: /movie
#### Return all list of movies

### GET: /movie/alreadysaw
#### Return all list of movies who are already saw

### PUT: /movie/:id
#### Body: ```{ "comment"?: "Filme legal" } ```
#### mark a movie as already seen, and its possible to add a comment

### DELETE: /movie/:id
#### Delete a movie
