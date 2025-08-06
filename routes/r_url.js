import { Router } from "express";
import { generateShortUrl,} from "../controllers/c_url.js";

const urlRouter=Router();

urlRouter.post("/shorten", generateShortUrl);   

export default urlRouter;   