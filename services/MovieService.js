class MovieService {
    constructor(database) {
        this.database = database;
    }

    async save(movie) {
        this.database(movie);
    }
}