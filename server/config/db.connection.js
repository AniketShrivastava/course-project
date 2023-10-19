const mongoose = require('mongoose')

const connectToDB = async()=>{
    try {
        const {connection} = await mongoose.connect(
            process.env.MONGO_URI || `mongodb://127.0.0.1:27017/lms_project`
        );
        if(connection){
            console.log(`Connection to MongoDB:${connection.host}`)
;        }
    } catch (error) {
        console.log(error);
        process.exit(1)       
    }
}

module.exports = connectToDB;