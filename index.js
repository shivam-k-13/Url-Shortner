import express from 'express';
import 'dotenv/config'; 
import connectToDB from './config/db.js';
import urlRouter from './routes/r_url.js';
import { redirectToUrl } from './controllers/c_url.js';

const app = express();
const PORT=process.env.PORT ;
app.use(express.json());



connectToDB();

app.use("/api/url", urlRouter );
app.get("/:short_url",redirectToUrl);

app.listen(PORT, () => 
  console.log("Server started at port " + PORT))  ;