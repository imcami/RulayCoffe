import 'dotenv/config'
import express from "express"
import connectionMongoose from './db/mongoose'
import cookieParser from 'cookie-parser'
import routerProducts from './routes/routerProducts';
import routerSession from './routes/routerSession';
import cors from 'cors'
import * as path from 'path'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import multer from 'multer'


//importo los modelos
const start = async () => {
    await mongoose.connect(process.env.MONGODBURL, { useNewUrlParser: true, useUnifiedTopology: true })

    const resultados = await orderModel.paginate({ size: "medium" }, { limit: 1, page: 2 })
    console.log(resultados)
   
}
app.use(session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGODBURL,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
        ttl: 30,
    }),
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))
//rutas validas a mi servidor
const whiteList = ['http://localhost:4000'] //lista blanca



const corsOptions = {
    //reviso si el cliente que intenta ingresar esta en mi lista 
    origin: (origin, callback)=> {
            if(whiteList.indexOf(origin) !== -1){
                callback(null, true) 
            }else{
                callback(new Error('Not allowed by CORS'))   
            }
    }
}

// express
const app = express()

app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser(process.env.SIGNED_COOKIE)) //firmo la cookie
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/products', routerProducts)
app.use('/auth', routerSession)

app.listen(4000, () => {
    console.log(`Server on port 4000`)
})

// conexion a la base de datos
connectionMongoose().then(connect => console.log("Mongoose conectado"))

//multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/assets/img')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`)
    }
})
const upload = multer({ storage: storage })

//Routes
app.use('/product', routerProducts)
app.use('/user/', routerUser)
app.use('/api/cart', routerCart)
app.use('/api/session', routerSession)
const server = app.listen(app.get("port"), () => console.log(`Server on port ${app.get("port")}`))