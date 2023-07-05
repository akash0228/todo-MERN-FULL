import Express, { urlencoded } from "express";
// earlier we needed to require
import connection from "./db/conn.js";
import cors from 'cors';
import route from "./routes/routes.js";
import bodyParser from "body-parser";

const app=Express();

app.use(cors());

app.use(bodyParser.json({extended:true}));  // or direct express
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',route);

const PORT=8000;

connection();

app.listen(PORT,()=>{
    console.log(`Server is Running Successfully on port ${PORT}`);
})