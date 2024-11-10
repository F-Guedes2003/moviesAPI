import mongoose from "mongoose";
import { Schema } from "mongoose";

const movie = new Schema({
    "name": String,
    "gender": String,
    "year": Number
})

const mongoMovie = mongoose.model('Movie', movie);
export default mongoMovie;