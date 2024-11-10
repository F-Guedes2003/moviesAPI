import mongoMovie from "../models/mongoModels/mongoMovie";

class MongoDatabaseService {
    async save(data) {
        const modelInstance = new mongoMovie({
            "name": data.name,
            "gender": data.gender,
            "year": data.year
        });
        
        modelInstance.save();
    }
}