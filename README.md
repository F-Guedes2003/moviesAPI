# moviesAPI

## Project Structure

### Server.js
there is the core of the application, the routes, bodyParsers and all the business logic are defined in it

### models
There is where the project classes are defined, there are 2 classes:

#### Generator.js
It is an aux class to generate classes id

**movieIdCounter:** stores the current movie id;

**Generator.movieId():** it is the method that gives the movie id properly and increments it.

### Data
there is where the data as the movies are stored
