import { Router } from "express";
import { postTest, putTest } from "../controllers/test.controller.js";

const router = Router()

router.post('/hello', postTest)
router.put('/hello', putTest)

export default router