import express from "express";
import mongoose from 'mongoose';
import bodyParser from "body-parser";


import postRoutes from './routes/post';


const app = express();
const port = 8080; // default port to listen
const router = express();

mongoose
    .connect("mongodb://localhost:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to mongoDB..."))
    .catch((err) => console.log(new Error("Colud not connect to mongoDB")));

/** Log the request */
router.use((req, res, next) => {
    /** Log the req */
    // logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
    console.log('req',req);

    res.on('finish', () => {
        /** Log the res */
        console.log('res',res);
        // logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    })

    next();
});

/** Parse the body of the request */
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/** Rules of our API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});


// // app.use(cookieParser());
// app.use(
//     bodyParser.urlencoded({
//         extended: true,
//     })
// );
// app.use(bodyParser.json());

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));



// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello woffrdddfffffffffffffffffffffffffffffffffffffffldf!");
});
app.get("/test", (req, res) => {
    res.send("Test!");
});

router.use('/posts', postRoutes);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});


// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});