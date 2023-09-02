import express from "express";
import { sendEmailController } from "../controllers/portfolioController.js";
const router = express.Router();

// ROUTES
router.post("/sendEmail", sendEmailController);
export default router;
