import express from "express";
import {
  addCompany,
  getAllCompanies,
  deleteCompany,
} from "../controller/company.controller.js";

const router = express.Router();

router.post("/add", addCompany);         // For POST
router.get("/all", getAllCompanies);     // For GET
router.delete("/delete/:id", deleteCompany); // For DELETE

export default router;
