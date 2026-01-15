import express from 'express'
import {fillForm} from "../controller/formController.js";

const router = express.Router()


router.post("/fillForm", fillForm)


export default router;