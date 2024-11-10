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

#### Movie.js
it is the movie class properly speach, it contains the **id** **name**, **gender** and the **year** of the movie

### Data
there is where the data as the movies are stored

# Project purpouse
The following project purpouse, is to practice my skills with javascript, more specifically with Express framework with a solid and concrete project, it is valid to remind that this is my first Express project, so there should be some code smells on it, and of sure there should be many best practices that could be used to develop it. in a nutshell, this is a train project to gradually improve my express skills.
