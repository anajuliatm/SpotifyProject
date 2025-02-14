//JavaScript Assincrono
//await assync
//Fullfilled

import { MongoClient } from "mongodb";

const URL =
"mongodb+srv://anajuliatm:bdana1234@cluster0.civk0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//user: anajuliatm
//senha: bdana1234
const client = new MongoClient(URL);

export const db = client.db("spotifyProject");

const songCollection = await db.collection("songs").find({}).toArray();



console.log(songCollection);