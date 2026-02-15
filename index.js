process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error', err)
    process.exit(1) //mandatory (as per the Node.js docs)
})

import express from 'express'
import connectDB from './database/dbConnection.js'
import homeRouter from './src/modules/home/home.route.js'
import loginRouter from './src/modules/login/login.route.js'
import registerRouter from './src/modules/register/register.route.js'
import messagesRouter from './src/modules/messages/messages.route.js'
import userRouter from './src/modules/user/user.route.js'
import session from 'express-session'
import mongoSession from "connect-mongodb-session"
let MongoDBStore = mongoSession(session);
import cors from 'cors'
import path from 'path'
const app = express()
const port = process.env.PORT || 3000


var store = new MongoDBStore({
    uri: 'mongodb+srv://Sara7a-App:AnoyFPSkMrIcBdME@cluster0.ydjbez3.mongodb.net/sara7a-app',
    collection: 'mySessions'
});
app.use(session({
    secret: 'keyboard category',
    resave: false,
    saveUninitialized: true,
    store: store
}))
app.set("views", path.join(path.resolve(), 'views'))

app.set("view engine", "ejs")
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(path.resolve(), 'public')))

// Connect to MongoDB
connectDB()
app.use(homeRouter)
app.use(loginRouter)
app.use(registerRouter)
app.use(messagesRouter)
app.use(userRouter)


process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason)
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))