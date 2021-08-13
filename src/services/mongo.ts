import { connect } from "mongoose";
import loadModels from "@model/index";

class MongoDBService {
    public static async connect(url: string, reconnect = true): Promise<void> {
        // Initialize the connections
        const mongoose = await connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        mongoose.connections.forEach((connection) => {
            connection.on("error", (err) => {
                console.log(err);
            });
            // If auto-reconnect should be activated
            if (reconnect) {
                // Listen for the disconnected event
                connection.on("disconnected", () =>
                    // Start again
                    MongoDBService.connect(url)
                );
            }
        });

        // Load the models?
        loadModels();
    }
}

export default MongoDBService;
