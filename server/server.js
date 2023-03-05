const app = require("./app");
const connectDatabase = require("./config/database")

//handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log("Shuting down the server due to Uncaught Exception");
    process.exit(1);
})
// config

if(process.env.NODE_ENV !== "PRODUCTION"){   
    require("dotenv").config({ path: "config/config.env" });
}

// Connecting to database
connectDatabase();


const server = app.listen(process.env.PORT,(req,res)=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})

// unhandled promise rejection
process.on("unhandledRejection",err => {
    console.log(`Error : ${err.message}`);
    console.log("Shuting down the server due to unhandled Promise Rejection");
    server.close(()=>{
        process.exit(1);
    });
});