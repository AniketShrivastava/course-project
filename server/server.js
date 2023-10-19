const app = require("./app")
const {config} = require("dotenv")
const connectToDB = require("./config/db.connection")
config()

const PORT = process.env.PORT || 5000


app.listen(PORT, async()=>{
    await connectToDB()
    console.log(`App is running at http:localhost:${PORT}`)
})







