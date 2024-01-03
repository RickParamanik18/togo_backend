import mongoose from "mongoose";

(async () => {
    try {
        await mongoose.connect(process.env.DB_URI + process.env.DB_NAME);
        console.log("CONNECTED TO DB!!");
    } catch (err) {
        console.log(err);
    }
})();
