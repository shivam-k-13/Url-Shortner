import { nanoid } from "nanoid";
import url_model from "../models/m_url.js";
import isValidUrl from "../services/urlValidation.js";
 


export async function generateShortUrl(req,res){
    try{
        const {original_url}=req.body;
    if(!original_url) {
        return res.status(400).send({message:"Long URL is required"});
    }
    if(!isValidUrl(original_url))
    {
        return res.status(400).send({message:"Invalid URL"});
    }
    const short_url=nanoid(10);

    const dataToSave=new url_model({original_url,short_url});
    await dataToSave.save();

    res.status(201).send({shortUrl: `${req.protocol}://${req.get("host")}/${short_url}`});

    }
    catch(error){
        res.status(500).send({message:"There is some error. Please come back later.", errString:error.message});
    }

}   

export async function redirectToUrl(req,res){
    try{
        const {short_url}=req.params;
        if(!short_url)
        {
            return res.status(400).send({message:"Short ID is required"});
        }
        const url= await url_model.findOne({short_url:short_url});
        if(url){
            return res.redirect(url.original_url)
        }
        else{
            return res.status(404).send({message:"No URL found"});
        }
    }
    catch(error){
        res.status(500).send({message:"There is some error. Please come back later.", errString:error.message});

    }
}