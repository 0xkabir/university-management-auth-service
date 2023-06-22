import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function bootstrap() {
    try{
        await mongoose.connect(config.database_url as string)
        console.log("Database Connection Successful");

        app.listen(config.port, ()=>{
            console.log(`Application Listening at port ${config.port}`);
        })
    }
    catch(error){
        console.log(`error connecting to database\n${error}`);
    }
}

bootstrap();