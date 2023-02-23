import {Router} from "express";
import { pool } from "../db.js";

const router = Router();

router.get('/', async (req, res) =>{
 console.log("index");
})

export default router;