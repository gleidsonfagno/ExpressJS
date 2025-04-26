import { userLogin, userSignup } from "./controller.js"
import express from "express"

const router = express.Router()

router.get("/login", userLogin)
router.get("/signup", userSignup)

export default router